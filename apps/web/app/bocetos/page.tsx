import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3001";

const TECHNIQUE_LABELS: Record<string, string> = {
  watercolor: "ACUARELA",
  ink: "TINTA CHINA",
  graphite: "GRAFITO",
  digital: "DIGITAL",
  mixed: "MIXTA",
};

interface PayloadMedia {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface PayloadAuthor {
  name: string;
  instagramHandle?: string;
}

interface PayloadLocation {
  name: string;
}

interface PayloadSketch {
  id: number;
  title?: string;
  image: PayloadMedia;
  technique?: string;
  author: PayloadAuthor;
  location?: PayloadLocation | null;
}

interface PayloadResponse {
  docs: PayloadSketch[];
  totalDocs: number;
}

async function getSketches(): Promise<PayloadResponse> {
  try {
    const res = await fetch(`${CMS_URL}/api/sketches?depth=1&limit=50`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`CMS responded with ${res.status}`);
    return res.json();
  } catch {
    return { docs: [], totalDocs: 0 };
  }
}

export default async function BocetosPage() {
  const { docs: sketches, totalDocs } = await getSketches();

  return (
    <>
      <TopNavBar />
      <main className="flex-grow flex flex-col">
        {/* Header Section */}
        <header className="px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg border-b-2 border-ink bg-surface flex flex-col md:flex-row justify-between items-baseline gap-stack-sm">
          <h1 className="font-headings text-headline-xl text-ink m-0">
            ARCHIVO DE BOCETOS
          </h1>
          <span className="font-mono text-mono text-graphite font-bold tracking-widest">
            [{totalDocs.toLocaleString()} REGISTROS]
          </span>
        </header>

        {/* Technical Filter Bar */}
        <section className="border-b-2 border-ink bg-paper flex flex-col md:flex-row items-stretch">
          <div className="flex flex-wrap flex-grow border-b md:border-b-0 border-ink md:border-r">
            <button className="px-6 py-3 border-r border-ink border-b md:border-b-0 font-mono-sm text-mono-sm uppercase tracking-wider bg-ink text-paper hover:bg-ink hover:text-paper transition-colors">
              TODAS LAS TÉCNICAS
            </button>
            <button className="px-6 py-3 border-r border-ink border-b md:border-b-0 font-mono-sm text-mono-sm uppercase tracking-wider hover:bg-surface-variant transition-colors">
              ACUARELA
            </button>
            <button className="px-6 py-3 border-r border-ink border-b md:border-b-0 font-mono-sm text-mono-sm uppercase tracking-wider hover:bg-surface-variant transition-colors">
              TINTA CHINA
            </button>
            <button className="px-6 py-3 border-r border-ink border-b md:border-b-0 font-mono-sm text-mono-sm uppercase tracking-wider hover:bg-surface-variant transition-colors">
              GRAFITO
            </button>
            <button className="px-6 py-3 border-b md:border-b-0 font-mono-sm text-mono-sm uppercase tracking-wider hover:bg-surface-variant transition-colors">
              DIGITAL
            </button>
          </div>
          {/* Search Field */}
          <div className="flex items-center px-4 py-2 md:w-64 bg-paper group focus-within:bg-surface transition-colors">
            <span className="material-symbols-outlined text-ink mr-2">
              search
            </span>
            <input
              className="w-full bg-transparent border-none p-0 font-mono text-mono text-ink placeholder-graphite focus:ring-0 uppercase tracking-widest"
              placeholder="AUTOR..."
              type="text"
            />
          </div>
        </section>

        {/* Masonry Grid Area */}
        <section className="p-edge-margin-mobile md:p-edge-margin-desktop bg-surface-container-low min-h-screen">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 masonry-grid">
            {sketches.map((sketch) => {
              const imageUrl = sketch.image.url.startsWith("http")
                ? sketch.image.url
                : `${CMS_URL}${sketch.image.url}`;
              const authorLabel =
                sketch.author.instagramHandle ||
                `@${sketch.author.name.toUpperCase().replace(/\s+/g, "_")}`;
              const locationLabel =
                sketch.location?.name?.toUpperCase() || "TUNJA";
              const techniqueLabel = sketch.technique
                ? TECHNIQUE_LABELS[sketch.technique] || sketch.technique
                : undefined;

              return (
                <article
                  key={sketch.id}
                  className="masonry-item relative group bg-surface border-2 border-ink p-stack-sm shadow-[4px_4px_0px_#1A1A1A] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1A1A1A] transition-all duration-200"
                >
                  <div className="border border-ink overflow-hidden bg-white relative">
                    <Image
                      alt={sketch.image.alt || sketch.title || "Boceto"}
                      className="w-full h-auto object-cover"
                      src={imageUrl}
                      width={sketch.image.width || 600}
                      height={sketch.image.height || 400}
                    />
                    {techniqueLabel && (
                      <div className="absolute top-2 right-2 border-2 border-accent-stamp text-accent-stamp font-headings text-[10px] font-bold p-1 rotate-12 opacity-80">
                        {techniqueLabel}
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 flex flex-col gap-1">
                    <span className="bg-ink text-paper font-mono-sm text-mono-sm px-2 py-1 shadow-[2px_2px_0px_#D9381E] inline-block uppercase w-max">
                      {authorLabel}
                    </span>
                    <span className="bg-paper text-ink border border-ink font-mono-sm text-mono-sm px-2 py-1 shadow-[2px_2px_0px_#1A1A1A] inline-block uppercase w-max">
                      {locationLabel}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {sketches.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono text-mono text-graphite uppercase tracking-widest">
                No hay bocetos disponibles. Verifica la conexión con el CMS.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
