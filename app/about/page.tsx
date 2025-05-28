import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Target, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Singh Logistics</h1>
            <p className="text-xl opacity-90">
              Two decades of excellence in freight solutions, built on trust and
              innovation
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2000 by visionary entrepreneurs Ms. Anjalee Singh and
                Mr. Jitendra Kumar Singh, Singh Logistics began as a small
                freight forwarding company with a big dream - to revolutionize
                logistics solutions across India.
              </p>
              <p className="text-gray-600 mb-6">
                Starting from our headquarters in Goa, we have grown to become a
                trusted partner for businesses across seven states, offering
                comprehensive freight solutions, warehousing, and manpower
                services. Our journey of over two decades has been marked by
                continuous innovation, unwavering commitment to quality, and an
                ever-expanding network of satisfied clients.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Established 2000
                  </div>
                  <div className="text-gray-600">24 years of excellence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Singh Logistics founders"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-gray-600">
              Visionary leaders who built Singh Logistics from the ground up
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Ms. Anjalee Singh"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Ms. Anjalee Singh
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Co-Founder & Director
                </p>
                <p className="text-gray-600">
                  A pioneer in logistics management with expertise in operations
                  and client relations. Her strategic vision has been
                  instrumental in expanding our service portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Mr. Jitendra Kumar Singh"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Mr. Jitendra Kumar Singh
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Co-Founder & Director
                </p>
                <p className="text-gray-600">
                  An industry veteran with deep expertise in freight solutions
                  and business development. His leadership has driven our
                  expansion across multiple states.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence in
              logistics
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable, efficient, and cost-effective logistics
                  solutions that enable our clients to focus on their core
                  business while we handle their transportation needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service
                  delivery, from timely transportation to exceptional customer
                  support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trust</h3>
                <p className="text-gray-600">
                  Building lasting relationships through transparency,
                  reliability, and consistent delivery on our promises to
                  clients and partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Key Achievements
            </h2>
            <p className="text-gray-600">
              Milestones that mark our journey of growth and success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={label} className="text-center">
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing list of satisfied clients who trust Singh Logistics
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
