import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Warehouse, Users, Phone } from "lucide-react";
import Link from "next/link";
import { ClientCarousel } from "@/components/client-carousel";
import { ProcessDiagram } from "@/components/process-diagram";
import { InteractiveMap } from "@/components/interactive-map";
import { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { exo } from "./layout";

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

const clientLogos: { name: string; image: string }[] = [
  { name: "Zuari Agro Chemicals", image: "/clients/zuari.png" },
  { name: "West Coast Paper Mills", image: "/clients/westcoast.jpeg" },
  { name: "Chambal Fertilizers", image: "/clients/chambal.jpg" },
  { name: "Marico", image: "/clients/marico.png" },
  { name: "Coromandel", image: "/clients/coromandel.png" },
  { name: "Grasim", image: "/clients/grasim.png" },
  { name: "Avestra", image: "/clients/avestra.jpg" },
  { name: "Agrimass", image: "/clients/agrimass.png" },
  { name: "WCI Shipping", image: "/clients/wci.png" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="">
        <div
          aria-labelledby="stats-heading"
          className="relative h-[80vh] w-full overflow-hidden"
        >
          <Image
            src="/assets/images/hero-section-img.webp"
            alt="Freight truck"
            fill
            className="object-cover object-bottom"
          />
          <div>
            <div className="p-5 lg:p-10 pb-5 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-#00000032 to-transparent flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-start">
              <div className="max-w-3xl  text-white z-10">
                <h1
                  id="hero-heading"
                  className="text-title md:text-title lg:text-6xl mb-6 leading-snug"
                >
                  Your Trusted Partner in Freight Solutions.
                </h1>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-start"
                role="group"
                aria-label="Primary actions"
              >
                <div className="flex flex-col gap-4 text-white bg-#e1e1e1ae/50 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                  <p className="text-xl opacity-90 mb-0">
                    20+ Years of Excellence In Logistics, Warehousing, and
                    Manpower Services Across India.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 font-lbold">
                    <div className="flex justify-center w-full">
                      <Link
                        className={cn(
                          buttonVariants({ variant: "outline", size: "lg" }),
                          "w-full lg:w-1/2 border-white hover:bg-gray-300 text-black"
                        )}
                        href="/services"
                        aria-label="View our services"
                      >
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section
        aria-labelledby="stats-heading"
        className="flex items-center p-5 py-16 mb-16 bg-gray-100 w-full"
      >
        <div className="w-full">
          <h2 id="stats-heading" className="sr-only">
            Company Statistics
          </h2>
          <div className="flex flex-wrap w-full text-center" role="list">
            {[
              { label: "Years Experience", value: "20+" },
              { label: "States Covered", value: "7" },
              { label: "Fleet Vehicles", value: "50+" },
              { label: "Happy Clients", value: "100+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                role="listitem"
                className={`h-40 flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 ${
                  index !== 3
                    ? "border-b sm:border-b-0 lg:border-r border-gray-300"
                    : ""
                }`}
              >
                <div className="text-6xl text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section aria-labelledby="services-heading" className="py-16">
        <div className="container mx-auto px-5 md:px-6 lg:px-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            ].map((service, index, arr) => (
              <Card
                key={service.title}
                className={`group bg-white/20 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${
                  index === arr.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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

      {/* Our Valued Clients – Infinite Scrolling Row */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Valued Clients
            </h2>
            <p className="text-gray-600">
              Trusted by industry leaders across various sectors
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="animate-marquee flex gap-12 items-end">
              {[...Array(2)].flatMap((_, i) =>
                clientLogos.map(({ name, image }) => (
                  <div
                    key={`${name}-${i}`}
                    className="bg-white p-6 rounded-lg shadow-sm text-center w-[200px] h-[160px] flex flex-col items-center justify-end"
                  >
                    <Image
                      src={image}
                      alt={name}
                      width={160}
                      height={80}
                      className="object-contain max-h-[80px] mb-2"
                    />
                    <p className="text-sm font-medium text-gray-700 mt-auto">
                      {name}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section aria-labelledby="coverage-heading" className="py-16 bg-gray-50">
        <div className="container mx-auto px-5 lg:px-16">
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
          <hr />
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
        <div className="container mx-auto px-0 lg:px-4">
          <div className="text-center mb-12">
            <h2
              id="clients-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              What Our Clients Say
            </h2>
            <p className="text-gray-600 px-5 lg:px-0">
              Hear directly from the professionals who rely on JK Cargocare for
              logistics excellence
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
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600"
              )}
              aria-label="Request a quote"
            >
              Request Quote
            </Link>
            <Link
              href="tel:+918322782828"
              aria-label="Call us now"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white hover:bg-gray-300 text-black"
              )}
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call Now: +91-832-2782828
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
