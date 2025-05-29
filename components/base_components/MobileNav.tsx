"use client";

import Link from "next/link";
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

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer rounded-full p-2 hover:text-blue-600 transition md:hidden">
          <Menu size={24} />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col space-y-4 p-6">
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
            className="text-lg hover:text-blue-600 transition duration-300 w-full text-center"
          >
            Home
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/about"
            className="text-lg hover:text-blue-600 transition duration-300 w-full text-center"
          >
            About Us
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/services"
            className="text-lg hover:text-blue-600 transition duration-300 w-full text-center"
          >
            Services
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/industries"
            className="text-lg hover:text-blue-600 transition duration-300 w-full text-center"
          >
            Industries
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/contact"
            className="text-lg hover:text-blue-600 transition duration-300 w-full text-center"
          >
            Contact
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
