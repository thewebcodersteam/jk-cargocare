import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Target, Heart } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About JK Logistics | 24 Years of Freight Excellence",
  description:
    "Discover the story, mission, and milestones of Singh Logistics — your trusted partner in freight, warehousing, and manpower solutions since 2000.",
  openGraph: {
    title: "About Singh Logistics",
    description:
      "Learn about Singh Logistics, its visionary founders, core values, and 24 years of logistics expertise across India.",
    siteName: "JK Logistics",
    images: [
      {
        url: "/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "JK Logistics Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About JK Logistics",
    description:
      "Learn about JK Logistics, its founders, mission, and achievements in the logistics industry.",
    images: ["/og-image.jpg"], // Replace with your actual Twitter image
  },
};

export default function AboutPage() {
  return (
    <main role="main" className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white"
        aria-labelledby="about-hero-heading"
      >
        <Image
          src="/assets/images/logistics.jpg"
          alt="Logistics background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1
            id="about-hero-heading"
            className="text-4xl font-bold mb-4 drop-shadow-md"
          >
            About JK Logistics
          </h1>
          <p className="text-xl opacity-90 drop-shadow-md">
            Two decades of excellence in freight solutions, built on trust and
            innovation
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16" aria-labelledby="our-story-heading">
        <div className="container mx-auto px-5 md:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-52 items-center">
            <div>
              <h2
                id="our-story-heading"
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2000 by visionary entrepreneurs Ms. Anjalee Singh and
                Mr. Jitendra Kumar Singh, Singh Logistics began as a small
                freight forwarding company with a big dream – to revolutionize
                logistics solutions across India.
              </p>
              <p className="text-gray-600 mb-6">
                Starting from our headquarters in Goa, we have grown to become a
                trusted partner for businesses across seven states, offering
                comprehensive freight solutions, warehousing, and manpower
                services.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Established 2000
                  </div>
                  <div className="text-gray-600">24 years of excellence</div>
                </div>
              </div>
            </div>
            <div className="relative md:max-w-3xl lg:max-w-5xl h-64 md:h-80 lg:h-96">
              <Image
                src="/assets/images/our-story.png"
                alt="Founders of JK Logistics"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        className="py-8 md:py-16 bg-gray-50"
        aria-labelledby="founders-heading"
      >
        <div className="container mx-auto px-5 md:px-6 text-center">
          <h2
            id="founders-heading"
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Meet Our Founders
          </h2>
          <p className="text-gray-600 mb-12">
            Visionary Leaders Who Built JK Cargocare From The Ground Up.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Ms. Anjalee Singh",
                role: "Co-Founder & Director",
                desc: "A pioneer in logistics management with expertise in operations and client relations.",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Mr. Jitendra Kumar Singh",
                role: "Co-Founder & Director",
                desc: "An industry veteran with deep expertise in freight solutions and business development.",
                image: "/assets/images/founder-1.png",
              },
            ].map((founder) => (
              <Card
                key={founder.name}
                className="backdrop-blur-lg bg-white/30 border border-white/20 shadow-md rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative w-[200px] h-[200px] mx-auto mb-4 rounded-full border border-gray-300 shadow-xl overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={`Portrait of ${founder.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-600">{founder.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16" aria-labelledby="mission-values-heading">
        <div className="container mx-auto px-5 md:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2
              id="mission-values-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence in
              logistics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Target
                    className="h-8 w-8 text-blue-600"
                    aria-hidden="true"
                  />
                ),
                title: "Our Mission",
                text: "To provide reliable, efficient, and cost-effective logistics solutions.",
                bg: "bg-blue-100",
              },
              {
                icon: (
                  <Award
                    className="h-8 w-8 text-orange-600"
                    aria-hidden="true"
                  />
                ),
                title: "Excellence",
                text: "We strive for excellence in every aspect of our service delivery.",
                bg: "bg-orange-100",
              },
              {
                icon: (
                  <Heart
                    className="h-8 w-8 text-green-600"
                    aria-hidden="true"
                  />
                ),
                title: "Trust",
                text: "Building lasting relationships through transparency and reliability.",
                bg: "bg-green-100",
              },
            ].map(({ icon, title, text, bg }, index, arr) => (
              <Card
                key={title}
                className={`backdrop-blur-lg bg-white/30 border border-white/20 shadow-md rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  index === arr.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full">
                    {/* your icon goes here, already color styled */}
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="achievements-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="achievements-heading"
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Key Achievements
            </h2>
            <p className="text-gray-600">
              Milestones that mark our journey of growth and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {[
              {
                stat: "20+",
                label: "Years of Experience",
                sub: "Serving clients since 2000",
              },
              { stat: "7", label: "States Covered", sub: "Pan-India presence" },
              {
                stat: "100+",
                label: "Happy Clients",
                sub: "Trusted partnerships",
              },
              {
                stat: "50+",
                label: "Fleet Vehicles",
                sub: "Modern transportation",
              },
            ].map(({ stat, label, sub }) => (
              <div key={label} className="text-center" role="listitem">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat}
                </div>
                <div className="text-gray-800 font-medium">{label}</div>
                <div className="text-gray-600 text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 bg-blue-600 text-white"
        aria-labelledby="about-cta-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="about-cta-heading" className="text-3xl font-bold mb-4">
            Partner with Experience
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing list of satisfied clients who trust Singh Logistics
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
              aria-label="Contact us to get started"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
