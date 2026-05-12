import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "CHANGE_ME_IN_PRODUCTION",
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL || "postgresql://localhost:5432/usk_tunja",
    },
  }),
  editor: lexicalEditor({}),
  collections: [],
  typescript: {
    outputFile: "src/payload-types.ts",
  },
});
