"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "General Manager",
    title: "Commercial & Logistics, Zuari Agro Chemicals Ltd",
    avatar:
      "https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750566299/zuari_tphc4b.webp",
    text: "JK Cargocare & JK Enterprises has been our trusted partner at Zuari Agro Chemicals for over ten years, handling bulk fertilizer stacking, de-bagging, cleaning, and in-plant transport with impeccable reliability. Their on-site supervision and safety standards gave us complete peace of mind, and they consistently delivered under tight schedules.",
  },
  {
    name: "Deputy General Manager",
    title: "Materials, Zuari Agro Chemicals Ltd",
    avatar:
      "https://res.cloudinary.com/dsbmi1y9e/image/upload/v1750566299/zuari_tphc4b.webp",
    text: "JK Cargocare has been our trusted transport partner for over seven years, handling bulk fertilizer movements from MPT to our Zuari plant, spares distribution across states, and finished‐goods deliveries to Verna. Their on-time pickups, careful handling, and transparent communication have been invaluable in keeping our production lines running smoothly.",
  },
  {
    name: "General Manager",
    title: "Raj Facility Management",
   
    text: "We engaged JK Enterprises to deliver comprehensive gardening and facility upkeep across our multi-storied residential complex in Porvorim. From landscape design and trenching to ongoing maintenance and seasonal planting, they managed a 9-acre site worth over ₹12.8 lakhs annually. Their team’s professionalism and attention to detail have transformed our grounds, and our residents couldn’t be happier.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ClientCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, idx) => (
          <div key={idx} className="keen-slider__slide flex">
            <div className="bg-white border border-gray-200 text-black rounded-2xl p-8 shadow-sm flex flex-col justify-between w-full">
              <Quote className="text-black h-8 w-8 mb-4" />
              <p className="text-lg leading-relaxed mb-6">“{t.text}”</p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-semibold text-sm">
                    {getInitials(t.name)}
                  </div>
                )}
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
