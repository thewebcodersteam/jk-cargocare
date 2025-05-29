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
    url: "https://jk-cargocare.in/services",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://jk-cargocare.in/images/services-og.jpg", // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: "JK Cargocare - Our Logistics Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Cargocare Services",
    description:
      "Logistics made seamless with FTL, LTL, ODC transport, warehousing, manpower, and safety-focused hazardous cargo handling.",
    images: ["https://jk-cargocare.in/images/services-og.jpg"], // Replace with actual hosted image
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Freight Brokerage */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Truck className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Freight Brokerage
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Complete freight solutions including Full Truck Load (FTL),
                  Less Than Truck Load (LTL), and Over Dimensional Cargo (ODC)
                  transport across India.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "FTL Services",
                    "LTL Solutions",
                    "ODC Transport",
                    "Long Distance",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Freight transport"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Hazardous & Bulk Cargo */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Hazardous & Bulk Cargo
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Specialized handling of hazardous materials and bulk cargo
                  with certified equipment and trained personnel ensuring safety
                  and compliance.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Chemical Transport",
                    "Bulk Materials",
                    "Safety Compliance",
                    "Certified Handling",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
              <div className="lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hazardous cargo handling"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Warehousing & Inventory */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Warehouse className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Warehousing & Inventory
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Scalable warehousing solutions at our Sancoale Industrial
                  Estate facility in Goa, with modern inventory management
                  systems.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Secure Storage",
                    "Inventory Management",
                    "Scalable Solutions",
                    "Strategic Location",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">View Facilities</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Warehouse facility"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Manpower & Field Operations */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Manpower & Field Operations
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Trained labor and field support services to handle your
                  operational requirements with skilled personnel and
                  professional management.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Trained Personnel",
                    "Field Support",
                    "Project Management",
                    "Flexible Solutions",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">Discuss Requirements</Link>
                </Button>
              </div>
              <div className="lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Field operations team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
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
                  <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Fleet</h2>
            <p className="text-gray-600">
              Modern vehicles equipped for diverse transportation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                color: "blue",
                title: "Trucks",
                desc: "Various capacity trucks for different cargo requirements",
              },
              {
                color: "orange",
                title: "Tippers",
                desc: "Specialized vehicles for bulk material transportation",
              },
              {
                color: "green",
                title: "Taurus Vehicles",
                desc: "Heavy-duty vehicles for challenging transportation needs",
              },
            ].map(({ color, title, desc }) => (
              <div key={title} className="text-center">
                <div
                  className={`bg-${color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Truck className={`h-10 w-10 text-${color}-600`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for customized logistics solutions
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/contact">Request Service Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
