import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import ContactForm from "@/components/base_components/ContactForm";
import Location from "@/components/Location";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | JK Cargocare – Freight, Warehousing & Logistics Experts",
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
    <main role="main" className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
        aria-labelledby="contact-hero"
      >
        <article className="container mx-auto px-4 text-center">
          <h1 id="contact-hero" className="text-4xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl opacity-90">
            Get in touch with our logistics experts for customized solutions
          </p>
        </article>
      </section>

      {/* Contact Form & Location */}
      <section className="py-16" aria-labelledby="contact-form-section">
        <div className="container mx-auto px-4 space-y-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 id="contact-form-section" className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Location Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="bg-gray-300 h-full rounded-lg overflow-hidden" role="region" aria-label="Company Location on Map">
                <Location />
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <section aria-labelledby="get-in-touch" className="pt-4">
            <h2 id="get-in-touch" className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  colorClass: "bg-blue-100 text-blue-600",
                  title: "Headquarters",
                  lines: [
                    "Sancoale Industrial Estate",
                    "Zuarinagar, Goa 403726",
                    "India",
                  ],
                },
                {
                  icon: Phone,
                  colorClass: "bg-green-100 text-green-600",
                  title: "Phone",
                  lines: ["+91-832-2782828", "+91-832-2782829"],
                },
                {
                  icon: Mail,
                  colorClass: "bg-orange-100 text-orange-600",
                  title: "Email",
                  lines: [
                    "info@singhlogistics.com",
                    "operations@singhlogistics.com",
                  ],
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
                <Card key={title}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${colorClass.split(" ")[0]} p-3 rounded-full`}>
                        <Icon
                          className={`h-6 w-6 ${colorClass.split(" ")[1]}`}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{title}</h3>
                        <address className="not-italic text-gray-600 space-y-1">
                          {lines.map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            Our logistics experts are ready to help you with urgent requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918322782828"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center"
              )}
              aria-label="Call us now"
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call Now: +91-832-2782828
            </a>
            <a
              href="mailto:info@singhlogistics.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-blue-600 hover:bg-gray-300 flex items-center justify-center"
              )}
              aria-label="Send us an email"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

