import { Truck, Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8  w-full">
          {/* Brand & Social */}
          <div aria-labelledby="footer-brand-heading">
            <div
              className="flex items-center justify-center lg:justify-start space-x-2 mb-4"
              id="footer-brand-heading"
            >
              <Image
                src="/assets/images/jkc-logo.png"
                alt="company logo"
                width={40}
                height={20}
              />
              <h3 className="text-lg font-bold">JK Cargocare</h3>
            </div>
            <p className="text-gray-400 mb-4 text-center lg:text-start">
              Established in 2000, providing reliable freight solutions across
              India for over two decades.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start" aria-label="Social media links">
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
            <ul className="space-y-2 text-gray-400 text-center">
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
            <ul className="space-y-2 text-gray-400 text-center">
              {["Chemicals", "Fertilizers", "Agriculture", "Manufacturing"].map(
                (industry) => (
                  <li key={industry}>
                    <Link href="/industries" className="hover:text-white">
                      {industry}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contact Info */}
          <div aria-labelledby="footer-contact-heading">
            <h3
              className="text-lg font-semibold mb-4 flex justify-center lg:justify-start items-center"
              id="footer-contact-heading"
            >
              Contact Info
            </h3>
            <address
              className="not-italic space-y-2 text-gray-400"
              aria-label="Company contact information"
            >
              <div className="text-center lg:text-start">
                <Link
                  href="tel:+917350691111"
                  className="hover:text-white"
                  aria-label="Call +91 7350691111"
                >
                  +91 7350691111
                </Link>{" "}
                /{" "}
                <Link
                  href="tel:+919422062939"
                  className="hover:text-white"
                  aria-label="Call 9422062939"
                >
                  9422062939
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
              <div className="text-center lg:text-start">
                <Link
                  href="http://www.jkcargocare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  aria-label="Visit our official website"
                >
                  www.jkcargocare.com
                </Link>
              </div>
              <div className="text-center lg:text-start">
                Shed D2-32, Sancoale Industrial Estate,
                <br />
                Zuari Nagar, Goa – 403726
              </div>
            </address>
          </div>
        </div>

        <div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          role="contentinfo"
          aria-label="Copyright"
        >
          <small>
            &copy; {new Date().getFullYear()} JK Cargocare. All rights reserved.
            | Founded by Ms. Anjalee Singh & Mr. Jitendra Kumar Singh
          </small>
        </div>
      </div>
    </footer>
  );
}
