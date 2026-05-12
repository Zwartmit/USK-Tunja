import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const authors = [
  {
    name: "Carlos",
    lastName: "Gómez",
    handle: "@cgomez_arte",
    sketches: "03",
    isNew: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzfsYFkoajNhHLsO7SIHajDcyxUkBCJO5VjebXz6RHyIyqj6wrTj-Z2PZgnar-0i3rbwRss7G3xsV22aOjQskPUJ7e5O49Ej7RMiHIaPgA7OdF0vAT6C5Aoo_BT2nX_ZKS5kj-ZzHJbqymxidweE-1GsLzwJLSkRGqyOqjixPuij3CisaSkqQJq_qI8ppyOzXfOlPJHlsu8417EdjBq1lrLzl3hNvXV9wRWpwnKeDFbuTa9upj0cCExzYvg-QobRcqwEGT85FcsLg",
  },
  {
    name: "Ana",
    lastName: "Martínez",
    handle: "@ana.traza",
    sketches: "42",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR1SdRiW0IVzWfDBw28mOZ_sSR36iEyP3YAJLW5ru31eHk27CXeDHz7GXwvzL35lhQLStbZAUQLqQmaKOiKe9JkY82sITVHqLW_Zht1IzhFQcpM2vxPrm6w3kTqxK0TYfO5hbXpQRdoUEm-QM9_xKFcrTF4vgX3GFY0wlqXSH9g0pcnkQxu3CwVc9yp7P-jRdVurnE6uY46VRSZ0QqxN-_oKefY8nxRTpUBaRIwkBvPPsjtL5vP3vuy_eEHsBHCMMwHFOFR_izB6U",
  },
  {
    name: "Pedro",
    lastName: "Ríos",
    handle: "@pedro.rios.usk",
    sketches: "17",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPK5iFGHWyhK8K9R-FVTVqUh5kuzuRoS1MsRTT0L7TtVawq-DJqV4bTtEIKJVLInnvGYm3tCy6SPKF3Mc-PoACVkWzIfGaZAZ3PVKxLlxDL3G7R5aJq8jKnxTmq-7uYcGFDL3gPkMrXI2yl5gj9QLMFiZ_5YB3tL8sxVyGYGXOmANwHQc3KsVIDJOO1W8uW5SdnDCMkxCeME1EKTS8UwMTbX3WVkFjRE8Q2FcJLLqYHVK6bWHMTCvN3sTN_zQiS5BIfrFY8wgUU",
  },
  {
    name: "Sofía",
    lastName: "Rojas",
    handle: "@srojas_usk",
    sketches: "08",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANMIiQ_lfkJgWv63HTMG_MHot2cLUdB74DNclLJsYYRrJTCXhKXp95-RIYgWzoQe56l8yT1hoEyNOMKRpzRblZvDPYPA-cKgTfuNVlXzzGu8kYZitL1n7Kn_kg9YI6tDHq_ZDBDxK_XmDxow9PLZRFl9avqrOUKanQxWvqAC7fpzWT6vjKTqya7c8OvmC-AuyyASWjl63JTVnoB07TkpJV2mAFCu1rOizQWEE9BxxIUeyMgVpaLoGt93jQ7eAxtssZB_zKu8hU8Io",
  },
  {
    name: "David",
    lastName: "Silva",
    handle: "@dsilva_sketches",
    sketches: "24",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1UmEybMH90KTGUuQyTUjtejTJqaXAVuhx0SHwm-zxwnhJXxscAtKZD5S4rYhHPsG0oDvhB4DQ1VDRf90qt6Ro5QHrmBRu34MLyuFQ7t3SHo5A63TQbFdqAnhAwXuotomFsQWYlMtbACS3HF8dENgUlfoupPASscGNfIX13v2BiOD7XYk7ZO_KLVFCfi6wyCqI1Fa-kJbgI7v1AkUX2ff9xVySbPZyRhAHZ7eH1_bfUaI6_fS3cVBPHoWdHmMnAFT7oTNssmOhYJs",
  },
];

export default function ComunidadPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow flex flex-col grid-bg">
        {/* Header Section */}
        <header className="w-full border-b-2 border-ink bg-paper">
          <div className="max-w-7xl mx-auto px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg flex flex-col gap-stack-md">
            <h1 className="font-headline-xl text-headline-xl text-ink uppercase">
              ÍNDICE DE AUTORES
            </h1>
            {/* Terminal Search Bar */}
            <div className="relative w-full md:w-2/3 lg:w-1/2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <span className="font-mono text-mono text-ink font-bold">
                  &gt;
                </span>
              </div>
              <input
                className="w-full bg-surface border-2 border-ink p-4 pl-8 font-mono text-mono text-ink uppercase focus:outline-none focus:ring-0 focus:border-ink placeholder-ink placeholder-opacity-50"
                placeholder="BUSCAR SKETCHER..."
                type="text"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <span className="w-2 h-4 bg-ink animate-pulse inline-block"></span>
              </div>
            </div>
          </div>
        </header>

        {/* Authors Grid */}
        <section className="max-w-7xl mx-auto w-full px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-stack-md">
            {authors.map((author, i) => (
              <article
                key={i}
                className="bg-surface border-2 border-ink flex flex-col relative hover-shadow-neobrutalism transition-transform duration-200 group"
              >
                {author.isNew && (
                  <div className="absolute top-2 right-2 bg-accent-stamp text-paper font-mono-sm text-mono-sm px-2 py-1 uppercase font-bold border border-ink rotate-3 z-10 shadow-[2px_2px_0px_#1A1A1A]">
                    NUEVO
                  </div>
                )}
                <div className="w-full aspect-square border-b-2 border-ink bg-cardboard overflow-hidden grayscale">
                  <Image
                    alt={`Retrato de ${author.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={author.src}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-grow">
                  <h2 className="font-headline-md text-headline-md text-ink uppercase leading-tight">
                    {author.name} <br />
                    {author.lastName}
                  </h2>
                  <a
                    className="font-mono text-mono text-graphite hover:text-accent-stamp transition-colors"
                    href="#"
                  >
                    {author.handle}
                  </a>
                </div>
                <div className="border-t-2 border-ink p-3 bg-surface-container-low">
                  <span className="font-mono-sm text-mono-sm text-ink uppercase tracking-wider font-bold">
                    [BOCETOS: {author.sketches}]
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
