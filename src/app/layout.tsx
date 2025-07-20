import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Behailu Mefkere - Video Editor & Videographer",
  description:
    "Professional video editor, videographer, and photographer based in Addis Ababa, Ethiopia. Specializing in wedding videos, event coverage, podcast editing, and digital content creation.",
  keywords:
    "video editor, videographer, photographer, Addis Ababa, Ethiopia, wedding videos, event coverage, podcast editing, Adobe Premiere Pro, After Effects",
  authors: [{ name: "Behailu Mefkere" }],
  creator: "Behailu Mefkere",
  openGraph: {
    title: "Behailu Mefkere - Video Editor & Videographer",
    description:
      "Professional video editor, videographer, and photographer based in Addis Ababa, Ethiopia.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Behailu Mefkere - Video Editor & Videographer",
    description:
      "Professional video editor, videographer, and photographer based in Addis Ababa, Ethiopia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
