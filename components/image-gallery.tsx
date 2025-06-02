"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  {
    number: "01.",
    title: "Freight Solutions",
    description:
      "FTL, LTL, and ODC transport with long-distance coverage across India",
    image: "/images/feature-01.jpg", // Replace with your image path
    action: "Learn More →",
    link: "",
  },
  {
    number: "02.",
    title: "Warehousing",
    description:
      "Scalable warehousing solutions at Sancoale Industrial Estate, Goa",
    action: "Learn More →",
    link: "",
  },
  {
    number: "03.",
    title: "Manpower Services",
    description: "Trained labor and field support for your operational needs",
    action: "Learn More →",
    link: "",
  },
];

export default function FeatureHighlight() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full border border-gray-300 flex">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`transition-all duration-300 cursor-pointer ${
            index === selected
              ? "flex-[2] bg-black text-white"
              : "flex-1 border-l border-gray-300 bg-white text-black"
          } flex flex-col justify-between`}
          onClick={() => setSelected(index)}
        >
          {index === selected ? (
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <p className="text-2xl font-semibold mb-2">{feature.number}</p>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {feature.description}
                </p>

                <Link
                  href={feature.link}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  aria-label={`Learn more about ${feature.action}`}
                >
                  Learn More →
                </Link>
              </div>
              <div className="mt-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          ) : (
            <div className="p-6">
              <p className="text-xl font-semibold mb-2">{feature.number}</p>
              <p className="text-sm">{feature.title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
