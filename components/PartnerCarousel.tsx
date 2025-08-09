"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

type Partner = {
  name: string;
  logo: string;
  tagline?: string;
  bracket?: string;
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
    <div className="max-w-7xl mx-auto ">
      <div 
        ref={sliderRef} 
        className="keen-slider"
        role="region"
        aria-label="Business partners carousel"
        aria-live="polite"
      >
        {partners.map((partner, idx) => (
          <div key={idx} className="keen-slider__slide flex" role="group" aria-label={`Partner ${idx + 1} of ${partners.length}: ${partner.name}`}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-wrap lg:flex-nowrap gap-8  items-start  text-start w-full hover:shadow-md transition-shadow">
              <div className="w-full flex justify-center items-center">
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
                <div>
                  <p className="font-semibold text-lg">{partner.name}</p>
                  <p className="font-semibold text-lg">{partner.bracket}</p>
                </div>
                <hr />
                {partner.tagline && (
                  <p className="text-sm text-gray-600 mt-1">
                    {partner.tagline}
                  </p>
                )}
              </div>
              <div className="h-5 w-full">

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Partner carousel navigation">
        {partners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentSlide ? "bg-black" : "bg-gray-300"
            }`}
            role="tab"
            aria-selected={idx === currentSlide}
            aria-label={`Go to partner slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
