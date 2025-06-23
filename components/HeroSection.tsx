// components/HeroSection.tsx
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
  imagePosition?: string;
}

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  altText,
  imagePosition,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[600px] flex items-end justify-start text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className={`object-cover ${imagePosition ? imagePosition : "object-bottom md:object-[center_40%] lg:object-[center_14%]"} `}
        priority
      />

      {/* Gradient Overlay */}
      <div className=" absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-[1]" />

      {/* Text Content */}
      <div className=" p-5 lg:p-10 relative z-10 text-start px-4 md:px-6 lg:px-16 pb-12">
        <h1
          id="hero-heading"
          className="text-title md:text-title lg:text-6xl mb-6 leading-snug drop-shadow-md"
        >
          {title}
        </h1>
        <p className="text-xl opacity-90 drop-shadow-md">{subtitle}</p>
      </div>
    </section>
  );
}
