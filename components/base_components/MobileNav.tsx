"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone } from "lucide-react";
import Image from "next/image";
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
    <Sheet>
      <SheetTrigger asChild>
  {/* Accessible, discoverable mobile menu button with label and size */}
        <button
          className="cursor-pointer rounded-md p-3 hover:text-blue-600 transition md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Open menu"
          aria-controls="mobile-nav-sheet"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        id="mobile-nav-sheet"
        className={`flex flex-col h-full p-6 ${exo.className}`}
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-gray-800">
            Menu
          </SheetTitle>
          <SheetDescription className="hidden">
            Mobile navigation menu
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col space-y-4 flex-1 justify-center items-center gap-2">
          <SheetClose asChild>
            <Link
              href="/"
              role="menuitem"
              className={`text-lg transition duration-300 w-full text-center min-h-[44px] flex items-center justify-center ${
                pathname === "/"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/about"
              role="menuitem"
              className={`text-lg transition duration-300 w-full text-center min-h-[44px] flex items-center justify-center ${
                pathname === "/about"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              About Us
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/services"
              role="menuitem"
              className={`text-lg transition duration-300 w-full text-center min-h-[44px] flex items-center justify-center ${
                pathname === "/services"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
              aria-current={pathname === "/services" ? "page" : undefined}
            >
              Services
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/industries"
              role="menuitem"
              className={`text-lg transition duration-300 w-full text-center min-h-[44px] flex items-center justify-center ${
                pathname === "/industries"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
              aria-current={pathname === "/industries" ? "page" : undefined}
            >
              Industries
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/contact-us"
              role="menuitem"
              className={`text-lg transition duration-300 w-full text-center min-h-[44px] flex items-center justify-center ${
                pathname === "/contact-us"
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
              aria-current={pathname === "/contact-us" ? "page" : undefined}
            >
              Contact Us
            </Link>
          </SheetClose>
        </div>

        {/* Professional Mobile Footer Section - Only visible on mobile */}
        <div className="block md:hidden mt-auto">
          <div className="px-4 py-4 space-y-4">
    {/* Contact Information */}
            <div className="space-y-4">
              <SheetClose asChild>
                <Link
                  href="/"
      className="flex justify-center items-center gap-2 min-h-[44px]"
                >
                  <Image
                    src="https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565884/jkc-logo_azaqgq.webp"
                    alt="company logo"
                    width={30}
                    height={25}
                  />
                  <span className="text-xl font-bold text-gray-800">
                    JK Cargocare
                  </span>
                </Link>
              </SheetClose>
              {/* <div className="space-y-3">
                <div className="group flex items-center justify-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-foreground">
                    0832-2556111
                  </span>
                </div>
                <div className="group flex items-center justify-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-foreground">
                    jk.cargo@yahoo.co.uk
                  </span>
                </div>
              </div> */}
            </div>

            {/* Bottom Brand Line */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-center text-xs text-gray-600 font-medium">
                JK Cargocare • Excellence in Logistics.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
