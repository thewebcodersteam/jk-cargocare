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
            className="text-lg w-full text-center rounded-full border border-transparent
            hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40
            transition duration-300 py-2 inline-block hover:text-blue-600"
>
            Home
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/about"
            className="text-lg w-full text-center rounded-full border border-transparent
            hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40
            transition duration-300 py-2 inline-block hover:text-blue-600"
>
            About Us
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/services"
            className="text-lg w-full text-center rounded-full border border-transparent
            hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40
            transition duration-300 py-2 inline-block hover:text-blue-600"
>
            Services
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/industries"
            className="text-lg w-full text-center rounded-full border border-transparent
            hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40
            transition duration-300 py-2 inline-block hover:text-blue-600"
>
            Industries
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/contact"
            className="text-lg w-full text-center rounded-full border border-transparent
            hover:border-blue-500 hover:shadow-lg hover:shadow-blue-400/40
            transition duration-300 py-2 inline-block hover:text-blue-600"
>
            Contact
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
