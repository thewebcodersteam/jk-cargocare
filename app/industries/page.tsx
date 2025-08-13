import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Wheat, Beaker, FileText, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AnimateOnScroll from "@/components/Functional/AnimateOnScroll";
import ScrollIntoView from "@/components/ScrollIntoView";

// Standardize title style
export const metadata: Metadata = {
  title: "Industries | JK Cargocare",
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

export default async function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title="Industries We Serve"
        subtitle=" Specialized Logistics Solutions Across Diverse Industry Sectors."
        imageUrl="https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565891/industries-new_nfayvl.webp"
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
                colorClass: {
                  bg: "bg-red-100",
                  hover: "group-hover:bg-red-200",
                  icon: "text-red-600",
                },
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
                colorClass: {
                  bg: "bg-yellow-100",
                  hover: "group-hover:bg-yellow-200",
                  icon: "text-yellow-600",
                },
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
                colorClass: {
                  bg: "bg-green-100",
                  hover: "group-hover:bg-green-200",
                  icon: "text-green-600",
                },
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
                colorClass: {
                  bg: "bg-blue-100",
                  hover: "group-hover:bg-blue-200",
                  icon: "text-blue-600",
                },
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
                colorClass: {
                  bg: "bg-orange-100",
                  hover: "group-hover:bg-orange-200",
                  icon: "text-orange-600",
                },
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
                colorClass: {
                  bg: "bg-purple-100",
                  hover: "group-hover:bg-purple-200",
                  icon: "text-purple-600",
                },
                icon: Users,
                points: [
                  "Skilled and unskilled labor transport.",
                  "On-site deployment logistics.",
                  "Shift-based movement planning.",
                  "Workforce mobilization support.",
                ],
              },
            ].map(
              ({
                title,
                colorClass: { bg, icon: colorIcon, hover },
                icon: Icon,
                points,
              }) => {

                return (
                  <AnimateOnScroll key={title}>
                    <Card
                      className={`group backdrop-blur-lg bg-white/30 border shadow-md rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    >
                      <CardContent className="p-8">

                        <div
                          className={`${bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${hover} transition-colors`}
                        >
                          <Icon className={`h-8 w-8 ${colorIcon}`} />
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-4">
                          {title}
                        </h3>

                        <p className="text-gray-600 text-center mb-6">
                          {/* Optional: Add description here */}
                        </p>

                        <div className="space-y-2 text-sm text-gray-600">
                          {points.map((point) => (
                            <div key={point}>• {point}</div>
                          ))}
                        </div>

                        <div className="mt-6 text-center">
                          <Button className="border bg-orange-500 text-white hover:bg-orange-600 transition-all">
                            <Link href="/contact-us">Learn More</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimateOnScroll>
                );
              }
            )}
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
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 cta-btn w-full sm:w-60 justify-center mx-auto"
          >
            <Link href="/contact-us">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
