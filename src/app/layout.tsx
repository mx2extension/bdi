import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalScrollConfig from "@/components/GlobalScrollConfig";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "BDI | Bauchi State Development Initiative",
    template: `%s | BDI Bauchi`,
  },
  description: "Catalyzing sustainable economic growth in Bauchi State through strategic investments, innovation, and public-private partnerships.",
  icons: {
    icon: "https://res.cloudinary.com/drnrbfltr/image/upload/v1781946164/file_00000000917071f492d4f57a5487aa02_btpy4b.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-gray-600 bg-white antialiased">
        <GlobalScrollConfig />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}