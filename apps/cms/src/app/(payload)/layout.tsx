import "@payloadcms/next/css";
import type { ServerFunctionClient } from "payload";
import React from "react";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import configPromise from "@/payload.config";
import { importMap } from "./admin/importMap";

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
