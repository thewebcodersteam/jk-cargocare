import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/base_components/Header";
import Footer from "@/components/base_components/Footer";
import QueryContext from "@/context/QueryContext";
import { Toaster } from "react-hot-toast";
import "keen-slider/keen-slider.min.css";

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
    "ODC transport",
  ],
  applicationName: "JK Cargocare",
  authors: [{ name: "JK Cargocare" }],
  creator: "JK Cargocare Team",
  publisher: "JK Cargocare",
  openGraph: {
    title: "JK Cargocare – Freight & Warehousing Experts",
    description:
      "Trusted logistics partner across India specializing in ODC, FTL, LTL, hazardous cargo and warehousing services since 2000.",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryContext>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </QueryContext>
      </body>
    </html>
  );
}
