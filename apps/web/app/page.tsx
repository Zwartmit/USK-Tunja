import Image from "next/image";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-b-2 border-ink px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex flex-col gap-6">
              <h1 className="font-headings text-headline-xl uppercase text-ink">
                Observar y Dibujar Tunja
              </h1>
              <p className="font-body-lg text-graphite max-w-md">
                Documentamos la ciudad línea por línea. Un colectivo de
                artistas, arquitectos y curiosos capturando la esencia urbana de
                Tunja a través del dibujo in situ.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="font-mono-label text-mono-label uppercase tracking-widest border-2 border-ink px-8 py-3 bg-ink text-paper neo-shadow-hover transition-transform">
                  PRÓXIMO ENCUENTRO
                </button>
              </div>
            </div>
            <div className="md:col-span-7 relative h-[614px] min-h-[400px] border-2 border-ink bg-surface neo-shadow p-4 flex flex-col">
              <Image
                alt="Urban sketching in progress"
                className="w-full h-full object-cover border border-ink grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFFKYo089yGPaU22NiO_gq7NO82SmxZHok-7blfQN8z4qocUUxtTt3usmZQm35JOhEwqZqBHmL5C91Y5xNS-M_1R8wrg3xxqP7OrsXFPQe_P7baLjAX1xDUcEn7nmOX9u3wu61ID7-huPzzHi0FBX6bA-byXFPp-NxP_9BqyDgwisE6vbWa--LQ0yZnOZAeZiRjfNDLp9HBY8iADtNAG-Lr37WxQtYzycBFmLAKd4T6SqzL7GnWZ9nYRL2LKySw7Cpxuyv5LJWak8"
                width={800}
                height={614}
              />
              <div className="mt-4 font-mono-sm text-mono-sm uppercase text-ink flex justify-between border-t border-ink pt-2">
                <span>[PLAZA DE BOLÍVAR]</span>
                <span>TINTA Y ACUARELA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Próximo Encuentro (Boarding Pass Style) */}
        <section className="border-b-2 border-ink px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg bg-surface-variant">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headings text-headline-lg uppercase text-ink mb-8 border-b-2 border-ink pb-2 inline-block">
              CONVOCATORIA #42
            </h2>
            <div className="border-2 border-ink bg-paper flex flex-col md:flex-row neo-shadow">
              {/* Stub */}
              <div className="md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 border-ink p-6 flex flex-col justify-center items-center bg-accent-stamp text-paper">
                <span className="font-headings text-headline-xl font-bold">
                  24
                </span>
                <span className="font-mono-label text-mono-label tracking-widest uppercase">
                  AGOSTO
                </span>
              </div>
              {/* Main details */}
              <div className="flex-grow p-6 md:p-8 grid grid-cols-2 gap-y-6">
                <div className="col-span-2 md:col-span-1">
                  <span className="block font-mono-sm text-mono-sm text-graphite mb-1 uppercase">
                    LOCACIÓN
                  </span>
                  <span className="font-headings text-headline-md text-ink uppercase">
                    Plazoleta San Ignacio
                  </span>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <span className="block font-mono-sm text-mono-sm text-graphite mb-1 uppercase">
                    HORA DE ENCUENTRO
                  </span>
                  <span className="font-mono-label text-mono-label text-ink">
                    09:00 AM - 12:00 PM
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="block font-mono-sm text-mono-sm text-graphite mb-1 uppercase">
                    TEMA
                  </span>
                  <span className="font-body-md text-ink">
                    Arquitectura republicana y movimiento peatonal. Trae tu
                    propio material (sillas plegables recomendadas).
                  </span>
                </div>
                <div className="col-span-2 pt-4 border-t border-ink flex justify-between items-center">
                  <span className="font-mono-sm text-mono-sm text-graphite">
                    ENTRADA LIBRE
                  </span>
                  <button className="font-mono-label text-mono-label border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors uppercase">
                    CONFIRMAR ASISTENCIA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Últimos Bocetos Grid */}
        <section className="border-b-2 border-ink px-edge-margin-mobile md:px-edge-margin-desktop py-stack-lg">
          <div className="flex justify-between items-end mb-8 border-b-2 border-ink pb-4">
            <h2 className="font-headings text-headline-lg uppercase text-ink">
              ARCHIVO RECIENTE
            </h2>
            <Link
              className="font-mono-label text-mono-label hover:text-accent-stamp uppercase hidden md:block"
              href="/bocetos"
            >
              VER TODOS -&gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-2 border-t-2 border-ink">
            {/* Card 1 */}
            <div className="border-r-2 border-b-2 border-ink group">
              <div className="aspect-square p-4 bg-surface">
                <Image
                  alt="Sketch 1"
                  className="w-full h-full object-cover border border-ink filter grayscale group-hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5bPVlk7g5xYpGV2C3F8PNHebPedJG0KxR_M6SZZqhKijN2hKVwt0NnmL3nOQ-h-EEJ7nLvYf3RW6kgQUxQAY2NctlFU0VbhG-sDX2KdPgycpxb9rCx5SpCwfnNxjD-EYLh_FUFhNcS4UfPIB2hhR7q9MU-JdKZnbfeBdQEXA26B9m4VB3u5YRR5TH2kgDOqH-QXCbvY_AYN-_V-1gLIQzDr4-A7bkpBj1E-HMqJXBdMlY3NLq3gkEi3NcKn6Vw4h8D5N19xHSU"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-4 border-t border-ink bg-paper flex flex-col gap-2">
                <span className="font-mono-label text-mono-label font-bold text-ink uppercase">
                  PUENTE DE BOYACÁ
                </span>
                <div className="flex justify-between font-mono-sm text-mono-sm text-graphite uppercase">
                  <span>POR: A. GARCÍA</span>
                  <span>[TINTA CHINA]</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="border-r-2 border-b-2 border-ink group">
              <div className="aspect-[4/5] md:aspect-square p-4 bg-surface">
                <Image
                  alt="Sketch 2"
                  className="w-full h-full object-cover border border-ink filter grayscale group-hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTnwevEiM5gnN2YSPqLjzNXze-h_GhopdEUYG5sNSovSrjG4mD146qWWNH_Bs_8r4mDjNLq7hOatagqFg-x2eSOZEmCbH8wwNQpupb5JRJDr_06x7tRx5KVuVpYzHrh9iwspF4WzC0qoMU6sKP_6LkJFjBXxqFIQEV_MVMwgf1BtvrTQ43WzEDepZhRSlcUx-cd0H5Toi2WaCQh0a5DQI4AgsDKMao7ADjPm5oDVRU495SLrooagY-dBGUqwsqbjUO8KwKcgFPk0c"
                  width={400}
                  height={500}
                />
              </div>
              <div className="p-4 border-t border-ink bg-paper flex flex-col gap-2">
                <span className="font-mono-label text-mono-label font-bold text-ink uppercase">
                  MERCADO DEL SUR
                </span>
                <div className="flex justify-between font-mono-sm text-mono-sm text-graphite uppercase">
                  <span>POR: M. ROJAS</span>
                  <span>[ACUARELA]</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="border-r-2 border-b-2 border-ink group">
              <div className="aspect-square p-4 bg-surface">
                <Image
                  alt="Sketch 3"
                  className="w-full h-full object-cover border border-ink filter grayscale group-hover:grayscale-0 transition-all"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeEFuxIUJAsF-ga5L6BNFnghboiYIM3jbEcItftGoRJ15wUY9F2H6Hf3AL3uJVVIQe39m0rPKSve2G0eHWEUDR-hQCeb4wWv23dvrrvsuE12QyTY9cUQP-jZzQuMirpqRv9OrRh7uwG5vUh7iln6Qd-l8Ik0-10kHtEiyBbG0c8cjh_citoszl9KWAMZIk4dGKmW0YvgQlKT7Ob-Hu8nBXOfNuLNmiydxLaTpNq3xNRobtxnLeVQzEECQ6Qb8NMcU31acwRFrp9Yk"
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-4 border-t border-ink bg-paper flex flex-col gap-2">
                <span className="font-mono-label text-mono-label font-bold text-ink uppercase">
                  BOSQUE DE LA REPÚBLICA
                </span>
                <div className="flex justify-between font-mono-sm text-mono-sm text-graphite uppercase">
                  <span>POR: J. SILVA</span>
                  <span>[LINER 0.5]</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              className="font-mono-label text-mono-label border-b border-ink pb-1 uppercase inline-block"
              href="/bocetos"
            >
              VER TODOS LOS BOCETOS
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
