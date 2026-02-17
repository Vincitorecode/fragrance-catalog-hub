import { useEffect, useRef } from "react";

const BRANDS = [
  { name: "Louis Vuitton", logo: "/brands/louis-vuitton.svg" },
  { name: "Parfums de Marly", logo: "/brands/pdm.svg" },
  { name: "Diptyque", logo: "/brands/diptyque.svg" },
  { name: "Sospiro", logo: "/brands/sospiro.svg" },
  { name: "Acqua di Parma", logo: "/brands/acqua-di-parma.svg" },
  { name: "Jean Paul Gaultier", logo: "/brands/jpg.svg" },
  { name: "Dolce & Gabbana", logo: "/brands/dolce-gabbana.svg" },
  { name: "Hermès", logo: "/brands/hermes.svg" },
  { name: "Hugo Boss", logo: "/brands/hugo-boss.svg" },
];

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf: number;
    let pos = 0;
    const speed = 0.4;

    const animate = () => {
      pos += speed;
      const half = el.scrollWidth / 2;
      if (pos >= half) pos = 0;
      el.scrollLeft = pos;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(raf);
    const resume = () => { raf = requestAnimationFrame(animate); };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-10 sm:gap-16 md:gap-20 overflow-hidden whitespace-nowrap py-2"
        style={{ scrollBehavior: "auto" }}
      >
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex-shrink-0 h-6 sm:h-8 flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full w-auto object-contain"
              style={{ filter: "grayscale(100%) brightness(0.4)" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
