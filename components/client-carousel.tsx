"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    title: "Logistics Head, Zuari Agro Chemicals",
    avatar: "https://i.pravatar.cc/150?img=11",
    text: "JK Cargocare has consistently delivered timely freight solutions for us. Their professionalism and reach across India is unmatched.",
  },
  {
    name: "Anita Desai",
    title: "Operations Manager, Marico",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "We've trusted JK Cargocare with our bulk cargo for over 3 years. Their safety protocols and efficiency are top-notch.",
  },
  {
    name: "Vikram Shah",
    title: "Supply Chain Lead, Coromandel",
    avatar: "https://i.pravatar.cc/150?img=22",
    text: "Their warehousing solutions in Goa have streamlined our inventory and reduced transit delays significantly.",
  },
  {
    name: "Neha Kapoor",
    title: "Field Ops, Grasim Industries",
    avatar: "https://i.pravatar.cc/150?img=65",
    text: "We appreciate the manpower support JK Cargocare provides — trained staff that can be relied upon at any site.",
  },
];

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
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
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
