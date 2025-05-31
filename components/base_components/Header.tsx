import Link from "next/link";
import { Truck } from "lucide-react";
import MobileNav from "./MobileNav"; // adjust path as needed

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div
            className="flex items-center space-x-2"
            aria-label="JK Cargocare Logo"
          >
            <Truck className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <span className="text-xl font-bold text-gray-800">
              JK Cargocare
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Primary navigation"
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Services
            </Link>
            <Link
              href="/industries"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Industries
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
