import { Truck, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-12"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <div
              className="flex items-center space-x-2 mb-4"
              aria-label="JK Logistics Logo"
            >
              <Truck className="h-6 w-6 text-blue-400" aria-hidden="true" />
              <span className="text-lg font-bold">JK Logistics</span>
            </div>
            <p className="text-gray-400 mb-4">
              Established in 2000, providing reliable freight solutions across
              India for over two decades.
            </p>
            <div className="flex space-x-4" aria-label="Contact shortcuts">
              <div className="bg-blue-600 p-2 rounded" title="Call us">
                <Phone className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <div className="bg-blue-600 p-2 rounded" title="Email us">
                <Mail className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <div className="bg-blue-600 p-2 rounded" title="Get directions">
                <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Services Links */}
          <nav aria-label="Services" className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Freight Brokerage",
                "Hazardous Cargo",
                "Warehousing",
                "Manpower Services",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries Links */}
          <nav aria-label="Industries" className="space-y-2">
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              {["Chemicals", "Fertilizers", "Agriculture", "Manufacturing"].map(
                (industry) => (
                  <li key={industry}>
                    <Link href="/industries" className="hover:text-white">
                      {industry}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address
              className="not-italic space-y-2 text-gray-400"
              aria-label="Company Contact Information"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Sancoale Industrial Estate, Goa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>
                  <a href="tel:+918322782828" className="hover:text-white">
                    +91-832-2782828
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>
                  <a
                    href="mailto:info@singhlogistics.com"
                    className="hover:text-white"
                  >
                    info@singhlogistics.com
                  </a>
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 JK Logistics. All rights reserved. | Founded by Ms.
            Anjalee Singh & Mr. Jitendra Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  );
}
