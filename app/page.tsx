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
    <main className="min-h-screen" role="main">
      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 id="hero-heading" className="text-5xl font-bold mb-6">
              Your Trusted Partner in Freight Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              20+ years of excellence in logistics, warehousing, and manpower
              services across India
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              role="group"
              aria-label="Primary actions"
            >
              <Link href="/contact" passHref legacyBehavior>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  aria-label="Get a quote"
                >
                  Get Quote
                </Button>
              </Link>
              <Link href="/services" passHref legacyBehavior>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white hover:bg-gray-300 text-blue-600"
                  aria-label="View our services"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section aria-labelledby="stats-heading" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="sr-only">
            Company Statistics
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            role="list"
          >
            {[
              { label: "Years Experience", value: "20+" },
              { label: "States Covered", value: "7" },
              { label: "Fleet Vehicles", value: "50+" },
              { label: "Happy Clients", value: "100+" },
            ].map((stat) => (
              <div key={stat.label} role="listitem">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section aria-labelledby="services-heading" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to meet your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Freight Solutions",
                icon: (
                  <Truck className="h-8 w-8 text-blue-600" aria-hidden="true" />
                ),
                desc: "FTL, LTL, and ODC transport with long-distance coverage across India",
              },
              {
                title: "Warehousing",
                icon: (
                  <Warehouse
                    className="h-8 w-8 text-orange-600"
                    aria-hidden="true"
                  />
                ),
                desc: "Scalable warehousing solutions at Sancoale Industrial Estate, Goa",
              },
              {
                title: "Manpower Services",
                icon: (
                  <Users
                    className="h-8 w-8 text-green-600"
                    aria-hidden="true"
                  />
                ),
                desc: "Trained labor and field support for your operational needs",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section aria-labelledby="coverage-heading" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="coverage-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
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
      <section aria-labelledby="process-heading" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
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
      <section aria-labelledby="clients-heading" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="clients-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
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
      <section
        aria-labelledby="cta-heading"
        className="py-16 bg-blue-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">
            Ready to Streamline Your Logistics?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our experts for customized solutions
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            role="group"
            aria-label="Call to action buttons"
          >
            <Link href="/contact" passHref legacyBehavior>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
                aria-label="Request a quote"
              >
                Request Quote
              </Button>
            </Link>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              aria-label="Call us now"
            >
              <a href="tel:+918322782828">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call Now: +91-832-2782828
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
