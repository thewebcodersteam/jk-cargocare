"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

type Partner = {
  name: string;
  logo: string;
  tagline?: string;
};

type PartnerCarouselProps = {
  partners: Partner[];
};

export function PartnerCarousel({ partners }: PartnerCarouselProps) {
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
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div ref={sliderRef} className="keen-slider">
        {partners.map((partner, idx) => (
          <div key={idx} className="keen-slider__slide flex">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex gap-8  items-start justify-between text-start w-full hover:shadow-md transition-shadow">
              <div className="w-full flex">
                <div className="relative w-24 h-24 mb-4 border-2 border-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-lg">{partner.name}</p>
                <hr />
                {partner.tagline && (
                  <p className="text-sm text-gray-500 mt-1">
                    {partner.tagline}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {partners.map((_, idx) => (
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
