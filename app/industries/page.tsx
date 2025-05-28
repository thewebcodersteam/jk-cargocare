import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Factory,
  Wheat,
  Beaker,
  FileText,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl opacity-90">
              Specialized logistics solutions across diverse industry sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chemicals",
                color: "red",
                icon: Beaker,
                points: [
                  "Hazardous material transport",
                  "Safety compliance protocols",
                  "Specialized equipment",
                  "Emergency response procedures",
                ],
              },
              {
                title: "Fertilizers",
                color: "green",
                icon: Wheat,
                points: [
                  "Bulk cargo handling",
                  "Agricultural supply chain",
                  "Seasonal logistics planning",
                  "Rural distribution networks",
                ],
              },
              {
                title: "Agriculture",
                color: "yellow",
                icon: Wheat,
                points: [
                  "Fresh produce transport",
                  "Temperature-controlled logistics",
                  "Agricultural equipment",
                  "Market distribution",
                ],
              },
              {
                title: "Manufacturing",
                color: "blue",
                icon: Factory,
                points: [
                  "Raw material transport",
                  "Finished goods distribution",
                  "Just-in-time delivery",
                  "Industrial equipment",
                ],
              },
              {
                title: "Paper Industry",
                color: "orange",
                icon: FileText,
                points: [
                  "Paper roll transport",
                  "Pulp and raw materials",
                  "Moisture protection",
                  "Careful handling procedures",
                ],
              },
              {
                title: "Events",
                color: "purple",
                icon: Calendar,
                points: [
                  "Event equipment transport",
                  "Time-critical delivery",
                  "Setup and breakdown support",
                  "Specialized handling",
                ],
              },
            ].map(({ title, color, icon: Icon, points }) => (
              <Card
                key={title}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div
                    className={`bg-${color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${color}-200 transition-colors`}
                  >
                    <Icon className={`h-8 w-8 text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {title === "Chemicals"
                      ? "Specialized handling of chemical products with safety compliance and certified transportation."
                      : title === "Fertilizers"
                      ? "Bulk fertilizer transportation with expertise in agricultural supply chain logistics."
                      : title === "Agriculture"
                      ? "Farm-to-market logistics solutions for agricultural products and equipment."
                      : title === "Manufacturing"
                      ? "Industrial logistics for manufacturing companies with just-in-time delivery solutions."
                      : title === "Paper Industry"
                      ? "Specialized transport for paper products and pulp with careful handling protocols."
                      : "Event logistics and equipment transportation for conferences, exhibitions, and special events."}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    {points.map((point) => (
                      <div key={point}>• {point}</div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      className={`border-${color}-600 text-${color}-600 hover:bg-${color}-600 hover:text-white`}
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients Section */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
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
              >
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt={client}
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

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Singh Logistics?
            </h2>
            <p className="text-gray-600 mb-12">
              Our industry expertise and specialized solutions make us the
              preferred logistics partner
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-800 font-medium mb-2">
                  Years Experience
                </div>
                <div className="text-gray-600 text-sm">
                  Deep industry knowledge across sectors
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <div className="text-gray-800 font-medium mb-2">
                  Satisfied Clients
                </div>
                <div className="text-gray-600 text-sm">
                  Trusted partnerships across industries
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-800 font-medium mb-2">Support</div>
                <div className="text-gray-600 text-sm">
                  Round-the-clock logistics support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our industry expertise can benefit your business
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
