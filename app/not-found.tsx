import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Home, Search, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 404 Content */}
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="max-w-3xl w-full">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white text-center">
              <h1 className="text-5xl font-bold mb-2">404</h1>
              <p className="text-xl opacity-90">Destination Not Found</p>
            </div>

            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                      <Truck className="h-20 w-20 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white animate-pulse">
                      <Search className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    We couldn't find the route you're looking for
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The page you requested may have been moved, deleted, or
                    perhaps never existed. Let us help you get back on the right
                    track.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/" className="w-full">
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                        <Home className="mr-2 h-4 w-4" />
                        Return Home
                      </Button>
                    </Link>
                    <Link href="/contact" className="w-full">
                      <Button variant="outline" className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Destinations */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/services"
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-700">Our Services</span>
              </Link>

              <Link
                href="/about"
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="h-6 w-6 bg-blue-600 rounded-full mx-auto mb-2"></div>
                <span className="text-gray-700">About Us</span>
              </Link>

              <Link
                href="/industries"
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="h-6 w-6 bg-orange-500 rounded-full mx-auto mb-2"></div>
                <span className="text-gray-700">Industries</span>
              </Link>

              <Link
                href="/contact"
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <span className="text-gray-700">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
