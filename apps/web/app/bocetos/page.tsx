import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const sketches = [
  {
    alt: "Boceto Plaza de Bolívar",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1W9BexE4hUmYDwl-cEZE8X24QUJM1i7v6WnD8yOF71rKx3C7_ZHCoCu-_GW6CLXAsIloMO7j5clML5zbPNuCQBR6yBModbv2HwDx0T-6erTNbbn8f-7cNDTxYwRictvFndybanaSRmCBFJVJ6jWyfik82VyrlRVACIzOhxzHVALSubBISn9bo7soAyrQloO0CPxO0ISE_cudSV9MeSHRhTMXFtav2XxWqW-3zsyRiuN7bPOcEK2Go0qvGExhiQ2dfhGIpu9E3mnQ",
    author: "@JUAN_DIBUJA",
    location: "PLAZA DE BOLÍVAR",
    filter: "grayscale-[20%] sepia-[10%] contrast-125",
  },
  {
    alt: "Callejón",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR32sxdIigSWIr3_ParXQJAVOgK7cQCRThjBX5FtBreiDlgtRhCfIpniTJlZC3GaBFPcVz2APSWHb9F0NYjvkodsm0saYi3K-b70wgZfhs6aO5KcqinBVHOWfs5FPeOzSy4sGF8KvkKnEnYQ0-iJGGslDosKWccC8GTEYNw8jXaAUmjd89iPo5zVh1KR9MduNVXBkaGxJ7Ck-oG8uVwG3aLokPs-vlDGNw43guwPqRKWtzq3RnF0wqZb1H5q2V3Sj63yU9264Jrto",
    author: "@ANA.SKETCH",
    location: "CALLE 19",
    filter: "grayscale contrast-150",
  },
  {
    alt: "Puerta antigua",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoyhW08yaKmzf7bKrRCRMOHAV0pOg9w28L-_D4rHDNjCFKP5Eu3aLwsxAlXNis7KHkDtwjDXvxyLAzAJrUPC_53-YwXN_VPsMZdyUZhM1BGoKsZtt5S5yZAuAv_nqwfninJE2EpieyjIHYx7D-Yx7T1XKrTPZCPxMmWEEjdnZlIqpTOgKWetF_sTb4XwhRNBE_PIoYbCeHhZjQLokQrJcmgM1S32vb8mBLeXVhYVnWyJNcY6RJf43_HMBN82y4-TiUn6Rg81GrRR0",
    author: "@CARLOS_R",
    location: "CASA DEL FUNDADOR",
    filter: "contrast-125 saturate-50",
    stamp: true,
  },
  {
    alt: "Personas en parque",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxU34vwcoAY-htcj0IFvwpXokgXlrx8-ZlfaY_ytDpwNiKnErUymAWj-Dp2nH9f1hf8FGk81lMMbWHJVjgd_vrrXRYcGwmzBseUTgOZIrnLCdqoqiP5EnLfbCtWlQUpXkt5orOuhwPbWfwBlK5Wn0z-6zWYXmKqGLjRSEFtWz63XzLpLOm4j-cOGy-ZiMX0mAblwC6QSGVm4CWgXTTXxdZAXqecrKRIZwBWIkiRC0va9muJIAxjwtX0I6ZOShH-fhxrUya1JAK4vg",
    author: "@MARTA.L",
    location: "PARQUE PINZÓN",
    filter: "grayscale contrast-150 brightness-110",
  },
  {
    alt: "Panorámica Tunja",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbKwcWK8YPMn5NzxlJ7Q2lwlBzt1Cqa80bx0QjNUDHVmcpyhzkPos0_SJQ1gW1sMnyC8ybODd3VVt6h2340LywYhtXqjW_uWVCiCirSasDw8Nm9Ca2yqYz5EweTChbSxjdqQfkdrL2Jf9gPMCQTaS1g9_b-351flY4N4XT9RS_OQ5UttQyRRwNP9Yz4IrqGB9h7GU-XqP_bNTwf2Wg2ep6GFt90_Fwck2NdspsMNvQN7igFVFqdKMo5aXBjt7lmGWNSUx4BZ-IICI",
    author: "@USK_TUNJA_OFICIAL",
    location: "VISTA SUR",
    filter: "sepia-[20%] contrast-125",
  },
];

export default function BocetosPage() {
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
            [1,042 REGISTROS]
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
            {sketches.map((sketch, i) => (
              <article
                key={i}
                className="masonry-item relative group bg-surface border-2 border-ink p-stack-sm shadow-[4px_4px_0px_#1A1A1A] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1A1A1A] transition-all duration-200"
              >
                <div className="border border-ink overflow-hidden bg-white relative">
                  <Image
                    alt={sketch.alt}
                    className={`w-full h-auto object-cover ${sketch.filter}`}
                    src={sketch.src}
                    width={600}
                    height={400}
                  />
                  {sketch.stamp && (
                    <div className="absolute top-2 right-2 border-2 border-accent-stamp text-accent-stamp font-headings text-[10px] font-bold p-1 rotate-12 opacity-80">
                      SELECCIÓN
                    </div>
                  )}
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 flex flex-col gap-1">
                  <span className="bg-ink text-paper font-mono-sm text-mono-sm px-2 py-1 shadow-[2px_2px_0px_#D9381E] inline-block uppercase w-max">
                    {sketch.author}
                  </span>
                  <span className="bg-paper text-ink border border-ink font-mono-sm text-mono-sm px-2 py-1 shadow-[2px_2px_0px_#1A1A1A] inline-block uppercase w-max">
                    {sketch.location}
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
