import type { Metadata } from "next";
import Script from "next/script";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";

const fontDisplay = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import Header from "@/components/layout/Header";
import S14_ContactWaitlist from "@/components/sections/S14_ContactWaitlist";

export const metadata: Metadata = {
  metadataBase: new URL("https://mithilamantra.com"),
  title: {
    default: "Mithila Mantra Makhanas | The Healthiest Crunch",
    template: "%s | Mithila Mantra Makhanas",
  },
  description: "Mithila Mantra Makhanas — India's finest slow-roasted fox nuts, harvested from the lotus ponds of Bihar. High protein, gluten-free, vegan. Snack without compromise.",
  keywords: ["Makhana", "Fox Nuts", "Healthy Snacks", "Mithila Mantra", "Gluten Free Snacks", "Vegan Snacks", "High Protein", "Indian Snacks", "Bihar Makhana", "Mithila", "Roasted Makhana"],
  authors: [{ name: "Mithila Mantra Makhanas" }],
  openGraph: {
    title: "Mithila Mantra Makhanas | The Healthiest Crunch",
    description: "Discover guilt-free, delicious Makhana flavors from the heart of Bihar. Roasted to perfection.",
    url: "https://mithilamantra.com",
    siteName: "Mithila Mantra Makhanas",
    images: [
      {
        url: "/images/product_pouch_raw.png",
        width: 1200,
        height: 630,
        alt: "Mithila Mantra Makhanas",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithila Mantra Makhanas | The Healthiest Crunch",
    description: "Discover guilt-free, delicious Makhana flavors from the heart of Bihar.",
    images: ["/images/product_pouch_raw.png"],
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mithila Mantra Makhanas",
              url: "https://mithilamantra.com",
              logo: "https://mithilamantra.com/images/product_pouch_raw.png",
              description: "India's finest slow-roasted fox nuts, harvested from the lotus ponds of Bihar. High protein, gluten-free, vegan.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Darbhanga",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
            }),
          }}
        />
        {/* Placeholder for Google Analytics (User to add ID) */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID" strategy="afterInteractive" /> */}
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
          `}
        </Script> */}
        
        <div className="noise-overlay" />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          {children}
          <S14_ContactWaitlist />
        </SmoothScroll>
      </body>
    </html>
  );
}
