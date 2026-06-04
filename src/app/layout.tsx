import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daero.de"),
  title: {
    default: "DAERO GmbH – Ihr IT-Dienstleister im Raum München",
    template: "%s | DAERO GmbH",
  },
  description:
    "DAERO GmbH: Fachexperten für Datenbankentwicklung, Softwareentwicklung, Geschäftsprozessautomatisierung, Cloud-Lösungen und Datenmanagement im Raum München.",
  keywords: [
    "IT-Dienstleister München",
    "Softwareentwicklung",
    "Datenbankentwicklung",
    "Individualsoftware",
    "Geschäftsprozessautomatisierung",
    "Cloud-Lösungen",
    "Petershausen",
  ],
  openGraph: {
    title: "DAERO GmbH – Ihr IT-Dienstleister im Raum München",
    description:
      "Maßgeschneiderte Datenbank- und Softwarelösungen für den Mittelstand.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
