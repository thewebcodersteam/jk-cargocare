import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/base_components/Header";
import Footer from "@/components/base_components/Footer";

export const metadata: Metadata = {
  title: "JK Cargocare – Freight, Warehousing & Manpower Solutions",
  description:
    "JK Cargocare offers pan-India freight solutions including long-distance transport, bulk & hazardous cargo handling, scalable warehousing, and manpower services with 20+ years of expertise.",
  generator: "v0.dev",
  keywords: [
    "Freight services India",
    "Bulk cargo transport",
    "Hazardous cargo logistics",
    "Warehousing Goa",
    "Manpower supply",
    "JK Cargocare",
    "FTL LTL transport",
    "Customs clearance",
    "Logistics Goa",
    "ODC transport"
  ],
  applicationName: "JK Cargocare",
  authors: [{ name: "JK Cargocare", url: "https://jk-cargocare.in" }],
  creator: "JK Cargocare Team",
  publisher: "JK Cargocare",
  openGraph: {
    title: "JK Cargocare – Freight & Warehousing Experts",
    description:
      "Trusted logistics partner across India specializing in ODC, FTL, LTL, hazardous cargo and warehousing services since 2000.",
    url: "https://jk-cargocare.in",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://jk-cargocare.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
