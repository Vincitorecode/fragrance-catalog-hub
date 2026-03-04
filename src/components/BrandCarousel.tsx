import { useEffect, useRef } from "react";

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

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let pos = 0;
    const speed = 0.45;

    const animate = () => {
      const half = el.scrollWidth / 2;
      pos += speed;
      if (pos >= half) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-14 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="overflow-hidden"
        style={{ scrollBehavior: "auto", willChange: "scroll-position" }}
      >
        <div className="flex items-center gap-10 sm:gap-14 md:gap-16 whitespace-nowrap py-0.5 min-w-max">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 h-5 sm:h-6 flex items-center justify-center opacity-70 hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain opacity-70 hover:opacity-90 transition-opacity duration-300"
                style={{ filter: "grayscale(100%) brightness(0.9) contrast(0.9)" }}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;