import { useEffect, useRef } from "react";

const BRANDS = [
  { name: "Acqua di Parma", logo: "/brands/acqua-di-parma.svg" },
  { name: "Diptyque", logo: "/brands/diptyque.svg" },
  { name: "Dolce & Gabbana", logo: "/brands/dolce-gabbana.svg" },
  { name: "Hermès", logo: "/brands/hermes.svg" },
  { name: "Hugo Boss", logo: "/brands/hugo-boss.svg" },
  { name: "Jean Paul Gaultier", logo: "/brands/jpg.svg" },
  { name: "Louis Vuitton", logo: "/brands/louis-vuitton.svg" },
  { name: "Parfums de Marly", logo: "/brands/pdm.svg" },
  { name: "Sospiro", logo: "/brands/sospiro.svg" },
  { name: "Otras Marcas", logo: "/brands/other.svg" },
];

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += speed;
      
      // Reset when we've scrolled through one set of logos
      const scrollWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full py-8 sm:py-12 overflow-hidden">
      {/* Fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-12 sm:gap-20 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Double the logos for seamless infinite scroll */}
        {[...BRANDS, ...BRANDS].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 h-8 sm:h-10 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full w-auto object-contain grayscale"
              style={{ filter: "grayscale(100%) brightness(0.3)" }}
              onError={(e) => {
                // Hide broken images
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandCarousel;
