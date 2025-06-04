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


export const metadata: Metadata = {
  title:
    "Our Services | JK Cargocare - Freight, Hazardous Cargo, Warehousing & Manpower",
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

export default function ServicesPage() {
  return (
    <main role="main" className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
        aria-labelledby="services-hero"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 id="services-hero" className="text-4xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl opacity-90">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16" aria-labelledby="main-services-heading">
        <div className="container mx-auto px-4 grid gap-12">
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
                "FTL Services",
                "LTL Solutions",
                "ODC Transport",
                "Long Distance",
              ],
              imageAlt: "Freight transport",
              imageSrc: "/assets/images/freight-brokerage.jpg",
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
                "Chemical Transport",
                "Bulk Materials",
                "Safety Compliance",
                "Certified Handling",
              ],
              imageAlt: "Hazardous cargo handling",
              imageSrc: "/assets/images/hazardous.jpg",
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
                "Secure Storage",
                "Inventory Management",
                "Scalable Solutions",
                "Strategic Location",
              ],
              imageAlt: "Warehouse facility",
              imageSrc: "/assets/images/warehousing-inventory.jpg",
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
                "Trained Personnel",
                "Field Support",
                "Project Management",
                "Flexible Solutions",
              ],
              imageAlt: "Field operations team",
              imageSrc: "/assets/images/manpower.jpg",
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
              <div
                key={title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
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
                  <Link href="/contact" passHref legacyBehavior>
                    <Button className={buttonColor} aria-label={buttonLabel}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </figure>
                <div className={reverse ? "lg:order-1" : ""}>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <figcaption className="sr-only">{imageAlt}</figcaption>
              </div>
            )
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="additional-services"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="additional-services"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Additional Services
            </h2>
            <p className="text-gray-600">
              Comprehensive support for all your logistics needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Inbound Shipments",
                desc: "Efficient handling of incoming cargo with customs coordination and documentation support.",
              },
              {
                icon: Clock,
                title: "Real-time Tracking",
                desc: "Advanced tracking systems to monitor your shipments in real-time throughout the journey.",
              },
              {
                icon: MapPin,
                title: "Route Optimization",
                desc: "Strategic route planning to ensure cost-effective and timely delivery of your cargo.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title}>
                <CardContent className="p-6 text-center">
                  <Icon
                    className="h-12 w-12 text-blue-600 mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
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
              Modern vehicles equipped for diverse transportation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Trucks",
                desc: "Various capacity trucks for different cargo requirements",
                bg: "bg-blue-100",
                text: "text-blue-600",
              },
              {
                title: "Tippers",
                desc: "Specialized vehicles for bulk material transportation",
                bg: "bg-orange-100",
                text: "text-orange-600",
              },
              {
                title: "Taurus Vehicles",
                desc: "Heavy-duty vehicles for challenging transportation needs",
                bg: "bg-green-100",
                text: "text-green-600",
              },
            ].map(({ title, desc, bg, text }) => (
              <div key={title} className="text-center">
                <div
                  className={`${bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Truck className={`h-10 w-10 ${text}`} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
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
            Contact us today for customized logistics solutions
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
              aria-label="Request Service Quote"
            >
              Request Service Quote
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
