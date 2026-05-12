"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/encuentros", label: "ENCUENTROS" },
  { href: "/bocetos", label: "BOCETOS" },
  { href: "/manifiesto", label: "MANIFIESTO" },
  { href: "/comunidad", label: "COMUNIDAD" },
];

export default function TopNavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center px-edge-margin-mobile md:px-edge-margin-desktop py-4 sticky top-0 z-50 bg-paper dark:bg-ink w-full border-b-2 border-ink dark:border-paper">
      <Link
        href="/"
        className="font-headings text-headline-md font-bold text-ink dark:text-paper uppercase tracking-tight"
      >
        USK TUNJA
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 font-mono-label text-mono-label uppercase tracking-widest">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-accent-stamp font-bold underline decoration-2 underline-offset-4"
                  : "text-ink dark:text-paper opacity-80 hover:text-accent-stamp transition-colors duration-200"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <button className="hidden md:block font-mono-label text-mono-label uppercase tracking-widest border-2 border-ink px-6 py-2 hover:text-accent-stamp transition-colors duration-200 neo-shadow-hover bg-paper text-ink">
        UNIRSE
      </button>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2 text-ink dark:text-paper">
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>
    </nav>
  );
}
