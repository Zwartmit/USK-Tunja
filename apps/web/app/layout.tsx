import type { Metadata } from "next";
import { Inter, Space_Grotesk, Courier_Prime } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier-prime",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urban Sketchers Tunja",
  description:
    "Documentamos la ciudad línea por línea. Un colectivo de artistas, arquitectos y curiosos capturando la esencia urbana de Tunja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${courierPrime.variable} bg-paper text-ink font-body-md min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
