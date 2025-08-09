import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Package,
  Warehouse,
  Users,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AnimateOnScroll from "@/components/Functional/AnimateOnScroll";

// Standardize title style
export const metadata: Metadata = {
  title: "Services | JK Cargocare",
  description:
    "Discover comprehensive logistics services from JK Cargocare: FTL, LTL, ODC transport, hazardous cargo handling, scalable warehousing, and skilled manpower across India.",
  keywords: [
    "Freight services",
    "FTL transport India",
    "LTL shipping India",
    "ODC logistics",
    "Hazardous cargo handling",
    "Bulk cargo transport",
    "Warehousing Goa",
    "Inventory management",
    "Manpower logistics",
    "JK Cargocare services",
  ],
  openGraph: {
    title:
      "Explore JK Cargocare Services – Freight, Warehousing, Hazardous Cargo & More",
    description:
      "From freight brokerage and hazardous cargo to warehousing and manpower deployment, JK Cargocare has India-wide logistics solutions tailored for every need.",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
  },
};

export default function page() {
  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title=" Our Services"
        subtitle="Comprehensive logistics solutions tailored to your business needs."
        imageUrl="https://res.cloudinary.com/dsbmi1y9e/image/upload/v1753550427/services_t7efyk.webp"
        altText="Our Services"
        imagePosition="w-full h-full object-cover object-center"
      />

      {/* Main Services */}
      <section className="py-16" aria-labelledby="main-services-heading">
        <div className="container mx-auto px-5 md:px-6 lg:px-16 grid gap-12">
          <h2 id="main-services-heading" className="sr-only">
            Logistics Services Overview
          </h2>

          {[
            {
              title: "Freight Brokerage",
              icon: (
                <Truck className="h-8 w-8 text-blue-600" aria-hidden="true" />
              ),
              colorClass: "bg-blue-100",
              text: "Complete freight solutions including Full Truck Load (FTL), Less Than Truck Load (LTL), and Over Dimensional Cargo (ODC) transport across India.",
              points: [
                "FTL Services.",
                "LTL Solutions.",
                "ODC Transport.",
                "Long Distance.",
              ],
              imageAlt: "Freight transport",
              imageSrc:
                "https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565892/freight-brokerage_fk7xex.webp",
              buttonLabel: "Get Quote",
              buttonColor: "bg-blue-600 hover:bg-blue-700",
              reverse: false,
            },
            {
              title: "Hazardous & Bulk Cargo",
              icon: (
                <Shield
                  className="h-8 w-8 text-orange-600"
                  aria-hidden="true"
                />
              ),
              colorClass: "bg-orange-100",
              text: "Specialized handling of hazardous materials and bulk cargo with certified equipment and trained personnel ensuring safety and compliance.",
              points: [
                "Chemical Transport.",
                "Bulk Materials.",
                "Safety Compliance.",
                "Certified Handling.",
              ],
              imageAlt: "Hazardous cargo handling",
              imageSrc:
                "https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565889/hazardous_x26a8u.webp",
              buttonLabel: "Learn More",
              buttonColor: "bg-orange-600 hover:bg-orange-700",
              reverse: true,
            },
            {
              title: "Warehousing & Inventory",
              icon: (
                <Warehouse
                  className="h-8 w-8 text-green-600"
                  aria-hidden="true"
                />
              ),
              colorClass: "bg-green-100",
              text: "Scalable warehousing solutions at our Sancoale Industrial Estate facility in Goa, with modern inventory management systems.",
              points: [
                "Secure Storage.",
                "Inventory Management.",
                "Scalable Solutions.",
                "Strategic Location.",
              ],
              imageAlt: "Warehouse facility",
              imageSrc:
                "https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565888/warehousing-inventory_l80y2h.webp",
              buttonLabel: "View Facilities",
              buttonColor: "bg-green-600 hover:bg-green-700",
              reverse: false,
            },
            {
              title: "Manpower & Field Operations",
              icon: (
                <Users className="h-8 w-8 text-purple-600" aria-hidden="true" />
              ),
              colorClass: "bg-purple-100",
              text: "Trained labor and field support services to handle your operational requirements with skilled personnel and professional management.",
              points: [
                "Trained Personnel.",
                "Field Support.",
                "Project Management.",
                "Flexible Solutions.",
              ],
              imageAlt: "Field operations team",
              imageSrc:
                "https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565885/manpower_c8r9bf.webp",
              buttonLabel: "Discuss Requirements",
              buttonColor: "bg-purple-600 hover:bg-purple-700",
              reverse: true,
            },
          ].map(
            (
              {
                title,
                icon,
                colorClass,
                text,
                points,
                imageAlt,
                imageSrc,
                buttonLabel,
                buttonColor,
                reverse,
              },
              index
            ) => (
              <AnimateOnScroll key={title}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center`}
                  aria-labelledby={`service-${index}`}
                >
                  <figure className={reverse ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-4">
                      <div className={`${colorClass} p-3 rounded-full mr-4`}>
                        {icon}
                      </div>
                      <h2
                        id={`service-${index}`}
                        className="text-3xl font-bold text-gray-800"
                      >
                        {title}
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-6">{text}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {points.map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <CheckCircle
                            className="h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact-us" passHref legacyBehavior>
                      <Button className={buttonColor} aria-label={buttonLabel}>
                        {buttonLabel}
                      </Button>
                    </Link>
                  </figure>

                  <div
                    className={`relative w-full h-64 md:h-80 lg:h-[400px] ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="rounded-lg shadow-lg object-cover"
                    />
                  </div>

                  <figcaption className="sr-only">{imageAlt}</figcaption>
                </div>
              </AnimateOnScroll>
            )
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="additional-services"
      >
        <div className="container mx-auto px-5 md:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2
              id="additional-services"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Additional Services
            </h2>
            <p className="text-gray-600">
              Comprehensive support for all your logistics needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Inbound Shipments",
                desc: "Efficient handling of incoming cargo with customs coordination and documentation support.",
                iconColor: "text-green-600",
                bgColor: "bg-green-100 group-hover:bg-green-200",
              },
              {
                icon: Clock,
                title: "Real-time Tracking",
                desc: "Advanced tracking systems to monitor your shipments in real-time throughout the journey.",
                iconColor: "text-orange-600",
                bgColor: "bg-orange-100 group-hover:bg-orange-200",
              },
              {
                icon: MapPin,
                title: "Route Optimization",
                desc: "Strategic route planning to ensure cost-effective and timely delivery of your cargo.",
                iconColor: "text-purple-600",
                bgColor: "bg-purple-100 group-hover:bg-purple-200",
              },
            ].map(
              ({ icon: Icon, title, desc, iconColor, bgColor }, index, arr) => (
                <AnimateOnScroll key={title}>
                  <Card
                    className={`group bg-white/20 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${
                      index === arr.length - 1
                        ? "md:col-span-2 lg:col-span-1"
                        : ""
                    }`}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${bgColor}`}
                      >
                        <Icon
                          className={`h-8 w-8 ${iconColor}`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{title}</h3>
                      <p className="text-gray-600 mb-4">{desc}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              )
            )}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16" aria-labelledby="fleet-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="fleet-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Fleet
            </h2>
            <p className="text-gray-600">
              Modern vehicles equipped for diverse transportation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Trucks",
                desc: "Various capacity trucks for different cargo requirements.",
                bg: "bg-blue-100",
                text: "text-blue-600",
              },
              {
                title: "Tippers",
                desc: "Specialized vehicles for bulk material transportation.",
                bg: "bg-orange-100",
                text: "text-orange-600",
              },
              {
                title: "Taurus Vehicles",
                desc: "Heavy-duty vehicles for challenging transportation needs.",
                bg: "bg-green-100",
                text: "text-green-600",
              },
            ].map(({ title, desc, bg, text }) => (
              <AnimateOnScroll key={title}>
                <div className="text-center">
                  <div
                    className={`${bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Truck className={`h-10 w-10 ${text}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-blue-600 text-white"
        aria-labelledby="services-cta"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="services-cta" className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for customized logistics solutions.
          </p>
          <Link href="/contact-us" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 cta-btn w-full sm:w-60 justify-center"
              aria-label="Request Service Quote"
            >
              Request Service Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
