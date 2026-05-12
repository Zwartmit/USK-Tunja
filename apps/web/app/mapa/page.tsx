import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";

const sidebarLocations = [
  {
    name: "Plaza de Bolívar",
    coords: "5.5353° N, 73.3572° W",
    sketches: 24,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDca-4PFdu8O_mkwwCf3PlXs82mLPwgrUMGWFoszuCYIYm2No9_LcD9OYIjNiVlOMSS5LyLtNI3XocQOslsjJEBnNQcqxe-HXOe4Dbn4SQJeJVu5tdKyWlh-LL8A0qnMdyG7F2GI1vE2iatPE6oQ8sV1WwTAiXWAw6MaRYF2Jg_sbzEFB-TSSNL8JWXAj4XBFq0OD4OlLYeIDlABYtI7MNs4T4RrrhOjnIF8qN1sYzPerGB80CrUYFrC73QAZ9Zk6doQGGqxG8_aVk",
  },
  {
    name: "Bosque de la República",
    coords: "5.5410° N, 73.3620° W",
    sketches: 12,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvReDXthqTQgkSya0kc2k8UDogwLlkNZj6cLpHCoRTrl87nA_nNMeMCyivE6447ycDEt4hjFLjBlhpn6PYHm7WLPMEaQPRbRhQACIXt1lTQ9sFploC-glgIuQXFlJCTEZhQNXN34JfABjGU286L_ZZZzbH65dJXnXeYaSKQKzURG4xCCvsQ4K8iougcpOZM0w0ZDm0CH2M06mMep7ZmiUBayvLUB13OZKSXKO5x7BhXTql8smqWpt91AdTY0Z0mZro-x75VHXOrH0",
  },
  {
    name: "Mercado del Sur",
    coords: "5.5290° N, 73.3610° W",
    sketches: 8,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDca-4PFdu8O_mkwwCf3PlXs82mLPwgrUMGWFoszuCYIYm2No9_LcD9OYIjNiVlOMSS5LyLtNI3XocQOslsjJEBnNQcqxe-HXOe4Dbn4SQJeJVu5tdKyWlh-LL8A0qnMdyG7F2GI1vE2iatPE6oQ8sV1WwTAiXWAw6MaRYF2Jg_sbzEFB-TSSNL8JWXAj4XBFq0OD4OlLYeIDlABYtI7MNs4T4RrrhOjnIF8qN1sYzPerGB80CrUYFrC73QAZ9Zk6doQGGqxG8_aVk",
  },
];

export default function MapaPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-57px)] overflow-hidden">
        {/* Sidebar (Left) */}
        <aside className="w-full md:w-[350px] flex flex-col border-b-2 md:border-b-0 md:border-r-2 border-ink bg-surface-variant shrink-0 h-[409px] md:h-full z-10">
          {/* Header & Search */}
          <div className="p-edge-margin-mobile border-b-2 border-ink bg-surface-variant flex flex-col gap-4">
            <h1 className="font-headings text-headline-lg font-bold uppercase">
              RUTAS TRAZADAS
            </h1>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-ink">
                search
              </span>
              <input
                className="w-full bg-paper border-2 border-ink py-2 pl-10 pr-4 font-mono-label text-mono-label uppercase focus:outline-none focus:ring-0 focus:border-ink placeholder:text-graphite"
                placeholder="BUSCAR UBICACIÓN..."
                type="text"
              />
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              <span className="font-mono-sm text-mono-sm border border-ink px-2 py-1 bg-paper">
                [CENTRO_HISTORICO]
              </span>
              <span className="font-mono-sm text-mono-sm border border-ink px-2 py-1 bg-paper">
                [MERCADOS]
              </span>
            </div>
          </div>
          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto bg-surface-variant">
            {sidebarLocations.map((loc, i) => (
              <div
                key={i}
                className="group flex gap-4 p-4 border-b border-ink hover:bg-paper cursor-pointer transition-colors"
              >
                <div className="w-16 h-16 shrink-0 border border-ink bg-ink">
                  <Image
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
                    src={loc.src}
                    alt={loc.name}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <h3 className="font-headings text-headline-md font-bold uppercase leading-tight group-hover:text-accent-stamp transition-colors">
                    {loc.name}
                  </h3>
                  <div className="font-mono-sm text-mono-sm text-graphite mt-1">
                    <span>{loc.coords}</span>
                    <span className="ml-4 font-bold text-ink">
                      [{loc.sketches} BOCETOS]
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Map Area (Right) */}
        <section className="flex-1 relative bg-grid-pattern overflow-hidden">
          {/* Coordinates overlay */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
            <div className="bg-paper border-2 border-ink px-4 py-2 shadow-solid">
              <span className="font-mono-label text-mono-label font-bold uppercase">
                TUNJA, BOYACÁ
              </span>
            </div>
            <div className="bg-paper border border-ink px-3 py-1">
              <span className="font-mono-sm text-mono-sm text-graphite">
                LAT: 5.5353° N | LNG: 73.3572° W
              </span>
            </div>
          </div>

          {/* Map Pins */}
          <div className="absolute top-[35%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
            <div className="w-5 h-5 bg-ink flex items-center justify-center border-2 border-ink shadow-[2px_2px_0px_#D9381E] group-hover:bg-accent-stamp transition-colors">
              <span className="text-paper text-[10px] font-bold">X</span>
            </div>
            <div className="h-10 w-0.5 bg-ink"></div>
            <span className="font-mono-sm text-mono-sm bg-paper border border-ink px-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              PLAZA_BOLIVAR
            </span>
          </div>

          <div className="absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-accent-stamp flex items-center justify-center border-2 border-ink shadow-[2px_2px_0px_#1A1A1A]">
                <span className="text-paper text-[10px] font-bold">X</span>
              </div>
              <div className="h-10 w-0.5 bg-ink"></div>
            </div>
            {/* Floating Tooltip Card */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-[280px] bg-paper border-2 border-ink shadow-solid flex flex-col">
              <div className="p-2 border-b border-ink relative">
                <Image
                  className="w-full h-32 object-cover grayscale border border-ink"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvReDXthqTQgkSya0kc2k8UDogwLlkNZj6cLpHCoRTrl87nA_nNMeMCyivE6447ycDEt4hjFLjBlhpn6PYHm7WLPMEaQPRbRhQACIXt1lTQ9sFploC-glgIuQXFlJCTEZhQNXN34JfABjGU286L_ZZZzbH65dJXnXeYaSKQKzURG4xCCvsQ4K8iougcpOZM0w0ZDm0CH2M06mMep7ZmiUBayvLUB13OZKSXKO5x7BhXTql8smqWpt91AdTY0Z0mZro-x75VHXOrH0"
                  alt="Bosque de la República"
                  width={280}
                  height={128}
                />
                <div className="absolute top-4 right-4 bg-accent-stamp text-paper font-mono-sm text-mono-sm px-2 py-0.5 border border-ink">
                  ACTIVO
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2 bg-paper">
                <h4 className="font-headings text-headline-md font-bold uppercase leading-tight">
                  Bosque de la República
                </h4>
                <p className="font-mono-sm text-mono-sm text-graphite border-l-2 border-ink pl-2">
                  Zona de alto contraste.
                  <br />
                  Última sesión: Ayer.
                </p>
                <button className="mt-2 w-full bg-ink text-paper font-mono-label text-mono-label uppercase py-2 hover:bg-accent-stamp transition-colors flex items-center justify-between px-4">
                  <span>VER 12 BOCETOS</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute top-[70%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
            <div className="w-4 h-4 bg-accent-stamp rounded-none rotate-45 border border-ink group-hover:scale-150 transition-transform"></div>
            <div className="h-8 w-0.5 bg-ink"></div>
            <span className="font-mono-sm text-mono-sm bg-paper border border-ink px-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              MERCADO_SUR
            </span>
          </div>

          {/* Crosshair overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
            <div className="w-full h-[1px] bg-ink absolute"></div>
            <div className="h-full w-[1px] bg-ink absolute"></div>
            <div className="w-32 h-32 border border-ink rounded-full absolute"></div>
          </div>
        </section>
      </main>
    </>
  );
}
