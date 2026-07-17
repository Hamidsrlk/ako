import type { Metadata } from "next";
import { Inter, Playfair_Display, Vazirmatn } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import fa from "@/lib/i18n/dictionaries/fa";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: fa.meta.title,
    template: "%s | AKO",
  },
  description: fa.meta.description,
  keywords: fa.meta.keywords.split(", "),
  authors: [{ name: "AKO" }],
  creator: "AKO",
  metadataBase: new URL("https://ako.food"),
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    siteName: "AKO",
    title: fa.meta.title,
    description: fa.meta.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AKO Food Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fa.meta.title,
    description: fa.meta.description,
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={`${inter.variable} ${vazirmatn.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
