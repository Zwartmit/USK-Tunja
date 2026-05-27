import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "INSTAGRAM" },
  { href: "#", label: "CONTACTO" },
  { href: "#", label: "RECURSOS" },
  { href: "#", label: "LEGAL" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-stack-md px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg w-full border-t-4 border-accent-stamp bg-ink transition-all duration-300">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="font-headings text-headline-lg font-bold text-paper">
          USK TUNJA
        </div>
        <a
          href="http://www.urbansketchers.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            alt="Urban Sketchers network"
            src="/usk-logo.jpg"
            width={120}
            height={120}
            className="brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-200"
            style={{ width: 'auto', height: '60px' }}
          />
        </a>
        <div className="font-mono-sm text-[10px] text-paper/60 uppercase">
          I'm an <span className="font-bold">urban sketcher</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-mono-sm text-mono-sm uppercase">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-paper opacity-60 hover:text-accent-stamp underline transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="font-mono-sm text-mono-sm uppercase text-paper opacity-60 text-center md:text-right max-w-xs">
        &copy; 2024 URBAN SKETCHERS TUNJA - DIBUJANDO EL MUNDO DIBUJO A DIBUJO
      </div>
    </footer>
  );
}
