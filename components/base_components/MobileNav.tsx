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
      <SheetContent side="right" className={`flex flex-col h-full p-6 ${exo.className}`}>
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-gray-800">
            Menu
          </SheetTitle>
          <SheetDescription className="hidden">
            Mobile navigation menu
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col space-y-4 flex-1">
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
        </div>

        {/* Professional Mobile Footer Section - Only visible on mobile */}
        <div className="block md:hidden mt-auto border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
          <div className="px-4 py-4 space-y-4">
            
            {/* Contact Information */}
            <div className="space-y-3">
              <h4 className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Quick Contact
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-start gap-3 text-sm text-gray-700">
                  <div className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">📞</span>
                  </div>
                  <span className="font-medium">0832-2556111</span>
                </div>
                <div className="flex items-center justify-start gap-3 text-sm text-gray-700">
                  <div className="w-7 h-7 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-sm">✉️</span>
                  </div>
                  <span className="font-medium">jk.cargo@yahoo.co.uk</span>
                </div>
              </div>
            </div>

            {/* Bottom Brand Line */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500 font-medium">
                JK Cargocare • Excellence in Logistics.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
