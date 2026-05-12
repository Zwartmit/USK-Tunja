import "@payloadcms/next/css";
import type { ReactNode } from "react";

export const metadata = {
  title: "USK Tunja CMS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
