"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden md:flex gap-10"
      role="navigation"
      aria-label="Primary navigation"
    >
  {navLinks.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <div key={href} className="h-full flex items-center">
    <Link
              href={href}
  // Convey active state via aria-current; ensure min tap height
      aria-current={isActive ? "page" : undefined}
      className={`relative font-belleza text-gray-700 hover:text-blue-600 inline-block py-3 group ${
                isActive ? "text-blue-600" : ""
              }`}
            >
              <span
                className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0"
                }`}
              >
                {label}
              </span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
