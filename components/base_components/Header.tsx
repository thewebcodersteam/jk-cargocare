import Link from "next/link";
import { Truck } from "lucide-react";
import MobileNav from "./MobileNav"; // adjust path as needed

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              JK Cargocare
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="relative text-gray-700 font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
              Home
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
              About Us
            </Link>
            <Link
              href="/services"
              className="relative text-gray-700 font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
              Services
            </Link>
            <Link
              href="/industries"
              className="relative text-gray-700 font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
              Industries
            </Link>
            <Link
              href="/contact"
              className="relative text-gray-700 font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
