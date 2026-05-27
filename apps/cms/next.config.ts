import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {};

export default withPayload(nextConfig, {
  configPath: path.resolve(process.cwd(), "src/payload.config.ts"),
});
