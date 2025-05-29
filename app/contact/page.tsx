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
    url: "https://jk-cargocare.in/contact",
    siteName: "JK Cargocare",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://jk-cargocare.in/images/contact-og.jpg", // Replace with real hosted image
        width: 1200,
        height: 630,
        alt: "Contact JK Cargocare – Logistics Experts in Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JK Cargocare – India-wide Freight & Logistics",
    description:
      "Need logistics support or a transport quote? Contact JK Cargocare today. We're based in Goa and serve clients across India.",
    images: ["https://jk-cargocare.in/images/contact-og.jpg"], // Replace with actual image URL
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our logistics experts for customized solutions
            </p>
          </div>
        </article>
      </section>

      {/* Contact Form & Info */}
      {/* Contact Section: Form + Map side by side */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {/* Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="bg-gray-300 h-full rounded-lg overflow-hidden">
                <Location />
              </div>
            </div>
          </div>

          {/* Contact Information below */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  color: "blue",
                  title: "Headquarters",
                  lines: [
                    "Sancoale Industrial Estate",
                    "Zuarinagar, Goa 403726",
                    "India",
                  ],
                },
                {
                  icon: Phone,
                  color: "green",
                  title: "Phone",
                  lines: ["+91-832-2782828", "+91-832-2782829"],
                },
                {
                  icon: Mail,
                  color: "orange",
                  title: "Email",
                  lines: [
                    "info@singhlogistics.com",
                    "operations@singhlogistics.com",
                  ],
                },
                {
                  icon: Clock,
                  color: "purple",
                  title: "Business Hours",
                  lines: [
                    "Monday - Friday: 9:00 AM - 6:00 PM",
                    "Saturday: 9:00 AM - 2:00 PM",
                    "Sunday: Closed",
                  ],
                },
              ].map(({ icon: Icon, color, title, lines }) => (
                <Card key={title}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-${color}-100 p-3 rounded-full`}>
                        <Icon className={`h-6 w-6 text-${color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{title}</h3>
                        <p className="text-gray-600">
                          {lines.map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our logistics experts are ready to help you with urgent requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="mr-2 h-4 w-4" />
              Call Now: +91-832-2782828
            </Button>
            <Link
              href="#"
              className={`${cn(
                buttonVariants(),
                "bg-white text-blue-600 hover:bg-gray-300"
              )} `}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
