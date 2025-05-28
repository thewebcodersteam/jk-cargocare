import { Truck, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Singh Logistics</span>
            </div>
            <p className="text-gray-400 mb-4">
              Established in 2000, providing reliable freight solutions across
              India for over two decades.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded">
                <Phone className="h-4 w-4" />
              </div>
              <div className="bg-blue-600 p-2 rounded">
                <Mail className="h-4 w-4" />
              </div>
              <div className="bg-blue-600 p-2 rounded">
                <MapPin className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Freight Brokerage
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Hazardous Cargo
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Manpower Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/industries" className="hover:text-white">
                  Chemicals
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white">
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Sancoale Industrial Estate, Goa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-832-2782828</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@singhlogistics.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Singh Logistics. All rights reserved. | Founded by Ms.
            Anjalee Singh & Mr. Jitendra Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  );
}
