import React from "react";

const BRANDS = [
  { name: "Acqua di Parma", logo: "/images/brands/acqua-di-parma.svg" },
  { name: "Hermès", logo: "/images/brands/hermes-logo.svg" },
  { name: "Diptyque", logo: "/images/brands/diptyque.svg" },
  { name: "Dolce & Gabbana", logo: "/images/brands/dolce-and-gabbana.svg" },
  { name: "Hugo Boss", logo: "/images/brands/hugo-boss-logo-1.svg" },
  { name: "Jean Paul Gaultier", logo: "/images/brands/jpg.svg" },
  { name: "Louis Vuitton", logo: "/images/brands/Louis_Vuitton_logo.svg" },
  { name: "Parfums de Marly", logo: "/images/brands/PDM.svg" },
  { name: "Sospiro", logo: "/images/brands/sospiro.webp" },
  { name: "Le Labo", logo: "/images/brands/le-labo.png" },
];

const BrandRow = ({ items }: { items: typeof BRANDS }) => (
  <div className="flex items-center gap-10 sm:gap-14 md:gap-16 shrink-0">
    {items.map((brand, i) => (
      <div
        key={`${brand.name}-${i}`}
        className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[150px] h-6 sm:h-7 md:h-8 flex items-center justify-center"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-full max-w-full object-contain opacity-70 hover:opacity-85 transition-opacity duration-300"
          style={{
            filter: "grayscale(100%) brightness(0.72) contrast(0.88)",
          }}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    ))}
  </div>
);

const BrandCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <style>
        {`
          @keyframes brand-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-33.3333%);
            }
          }
        `}
      </style>

      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <div
          className="flex items-center w-max"
          style={{
            animation: "brand-marquee 18s linear infinite",
            willChange: "transform",
          }}
        >
          <BrandRow items={BRANDS} />
          <BrandRow items={BRANDS} />
          <BrandRow items={BRANDS} />
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;