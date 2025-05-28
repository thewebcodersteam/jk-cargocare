import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/base_components/Header";
import Footer from "@/components/base_components/Footer";

export const metadata: Metadata = {
  title: "create next app",
  description: "Created with v0",
  generator: "v0.dev",
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
