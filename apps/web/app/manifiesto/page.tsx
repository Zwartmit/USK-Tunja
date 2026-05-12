import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const rules = [
  "Dibujamos in situ, a cubierto o al aire libre, capturando directamente lo que observamos.",
  "Nuestros dibujos cuentan la historia de nuestro entorno, de los lugares donde vivimos y viajamos.",
  "Nuestros dibujos son un registro del tiempo y del lugar.",
  "Somos fieles a las escenas que presenciamos.",
  "Utilizamos cualquier tipo de medio y respetamos el estilo individual.",
  "Nos apoyamos mutuamente y dibujamos en grupo.",
  "Compartimos nuestros dibujos en internet.",
  "Mostramos el mundo, dibujo a dibujo.",
];

export default function ManifiestoPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow">
        {/* Hero Editorial */}
        <section className="border-b-2 border-ink">
          <div className="px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg border-b-2 border-ink">
            <h1 className="font-headline-xl text-headline-xl uppercase text-ink text-center md:text-left">
              EL MANIFIESTO
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-edge-margin-mobile md:p-edge-margin-desktop border-b-2 md:border-b-0 md:border-r-2 border-ink flex flex-col justify-center bg-cardboard">
              <p className="font-body-lg text-body-lg text-ink">
                Somos una comunidad global de dibujantes, tanto profesionales
                como aficionados, que fomentamos la práctica del dibujo in situ,
                la observación directa de la vida urbana. Contamos la historia
                de nuestro entorno, los lugares donde vivimos y donde viajamos.
              </p>
            </div>
            <div className="p-edge-margin-mobile md:p-edge-margin-desktop bg-surface-variant flex items-center justify-center">
              <Image
                alt="Personas dibujando en la calle"
                className="w-full h-auto border-2 border-ink shadow-solid grayscale filter contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9kAzSiqAPDJGORzAVLOmIj8bW2i9mhrleDlqRyGx0he7duCSLuXGmv9anvZQKRafVHZpVfib9tE0hyrFnoQd1dUss5w0WKG-QkmX9mojd7lhYeUxXUzFeZ8X3OynkynCwBAHbN6j3D1CB6sYNkob4UROh_deRxi3OG_v75DQmfx1xbIj9k3fkLdFM2FXPxR7DiwLAL2Ts8VSGF16AmHVcM7tvXv7vImNCJOmPkdvNLhprXFlGAR90ChUMS6yM1HNdM1z2Bsa3Kgk"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* The 8 Rules Grid */}
        <section className="border-b-2 border-ink bg-paper">
          <div className="px-edge-margin-mobile md:px-edge-margin-desktop py-stack-md border-b-2 border-ink bg-surface">
            <h2 className="font-headline-lg text-headline-lg uppercase text-ink">
              Las 8 Reglas
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map((rule, i) => {
              const borderClasses = [
                "border-b-2 border-ink sm:border-r-2",
                "border-b-2 border-ink lg:border-r-2",
                "border-b-2 border-ink sm:border-r-2 lg:border-r-2",
                "border-b-2 border-ink",
                "border-b-2 sm:border-b-0 border-ink sm:border-r-2",
                "border-b-2 sm:border-b-0 border-ink lg:border-r-2",
                "border-b-2 sm:border-b-0 border-ink sm:border-r-2 lg:border-r-2",
                "",
              ];
              return (
                <div
                  key={i}
                  className={`${borderClasses[i]} p-stack-md relative bg-surface hover:bg-cardboard transition-colors`}
                >
                  <span className="absolute top-2 right-4 font-headings text-[64px] font-bold text-accent-stamp leading-none">
                    {i + 1}
                  </span>
                  <p className="font-mono text-mono text-ink mt-8 pr-12">
                    {rule}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* El Capítulo Tunja */}
        <section className="border-b-2 border-ink bg-cardboard grid grid-cols-1 lg:grid-cols-3">
          <div className="p-edge-margin-mobile md:p-edge-margin-desktop lg:col-span-1 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex items-start">
            <h2 className="font-headline-lg text-headline-lg uppercase text-ink">
              EL CAPÍTULO TUNJA
            </h2>
          </div>
          <div className="p-edge-margin-mobile md:p-edge-margin-desktop lg:col-span-2 columns-1 md:columns-2 gap-stack-md text-ink font-mono text-mono leading-relaxed">
            <p className="mb-4">
              Urban Sketchers Tunja es un capítulo regional oficial. Operamos
              como un colectivo sin ánimo de lucro dedicado a elevar el valor del
              dibujo documental en nuestra ciudad. Nuestra misión es registrar el
              patrimonio histórico, la arquitectura colonial, las calles
              empinadas y la vida cotidiana de la capital boyacense a través de
              nuestras libretas.
            </p>
            <p className="mb-4">
              <strong>
                Nuestros encuentros son 100% gratuitos y abiertos a todo el
                mundo.
              </strong>{" "}
              No importa tu nivel de experiencia, tu edad, o los materiales que
              uses. Si tienes papel, lápiz y ganas de observar, eres bienvenido.
              No enseñamos técnica formal; compartimos pasión, tinto y anécdotas
              mientras registramos la ciudad.
            </p>
            <p>
              Creemos que al dibujar nuestra ciudad, la entendemos mejor. Al
              sentarnos en sus plazas y andenes, nos conectamos con su ritmo, su
              clima frío y su calidez humana. Cada trazo es un documento, un
              testigo silencioso de Tunja en el presente.
            </p>
          </div>
        </section>

        {/* CTA Block (Coupon Style) */}
        <section className="p-edge-margin-mobile md:p-edge-margin-desktop bg-surface flex justify-center items-center py-stack-lg border-b-2 border-ink">
          <div className="border-4 border-dashed border-ink p-stack-md md:p-stack-lg max-w-3xl text-center bg-paper relative">
            <span className="material-symbols-outlined absolute -top-4 -left-4 text-ink bg-surface p-1">
              content_cut
            </span>
            <h3 className="font-headline-md text-headline-md uppercase text-ink mb-4">
              ¿LISTO PARA DIBUJAR LA CIUDAD?
            </h3>
            <p className="font-mono text-mono text-graphite mb-8">
              Únete a nuestro próximo encuentro. Trae tu libreta, tus
              herramientas favoritas y prepárate para documentar el mundo a
              nuestro lado.
            </p>
            <button className="font-mono-label text-mono-label uppercase tracking-widest px-8 py-3 bg-accent-stamp text-paper border-2 border-ink shadow-solid-hover inline-flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                edit
              </span>
              UNIRSE A LA COMUNIDAD
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
