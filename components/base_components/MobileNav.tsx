"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Exo } from "next/font/google";
export const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet >
      <SheetTrigger asChild >
        <div className="cursor-pointer rounded-full p-2 hover:text-blue-600 transition md:hidden">
          <Menu size={24} />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className={`flex flex-col space-y-4 p-6 ${exo.className}`}>
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-gray-800">
            Menu
          </SheetTitle>
          <SheetDescription className="hidden">
            Mobile navigation menu
          </SheetDescription>
        </SheetHeader>

        <SheetClose asChild>
          <Link
            href="/"
            className={`text-lg transition duration-300 w-full text-center ${pathname === "/" ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }`}          >
            Home
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/about"
            className={`text-lg transition duration-300 w-full text-center ${pathname === "/about" ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }`}          >
            About Us
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/services"
            className={`text-lg transition duration-300 w-full text-center ${pathname === "/services" ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }`}          >
            Services
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/industries"
            className={`text-lg transition duration-300 w-full text-center ${pathname === "/industries" ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }`}          >
            Industries
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/contact-us"
            className={`text-lg transition duration-300 w-full text-center ${pathname === "/contact-us" ? "text-blue-600 font-semibold" : "hover:text-blue-600"
              }`}          >
            Contact
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
