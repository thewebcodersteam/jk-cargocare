import Link from "next/link";
import { Truck } from "lucide-react";
import MobileNav from "./MobileNav"


const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header
      className="bg-white shadow-md sticky top-0 z-50 px-20 font-sans"
      role="banner"
    >
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
            className="hidden md:flex gap-10"
            role="navigation"
            aria-label="Primary navigation"
          >
            {navLinks.map(({ label, href }) => (
              <div key={href} className=" h-full">
                <Link
                  key={href}
                  href={href}
                  className="relative text-gray-700 hover:text-blue-600 font-belleza after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
                >
                  {label}
                </Link>
              </div>
            ))}
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
