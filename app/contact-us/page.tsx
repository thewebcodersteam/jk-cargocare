import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import ContactForm from "@/components/base_components/ContactForm";
import Location from "@/components/Location";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AnimateOnScroll from "@/components/Functional/AnimateOnScroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | JK Cargocare – Freight, Warehousing & Logistics Experts.",
  description:
    "Get in touch with JK Cargocare for freight quotes, warehousing solutions, manpower services, and logistics support across India. Visit our Goa headquarters or contact us directly.",
  keywords: [
    "Contact JK Cargocare",
    "Logistics support India",
    "Freight inquiry Goa",
    "Warehousing quote",
    "Manpower services contact",
    "Transport company India",
    "JK Cargocare phone number",
    "Freight quote",
    "Zuarinagar logistics company",
    "Goa industrial estate logistics",
  ],
  openGraph: {
    title: "Get in Touch | JK Cargocare Contact Information",
    description:
      "Reach out to JK Cargocare's team for logistics inquiries, freight transport, and warehousing support. Based in Goa with pan-India operations.",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}

      <HeroSection
        title="Contact Us"
        subtitle=" Get in touch with our logistics experts for customized solutions."
        imageUrl="https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565888/services-new_w3hxct.webp"
        altText="Contact Us"
        imagePosition="object-bottom md:object-[center_40%] lg:object-[center_60%]"
      />

      {/* Contact Form & Location */}
      <section
        className="py-16 px-4 md:px-5 lg:px-16"
        aria-labelledby="contact-form-section"
      >
        <div className="container mx-auto px-4 space-y-16">
          <div className="grid place-content-center lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2
                id="contact-form-section"
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Location Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mt-12 md:mt-8 lg:mt-0 mb-6">
                Find Us
              </h2>
              <div
                className="bg-gray-300 h-full rounded-lg overflow-hidden"
                role="region"
                aria-label="Company Location on Map"
              >
                <Location />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <section aria-labelledby="get-in-touch" className="pt-4">
            <h2
              id="get-in-touch"
              className="text-3xl font-bold text-gray-800 mt-12 md:mt-8 lg:mt-0 mb-6"
            >
              Get in Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  colorClass: "bg-blue-100 text-blue-600",
                  title: "Headquarters",
                  lines: [
                    "Sancoale Industrial Estate",
                    "Zuarinagar, Goa 403726",
                    "India.",
                  ],
                },
                {
                  icon: Phone,
                  colorClass: "bg-green-100 text-green-600",
                  title: "Phone",
                  lines: ["0832-2556111", "0832-2555777"],
                },
                {
                  icon: Mail,
                  colorClass: "bg-orange-100 text-orange-600",
                  title: "Email",
                  lines: ["jk.cargo@yahoo.co.uk"],
                },
                {
                  icon: Clock,
                  colorClass: "bg-purple-100 text-purple-600",
                  title: "Business Hours",
                  lines: [
                    "Monday - Friday: 9:00 AM - 6:00 PM",
                    "Saturday: 9:00 AM - 2:00 PM",
                    "Sunday: Closed",
                  ],
                },
              ].map(({ icon: Icon, colorClass, title, lines }) => (
                <AnimateOnScroll key={title}>
                  <Card className="backdrop-blur-md bg-white/40 border border-white/30 rounded-xl shadow-md h-48 flex justify-start items-center">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`${
                            colorClass.split(" ")[0]
                          } p-3 rounded-full`}
                        >
                          <Icon
                            className={`h-6 w-6 ${colorClass.split(" ")[1]}`}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">
                            {title}
                          </h3>
                          <address className="not-italic text-gray-600 space-y-1">
                            {lines.map((line, idx) => (
                              <p key={idx}>{line}</p>
                            ))}
                          </address>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-blue-600 text-white"
        aria-labelledby="quick-contact"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 id="quick-contact" className="text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our logistics experts are ready to help you with urgent requirements.
          </p>
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600"
              )}
              aria-label="Request a quote"
            >
              Contact Us
            </Link>
        </div>
      </section>
    </>
  );
}
