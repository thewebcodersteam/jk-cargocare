import Link from "next/link";
import MobileNav from "./MobileNav";
import { exo } from "@/app/layout";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className={`${exo.className} bg-white flex justify-center px-6 lg:px-16 items-center w-full shadow-md sticky top-0 z-50`}
      role="banner"
    >
      <div className="container ">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="JK Cargocare Logo"
          >
            <Image
              src="https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565884/jkc-logo_azaqgq.webp"
              alt="company logo"
              width={50}
              height={30}
            />
            <span className="text-xl font-bold text-gray-800">
              JK Cargocare
            </span>
          </Link>

          <Navbar />

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
