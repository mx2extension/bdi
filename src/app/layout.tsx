import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalScrollConfig from "@/components/GlobalScrollConfig";
import AiChatBox from "@/components/AiChatBox"; // <-- IMPORT THE CHATBOX

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// Replace with your actual deployed domain
const siteUrl = "https://mx2bdi.com"; 
const description = "Catalyzing sustainable economic growth in Bauchi State through strategic investments, innovation, and public-private partnerships.";
const ogImage = "https://res.cloudinary.com/drnrbfltr/image/upload/v1781946164/file_00000000917071f492d4f57a5487aa02_btpy4b.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BDI | Bauchi State Development Initiative",
    template: "%s | BDI Bauchi",
  },
  description,
  keywords: [
    "Bauchi State",
    "Bauchi Development Initiative",
    "BDI Bauchi",
    "Bauchi Investments",
    "Bauchi Innovation",
    "Bauchi Impact",
    "Sustainable Economic Growth",
    "Public Private Partnerships Bauchi",
    "Investments in Bauchi",
    "E7I Foundation",
  ],
  authors: [{ name: "Bauchi State Development Initiative" }],
  creator: "Bauchi State Development Initiative",
  openGraph: {
    title: "BDI | Bauchi State Development Initiative",
    description,
    url: siteUrl,
    siteName: "Bauchi State Development Initiative",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Bauchi State Development Initiative Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BDI | Bauchi State Development Initiative",
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: ogImage,
    apple: ogImage,
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
        <AiChatBox /> {/* <-- RENDER THE CHATBOX HERE */}
      </body>
    </html>
  );
}