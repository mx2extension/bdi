import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalScrollConfig from "@/components/GlobalScrollConfig";
import AiChatBox from "@/components/AiChatBox";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const siteUrl = "https://mx2bdi.com"; 
const description = "Catalyzing sustainable economic growth in Bauchi State through strategic investments, innovation, and public-private partnerships.";
const ogImage = "/icon.png";

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
    "Eli7 Foundation",
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
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bauchi State Development Initiative",
    "url": siteUrl,
    "logo": ogImage,
    "sameAs": [
      "https://x.com/bdi_investNGR",
      "https://www.linkedin.com/company/bauchi-development-initiative-bdi/"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics Global Site Tag in <head> for Search Console Verification */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9X11EKBXN0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9X11EKBXN0');
            `,
          }}
        />
        {/* Organization Schema for Search Engines Logo Display */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans text-gray-600 bg-white antialiased">
        <GlobalScrollConfig />
        <Header />
        <main>{children}</main>
        <Footer />
        <AiChatBox />
      </body>
    </html>
  );
}