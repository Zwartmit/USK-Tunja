import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Media } from "./collections/Media";
import { Authors } from "./collections/Authors";
import { Locations } from "./collections/Locations";
import { Events } from "./collections/Events";
import { Sketches } from "./collections/Sketches";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "CHANGE_ME_IN_PRODUCTION",
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL || "postgresql://localhost:5432/usk_tunja",
    },
  }),
  editor: lexicalEditor({}),
  collections: [Media, Authors, Locations, Events, Sketches],
  typescript: {
    outputFile: "src/payload-types.ts",
  },
});
