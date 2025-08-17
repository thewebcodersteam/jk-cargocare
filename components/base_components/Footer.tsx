import { Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { exo } from "@/app/layout";

export default function Footer() {
  return (
    <footer
      className={`${exo.className} bg-gray-800 text-white py-12 px-5 lg:px-16`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-0 lg:px-4">
        <div className={"grid md:grid-cols-2  lg:grid-cols-4 gap-8  w-full"}>
          {/* Brand & Social */}
          <div
            aria-labelledby="footer-brand-heading"
            className="md:col-span-2 lg:col-span-1"
          >
            <div
              className="flex items-center  justify-center lg:justify-start space-x-2 mb-4"
              id="footer-brand-heading"
            >
              <Image
                src="https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750565884/jkc-logo_azaqgq.webp"
                alt="company logo"
                width={50}
                height={30}
              />
              <h3 className="text-lg font-bold">JK Cargocare</h3>
            </div>
            <p className="text-gray-300 mb-4 text-center lg:text-start">
              Established in 2000, providing reliable freight solutions across
              India for over two decades.
            </p>
            <div
              className="flex space-x-4 justify-center lg:justify-start"
              aria-label="Social media links"
            >
              <Link
                href="https://www.facebook.com/jkcargocare/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-4 w-4 text-white" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/jk-cargocare/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-4 w-4 text-white" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.instagram.com/jkcargocare?igsh=anR2ejYxMzVraDh5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="h-4 w-4 text-white" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <nav aria-labelledby="footer-services-heading">
            <h3
              className="text-lg font-semibold mb-4 flex justify-center items-center"
              id="footer-services-heading"
            >
              Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              {[
                "Freight Brokerage",
                "Hazardous Cargo",
                "Warehousing",
                "Manpower Services",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries Links */}
          <nav aria-labelledby="footer-industries-heading">
            <h3
              className="text-lg font-semibold mb-4 flex justify-center items-center"
              id="footer-industries-heading"
            >
              Industries
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              {["Chemicals", "Fertilizers", "Agriculture", "Manufacturing"].map(
                (industry) => (
                  <li key={industry}>
                    <Link href={`/industries?highlight=${industry}`} className="hover:text-white">
                      {industry}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contact Info */}
          <div aria-labelledby="footer-contact-heading" className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3
              className="text-lg font-semibold mb-4 flex justify-center lg:justify-start items-center"
              id="footer-contact-heading"
            >
              Contact Info
            </h3>
            <address
              className="not-italic space-y-2 text-gray-300"
              aria-label="Company contact information"
            >
              {/* Normalize tel: links (remove leading space and use E.164). Visible label unchanged. */}
              <div className="text-center lg:text-start">
                <Link
                  href="tel:+918322556111"
                  className="hover:text-white"
                  aria-label="Call 0832-2556111"
                >
                  0832-2556111
                </Link>{" "}
                /{" "}
                <Link
                  href="tel:+918322555777"
                  className="hover:text-white"
                  aria-label="Call 0832-2555777"
                >
                  0832-2555777
                </Link>
              </div>
              <div className="text-center lg:text-start">
                <Link
                  href="mailto:jk.cargo@yahoo.co.uk"
                  className="hover:text-white"
                  aria-label="Email jk.cargo at yahoo.co.uk"
                >
                  jk.cargo@yahoo.co.uk
                </Link>
              </div>
              {/* Force https for external website link + noopener already present */}
              <div className="text-center lg:text-start">
                <Link
                  href="https://www.jkcargocare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  aria-label="Visit our official website (opens in new tab)"
                >
                  www.jkcargocare.com
                </Link>
              </div>
              {/* Standardize address spelling and punctuation */}
              <div className="text-center lg:text-start">
                Shed D2-32, Sancoale Industrial Estate,
                <br />
                Zuarinagar, Goa 403726, India.
              </div>
            </address>
          </div>
        </div>

  {/* Avoid duplicate contentinfo; demote copyright section to a labelled region */}
        <div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
          role="region"
          aria-label="Copyright information"
        >
          <small>
            &copy; {new Date().getFullYear()} JK Cargocare. All Rights Reserved.
            | Founded by Ms. Anjalee Singh & Mr. Jitendra Kumar Singh.
          </small>
        </div>
      </div>
    </footer>
  );
}
