import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/base_components/ContactForm"; 

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with our logistics experts for customized solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
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
                          <h3 className="font-semibold text-lg mb-2">
                            {title}
                          </h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our headquarters in Goa</p>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Google Map</p>
              <p className="text-sm text-gray-500">
                Sancoale Industrial Estate, Zuarinagar, Goa
              </p>
            </div>
          </div>
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
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
