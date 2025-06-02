import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Wheat, Beaker, FileText, Calendar } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Industries We Serve | JK Cargocare - Chemical, Fertilizer, Agro, Paper & More",
  description:
    "JK Cargocare provides industry-specific logistics solutions across chemicals, fertilizers, agriculture, manufacturing, events, and more with 20+ years of expertise.",
  keywords: [
    "Chemical logistics",
    "Fertilizer transport",
    "Agriculture logistics",
    "Paper industry transport",
    "Event logistics India",
    "Manufacturing freight",
    "Industry-specific logistics",
    "Hazardous cargo",
    "Bulk cargo transport",
    "JK Cargocare clients",
  ],
  openGraph: {
    title: "Industries Served by JK Cargocare – Logistics for Every Sector",
    description:
      "Trusted logistics partner for chemical, agro, fertilizer, paper, and manufacturing sectors. Explore our industry-aligned freight solutions.",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
  },
};

export default function IndustriesPage() {
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

  return (
    <main role="main" className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
        aria-labelledby="industries-hero-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 id="industries-hero-heading" className="text-4xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl opacity-90">
            Specialized logistics solutions across diverse industry sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section aria-labelledby="industries-grid-heading" className="py-16">
        <div className="container mx-auto px-4">
          <h2 id="industries-grid-heading" className="sr-only">
            Industry Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chemicals",
                icon: Beaker,
                bg: "bg-red-100",
                text: "text-red-600",
                hover: "hover:bg-red-200",
                border: "border-red-600",
              },
              {
                title: "Fertilizers",
                icon: Wheat,
                bg: "bg-green-100",
                text: "text-green-600",
                hover: "hover:bg-green-200",
                border: "border-green-600",
              },
              {
                title: "Agriculture",
                icon: Wheat,
                bg: "bg-yellow-100",
                text: "text-yellow-600",
                hover: "hover:bg-yellow-200",
                border: "border-yellow-600",
              },
              {
                title: "Manufacturing",
                icon: Factory,
                bg: "bg-blue-100",
                text: "text-blue-600",
                hover: "hover:bg-blue-200",
                border: "border-blue-600",
              },
              {
                title: "Paper Industry",
                icon: FileText,
                bg: "bg-orange-100",
                text: "text-orange-600",
                hover: "hover:bg-orange-200",
                border: "border-orange-600",
              },
              {
                title: "Events",
                icon: Calendar,
                bg: "bg-purple-100",
                text: "text-purple-600",
                hover: "hover:bg-purple-200",
                border: "border-purple-600",
              },
            ].map(({ title, icon: Icon, bg, text, hover, border }) => {
              const descriptionMap: Record<string, string> = {
                Chemicals:
                  "Specialized handling of chemical products with safety compliance and certified transportation.",
                Fertilizers:
                  "Bulk fertilizer transportation with expertise in agricultural supply chain logistics.",
                Agriculture:
                  "Farm-to-market logistics solutions for agricultural products and equipment.",
                Manufacturing:
                  "Industrial logistics for manufacturing companies with just-in-time delivery solutions.",
                "Paper Industry":
                  "Specialized transport for paper products and pulp with careful handling protocols.",
                Events:
                  "Event logistics and equipment transportation for conferences, exhibitions, and special events.",
              };

              const pointsMap: Record<string, string[]> = {
                Chemicals: [
                  "Hazardous material transport",
                  "Safety compliance protocols",
                  "Specialized equipment",
                  "Emergency response procedures",
                ],
                Fertilizers: [
                  "Bulk cargo handling",
                  "Agricultural supply chain",
                  "Seasonal logistics planning",
                  "Rural distribution networks",
                ],
                Agriculture: [
                  "Fresh produce transport",
                  "Temperature-controlled logistics",
                  "Agricultural equipment",
                  "Market distribution",
                ],
                Manufacturing: [
                  "Raw material transport",
                  "Finished goods distribution",
                  "Just-in-time delivery",
                  "Industrial equipment",
                ],
                "Paper Industry": [
                  "Paper roll transport",
                  "Pulp and raw materials",
                  "Moisture protection",
                  "Careful handling procedures",
                ],
                Events: [
                  "Event equipment transport",
                  "Time-critical delivery",
                  "Setup and breakdown support",
                  "Specialized handling",
                ],
              };

              return (
                <Card
                  key={title}
                  className="group hover:shadow-lg transition-shadow"
                  role="region"
                  aria-labelledby={`industry-${title}`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`${bg} ${hover} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors`}
                    >
                      <Icon className={`h-8 w-8 ${text}`} aria-hidden="true" />
                    </div>
                    <h3
                      id={`industry-${title}`}
                      className="text-xl font-semibold text-center mb-4"
                    >
                      {title}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      {descriptionMap[title]}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600" role="list">
                      {pointsMap[title].map((point) => (
                        <li key={point} role="listitem">
                          • {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-center">
                      <Link href="/contact" passHref legacyBehavior>
                        <Button
                          variant="outline"
                          className={`${border} ${text} hover:bg-opacity-80`}
                          aria-label={`Learn more about ${title}`}
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="py-16 bg-gray-50" aria-labelledby="clients-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="clients-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Valued Clients
            </h2>
            <p className="text-gray-600">
              Trusted by industry leaders across various sectors
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
            role="list"
          >
            {[
              "Zuari Agro Chemicals",
              "West Coast Paper Mills",
              "Chambal Fertilizers",
              "Marico",
              "Coromandel",
              "Grasim",
              "Avestra",
              "Agrimass",
              "WCI Shipping",
            ].map((client) => (
              <div
                key={client}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
                role="listitem"
              >
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt={`${client} logo`}
                  width={160}
                  height={80}
                  className="mx-auto mb-2 filter grayscale hover:grayscale-0 transition-all"
                />
                <p className="text-sm font-medium text-gray-700">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16" aria-labelledby="expertise-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="expertise-heading"
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Why Choose Singh Logistics?
            </h2>
            <p className="text-gray-600 mb-12">
              Our industry expertise and specialized solutions make us the
              preferred logistics partner
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  value: "20+",
                  label: "Years Experience",
                  desc: "Deep industry knowledge across sectors",
                },
                {
                  value: "100+",
                  label: "Satisfied Clients",
                  desc: "Trusted partnerships across industries",
                },
                {
                  value: "24/7",
                  label: "Support",
                  desc: "Round-the-clock logistics support",
                },
              ].map(({ value, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {value}
                  </div>
                  <div className="text-gray-800 font-medium mb-2">{label}</div>
                  <div className="text-gray-600 text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 bg-blue-600 text-white"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our industry expertise can benefit your business
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
              aria-label="Discuss your logistics requirements"
            >
              Discuss Your Requirements
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
