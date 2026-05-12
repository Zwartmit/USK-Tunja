import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const archiveRows = [
  { session: "#55", date: "14/10/24", location: "Convento de San Agustín" },
  { session: "#54", date: "30/09/24", location: "Pila del Mono" },
  {
    session: "#53",
    date: "16/09/24",
    location: "Universidad Pedagógica y Tecnológica de Colombia",
  },
  { session: "#52", date: "02/09/24", location: "Parque Pinzón" },
];

const filmStripImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASSAkF-ecQjWxlImlY5VOTPuFPLfBNjUecBwipZwyhGHKqggkTUHX7TbtN0ypOQHLVJbiYSUkLT0lJ1Uoe9_vYhEkvkAL5iC_5CQi_fbXm2fRyQZ7oSXU7Ay-3-Am6O81bg87kYIKGAAy54Kaw-ChdUuwS5JqqVKjpE9vhSAxly5uDOtxinQA_fcAekSARvnavgINOb6x5Rxm19nByX1Nvx2x6lBoJICTyTqWeRijGZdzQ9cMqAvOfXTvqCZ1YjQ186Y5mqrp6MC8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDf6aGTO8TtSP3jTHvRhHFEauw6IVI0GfDJorThfb4VqT60vDp_VDO7Cfn1OOIP0ucIzFJodxWZmv98nr1x6GVN3qoNnvtnafZnEXeREHk5QBNtUyIv9zxWDn8x7ClRjhljaob7EVqhMGMPqiwQZ5ee7F2fGe6_dC2-hFTwlMuIvcqrY240AHCFeYyvGVEntIb7zPtnkYehhobN_im-h9stqnffqitBK8rb6MiF8mi6Ohly5rT7d3N5vQecqChpdaHM0ieeuYNyiaI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPssouLXg9veUgYL3yrZ3b3FgGanFr9saf_ZuBjzFlf74P_L3ynl2wxdHCf9ZLw0-mpXKUBbUEOWCUu5qIT7_4CHfXlSiD2xy_ip6NJyHpdSngL2U59-LeBnkVgU83Pa8HzHs4QmYTGYsTdkYwnCNRQWzfB_SdRvWZHRBRsOSaFo0_BerOeiUmeskbl4arZ0jo204yt68c1VIbRUu4BfvMxT0Y0x5Pk5vGtaNrdgmDPr9OHrs0noCAhvmA5CwKFRx5zOizUiifAJ4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvHi4zkT-L2lveFUtbqJhxGnd0n2oUU_qhVushaRpJS83inyoZRxQqfk4WKa19J1W4Wh2utssDmuVyRGNsig50EXH5iJuUkowtYM_z6acQf5JM_tmcGRm0n58ApTTOBD4nbsQ5nVaRfxjx4BCtcJqJA4d1s6q7vz9UASkvBZRXmhwjWXou3VKFkejMfTNbjpEkvyUGJDBklTrdQO1oHWSSU5K1qKbanbWsouGjS6Ac5dOg1j9YJZBqHsnTO7F2W5otnKtmXfpkpW8",
];

export default function EncuentrosPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-grow flex flex-col pt-stack-lg pb-stack-lg gap-stack-lg">
        {/* Header */}
        <header className="px-edge-margin-mobile md:px-edge-margin-desktop flex flex-col gap-unit">
          <h1 className="font-headings text-headline-xl font-bold text-ink uppercase">
            BITÁCORA DE ENCUENTROS
          </h1>
          <p className="font-mono text-mono text-graphite">
            [55+ SALIDAS REGISTRADAS]
          </p>
        </header>

        {/* Next Meeting Block */}
        <section className="px-edge-margin-mobile md:px-edge-margin-desktop">
          <div className="border-2 border-ink bg-paper p-stack-md md:p-stack-lg relative">
            <div className="absolute top-0 right-0 bg-accent-stamp text-paper font-mono-sm text-mono-sm px-2 py-1 border-b-2 border-l-2 border-ink">
              NUEVO
            </div>
            <h2 className="font-headings text-headline-lg font-bold uppercase mb-stack-md border-b-2 border-ink pb-unit inline-block">
              PRÓXIMA CONVOCATORIA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              {/* Details */}
              <div className="flex flex-col gap-stack-sm font-mono text-mono">
                <div className="flex border-b border-ink pb-unit">
                  <span className="w-32 font-bold">[SESIÓN]:</span>
                  <span>#56</span>
                </div>
                <div className="flex border-b border-ink pb-unit">
                  <span className="w-32 font-bold">[FECHA]:</span>
                  <span>Sábado, 28 de Octubre 2024</span>
                </div>
                <div className="flex border-b border-ink pb-unit">
                  <span className="w-32 font-bold">[HORA]:</span>
                  <span>09:00 AM - 12:00 PM</span>
                </div>
                <div className="flex border-b border-ink pb-unit">
                  <span className="w-32 font-bold">[PUNTO]:</span>
                  <span>
                    Plaza de Bolívar, Tunja (Frente a la Catedral)
                  </span>
                </div>
              </div>
              {/* Materials & Action */}
              <div className="flex flex-col gap-stack-md justify-between">
                <div className="border-2 border-ink p-stack-sm bg-surface">
                  <h3 className="font-mono-label text-mono-label font-bold uppercase mb-unit border-b border-ink pb-unit">
                    Materiales Sugeridos:
                  </h3>
                  <ul className="font-mono text-mono flex flex-col gap-unit">
                    <li>
                      <span className="mr-2">[ ]</span>Libreta de bocetos o
                      papel suelto
                    </li>
                    <li>
                      <span className="mr-2">[ ]</span>Lápiz, tinta o acuarelas
                    </li>
                    <li>
                      <span className="mr-2">[ ]</span>Silla plegable (opcional)
                    </li>
                    <li>
                      <span className="mr-2">[ ]</span>Agua y protección solar
                    </li>
                  </ul>
                </div>
                <button className="w-full bg-accent-stamp text-paper font-headings text-headline-md font-bold py-4 border-2 border-ink shadow-solid-offset hover:shadow-[6px_6px_0px_0px_#1A1A1A] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 uppercase tracking-wide">
                  CONFIRMAR ASISTENCIA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Archive */}
        <section className="px-edge-margin-mobile md:px-edge-margin-desktop overflow-x-auto">
          <h2 className="font-headings text-headline-lg font-bold uppercase mb-stack-md">
            EL REGISTRO
          </h2>
          <div className="min-w-max border-2 border-ink">
            {/* Table Header */}
            <div className="grid grid-cols-[100px_150px_1fr_250px] bg-ink text-paper font-mono-label text-mono-label font-bold uppercase border-b-2 border-ink">
              <div className="p-stack-sm border-r-2 border-ink">[SESIÓN]</div>
              <div className="p-stack-sm border-r-2 border-ink">[FECHA]</div>
              <div className="p-stack-sm border-r-2 border-ink">[LOCACIÓN]</div>
              <div className="p-stack-sm">[ACCIÓN]</div>
            </div>
            {/* Table Rows */}
            <div className="flex flex-col font-mono text-mono">
              {archiveRows.map((row) => (
                <div
                  key={row.session}
                  className="grid grid-cols-[100px_150px_1fr_250px] border-b border-ink hover:bg-surface-variant transition-colors duration-150 bg-paper"
                >
                  <div className="p-stack-sm border-r border-ink">
                    {row.session}
                  </div>
                  <div className="p-stack-sm border-r border-ink">
                    {row.date}
                  </div>
                  <div className="p-stack-sm border-r border-ink">
                    {row.location}
                  </div>
                  <div className="p-stack-sm flex items-center">
                    <a
                      className="font-bold hover:text-accent-stamp underline"
                      href="#"
                    >
                      VER FOTOS Y BOCETOS -&gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Sheet (Photographic Strip) */}
        <section className="mt-stack-md w-full overflow-hidden bg-ink py-unit border-t-4 border-b-4 border-ink">
          <div className="flex gap-unit px-unit overflow-x-auto snap-x">
            {filmStripImages.map((src, i) => (
              <div
                key={i}
                className="flex-none w-64 h-48 border-2 border-paper bg-paper p-1 snap-center"
              >
                <Image
                  alt={`Film strip frame ${i + 1}`}
                  src={src}
                  className="w-full h-full object-cover grayscale contrast-125"
                  width={256}
                  height={192}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between px-edge-margin-mobile text-paper font-mono-sm text-mono-sm opacity-50 mt-1">
            <span>[FRAME 01]</span>
            <span>[KODAK TRI-X]</span>
            <span>[FRAME 04]</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
