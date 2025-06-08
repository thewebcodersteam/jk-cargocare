import Link from "next/link"
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
      className="bg-white flex justify-center px-4 lg:px-16 items-center w-full shadow-md sticky top-0 z-50 font-sans"
      role="banner"
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div
            className="flex items-center space-x-2"
            aria-label="JK Cargocare Logo"
          >
            <img
              src="/assets/images/jkc-logo.png"
              alt="JK Cargocare"
              className="h-11 w-auto"
            />
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
              <div key={href} className="h-full">
                <Link
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
