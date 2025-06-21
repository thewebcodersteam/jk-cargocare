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
          <div key={href} className="h-full">
            <Link
              href={href}
              className={`relative font-belleza text-gray-700 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 ${
                isActive
                  ? "text-blue-600 after:w-full after:bg-blue-600"
                  : "after:w-0 after:bg-blue-600"
              }`}
            >
              {label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
