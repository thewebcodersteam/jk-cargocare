import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Wheat, Beaker, FileText, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AnimateOnScroll from "@/components/Functional/AnimateOnScroll";

export const metadata: Metadata = {
  title:
    "Industries We Serve | JK Cargocare - Chemical, Fertilizer, Agro, Paper & More.",
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
  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title="Industries We Serve"
        subtitle=" Specialized Logistics Solutions Across Diverse Industry Sectors."
        imageUrl="/assets/images/industries-new.webp"
        altText="Industries We Serve"
        imagePosition="object-center"
      />

      {/* Industries Grid */}
      <section className="py-16 px-4 md:px-5 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chemicals",
                color: "red",
                icon: Beaker,
                points: [
                  "Hazardous material transport.",
                  "Safety compliance protocols.",
                  "Specialized equipment.",
                  "Emergency response procedures.",
                ],
              },
              {
                title: "Fertilizers",
                color: "green",
                icon: Wheat,
                points: [
                  "Bulk cargo handling.",
                  "Agricultural supply chain.",
                  "Seasonal logistics planning.",
                  "Rural distribution networks.",
                ],
              },
              {
                title: "Agriculture",
                color: "yellow",
                icon: Wheat,
                points: [
                  "Fresh produce transport.",
                  "Temperature-controlled logistics.",
                  "Agricultural equipment.",
                  "Market distribution.",
                ],
              },
              {
                title: "Manufacturing",
                color: "blue",
                icon: Factory,
                points: [
                  "Raw material transport.",
                  "Finished goods distribution.",
                  "Just-in-time delivery.",
                  "Industrial equipment.",
                ],
              },
              {
                title: "Paper Industry",
                color: "orange",
                icon: FileText,
                points: [
                  "Paper roll transport.",
                  "Pulp and raw materials.",
                  "Moisture protection.",
                  "Careful handling procedures.",
                ],
              },
              {
                title: "Manpower",
                color: "purple",
                icon: Users,
                points: [
                  "Skilled and unskilled labor transport.",
                  "On-site deployment logistics.",
                  "Shift-based movement planning.",
                  "Workforce mobilization support.",
                ],

              },
            ].map(({ title, color, icon: Icon, points }) => (
              <AnimateOnScroll key={title}>
                <Card className="group backdrop-blur-lg bg-white/30 border border-white/20 shadow-md rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
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
                      {/* description logic */}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      {points.map((point) => (
                        <div key={point}>• {point}</div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button className="border border-orange-500 text-orange-500 bg-white hover:bg-orange-500 hover:text-white transition-all">
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose JK Cargocare?
          </h2>
          <p className="text-gray-600 mb-12">
            Our industry expertise and specialized solutions make us the
            preferred logistics partner.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-800 font-medium mb-2">
                  Years Experience
                </div>
                <p className="text-gray-600 text-sm">
                  Deep industry knowledge across sectors.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100+
                </div>
                <div className="text-gray-800 font-medium mb-2">
                  Satisfied Clients
                </div>
                <p className="text-gray-600 text-sm">
                  Trusted partnerships across industries.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-800 font-medium mb-2">Support</div>
                <p className="text-gray-600 text-sm">
                  Round-the-clock logistics support.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our industry expertise can benefit your business.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
