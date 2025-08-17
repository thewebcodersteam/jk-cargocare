import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/base_components/Header";
import Footer from "@/components/base_components/Footer";
import QueryContext from "@/context/QueryContext";
import StructuredData from "@/components/SEO/StructuredData";
import { Toaster } from "react-hot-toast";
import "keen-slider/keen-slider.min.css";
import { Exo } from "next/font/google";

export const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Enhanced SEO Metadata with comprehensive optimization
export const metadata: Metadata = {
  // Primary SEO Meta Tags
  title:
    "JK Cargocare – 20+ Years Expert Freight, Warehousing & Logistics Solutions | Goa, India",
  description:
    "Leading logistics company in Goa offering freight transport (FTL/LTL/ODC), warehousing, hazardous cargo handling & manpower services across 7+ Indian states since 2000.",

  // Technical Meta Tags
  generator: "Next.js",
  applicationName: "JK Cargocare",
  referrer: "origin-when-cross-origin",

  // Author and Publisher Information
  authors: [{ name: "JK Cargocare", url: "https://www.jkcargocare.com" }],
  creator: "JK Cargocare Logistics Team",
  publisher: "JK Cargocare Pvt Ltd",

  // SEO Keywords - Industry + Geographic + Services
  keywords: [
    // Core Services
    "freight transport India",
    "logistics company Goa",
    "warehousing solutions",
    "FTL transport services",
    "LTL shipping India",
    "ODC cargo transport",
    "hazardous cargo handling",
    "bulk cargo logistics",
    "manpower services",

    // Geographic Keywords
    "logistics Goa",
    "freight services Maharashtra",
    "transport Gujarat",
    "warehousing Zuari Nagar",
    "cargo Sancoale Industrial Estate",

    // Industry-Specific
    "chemical transport India",
    "industrial logistics",
    "supply chain solutions",
    "customs clearance",
    "freight brokerage",
    "cargo management",

    // Brand Keywords
    "JK Cargocare",
    "JK Cargo",
    "trusted logistics partner India",
  ],

  // Enhanced Open Graph for Social Media
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.jkcargocare.com",
    siteName: "JK Cargocare",
    title:
      "JK Cargocare – Expert Freight & Warehousing Solutions | 20+ Years Experience",
    description:
      "Trusted logistics partner across India specializing in FTL, LTL, ODC, hazardous cargo transport and warehousing services since 2000. Serving 7+ states.",
    images: [
      {
        url: "https://www.jkcargocare.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JK Cargocare - Professional Logistics Services in India",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card Optimization
  twitter: {
    card: "summary_large_image",
    site: "@jkcargocare",
    creator: "@jkcargocare",
    title: "JK Cargocare – Premier Freight & Logistics Solutions",
    description:
      "20+ years of logistics excellence across India. FTL, LTL, ODC transport, warehousing & hazardous cargo handling.",
    images: ["https://www.jkcargocare.com/twitter-card.jpg"],
  },

  // Robots and Indexing Instructions
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

  // Verification for Search Engines
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Additional Meta Tags
  category: "Logistics and Transportation",
  classification: "Business",

  // Alternate Languages (if applicable)
  alternates: {
    canonical: "https://www.jkcargocare.com",
    languages: {
      "en-IN": "https://www.jkcargocare.com",
      "hi-IN": "https://www.jkcargocare.com/hi",
    },
  },

  // App-specific metadata
  appleWebApp: {
    capable: true,
    title: "JK Cargocare",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Global Structured Data */}
        <StructuredData type="organization" />

        {/* Additional Meta Tags for Enhanced SEO */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" type="image/svg+xml" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Safari pinned tab */}
        <link rel="mask-icon" href="/icon.svg" color="#1e40af" />
      </head>
      <body>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 font-medium"
        >
          Skip to main content
        </a>
        <QueryContext>
          <Header />
          <main
            id="main-content"
            className={`${exo.className} min-h-screen pt-16`}
            role="main"
          >
            {children}
          </main>
          <Toaster />
          <Footer />
        </QueryContext>
      </body>
    </html>
  );
}
