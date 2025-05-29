import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Warehouse, Users, Phone } from "lucide-react";
import Link from "next/link";
import { ClientCarousel } from "@/components/client-carousel";
import { ProcessDiagram } from "@/components/process-diagram";
import { InteractiveMap } from "@/components/interactive-map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JK Cargocare | India-wide Freight, Warehousing & Manpower Services",
  description:
    "Explore 20+ years of logistics expertise with JK Cargocare. We specialize in freight brokerage, warehousing, hazardous cargo, and manpower solutions across 7+ Indian states.",
  keywords: [
    "Freight solutions India",
    "ODC transport",
    "FTL LTL logistics",
    "Hazardous cargo transport",
    "Warehousing in Goa",
    "Manpower services India",
    "JK Cargocare",
    "Logistics company India",
    "Supply chain solutions",
  ],
  openGraph: {
    title: "JK Cargocare – Trusted Freight & Logistics Solutions",
    description:
      "Trusted partner for long-distance transport, scalable warehousing, and trained manpower services in India.",
    url: "https://jk-cargocare.in",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Your Trusted Partner in Freight Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              20+ years of excellence in logistics, warehousing, and manpower
              services across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-gray-300 text-blue-600"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Fleet Vehicles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Freight Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  FTL, LTL, and ODC transport with long-distance coverage across
                  India
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Warehouse className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Warehousing</h3>
                <p className="text-gray-600 mb-4">
                  Scalable warehousing solutions at Sancoale Industrial Estate,
                  Goa
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Manpower Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Trained labor and field support for your operational needs
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Coverage Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Coverage Area
            </h2>
            <p className="text-gray-600">
              Pan-India presence with strategic locations
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600">
              Simple, efficient, and transparent workflow
            </p>
          </div>
          <ProcessDiagram />
        </div>
      </section>

      {/* Client Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600">
              Proud to serve some of India's most respected companies
            </p>
          </div>
          <ClientCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our experts for customized solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now: +91-832-2782828
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
