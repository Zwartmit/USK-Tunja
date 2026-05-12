/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPayload } from "payload";
import config from "./payload.config";

async function seed() {
  const payload = await getPayload({ config });

  console.log("Seeding database…");

  // Create Author
  const author = await payload.create({
    collection: "authors",
    data: {
      name: "Ana Martínez",
      instagramHandle: "@ana.traza",
      bio: "Arquitecta y sketcher apasionada por capturar la esencia colonial de Tunja. Sus trazos en tinta china revelan cada detalle de las fachadas republicanas.",
    },
  });
  console.log(`Created author: ${author.name} (id=${author.id})`);

  // Create Location
  const location = await payload.create({
    collection: "locations",
    data: {
      name: "Plaza de Bolívar",
      coordinates: "5.5353, -73.3672",
      description:
        "Corazón histórico de Tunja. Punto de encuentro principal de los Urban Sketchers, rodeada de arquitectura colonial y la imponente Catedral.",
    },
  });
  console.log(`Created location: ${location.name} (id=${location.id})`);

  // Create Sketches (without images for seed simplicity)
  const sketchData = [
    { title: "Catedral de Tunja", technique: "ink" as const },
    { title: "Callejón del Faro", technique: "watercolor" as const },
    { title: "Mercado del Sur", technique: "graphite" as const },
  ];

  for (const s of sketchData) {
    const sketch = await payload.create({
      collection: "sketches",
      data: {
        title: s.title,
        technique: s.technique,
        author: author.id,
        location: location.id,
      } as any,
    });
    console.log(`Created sketch: ${sketch.title} (id=${sketch.id})`);
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
