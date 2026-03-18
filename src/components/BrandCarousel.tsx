import { useEffect, useRef, useState } from "react";

const BRANDS = [
  { name: "Diptyque", logo: "/images/brands/diptyque.svg" },
  { name: "Dolce & Gabbana", logo: "/images/brands/dolce-and-gabbana.svg" },
  { name: "Hugo Boss", logo: "/images/brands/hugo-boss-logo-1.svg" },
  { name: "Jean Paul Gaultier", logo: "/images/brands/jpg.svg" },
  { name: "Louis Vuitton", logo: "/images/brands/Louis_Vuitton_logo.svg" },
  { name: "Parfums de Marly", logo: "/images/brands/PDM.svg" },
  { name: "Sospiro", logo: "/images/brands/sospiro.webp" },
  { name: "Hermès", logo: "/images/brands/hermes-logo.svg" },
  { name: "Acqua di Parma", logo: "/images/brands/acqua-di-parma-horizontal-seeklogo.svg" },
  { name: "Le Labo", logo: "/brands/le-labo.png" },
];

type Brand = {
  name: string;
  logo: string;
};

function BrandGroup({
  items,
  groupRef,
}: {
  items: Brand[];
  groupRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={groupRef}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 md:gap-16 md:pr-16"
    >
      {items.map((brand, i) => (
        <div
          key={`${brand.name}-${i}`}
          className="flex h-6 w-[120px] flex-shrink-0 items-center justify-center sm:h-7 sm:w-[140px] md:h-8 md:w-[150px]"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="block max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-85"
            style={{
              filter: "grayscale(100%) brightness(0.72) contrast(0.88)",
            }}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandCarousel() {
  const firstGroupRef = useRef<HTMLDivElement>(null);
  const [groupWidth, setGroupWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (firstGroupRef.current) {
        setGroupWidth(firstGroupRef.current.scrollWidth);
      }
    };

    measure();

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    if (firstGroupRef.current) {
      resizeObserver.observe(firstGroupRef.current);
    }

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const duration = groupWidth > 0 ? Math.max(groupWidth / 80, 18) : 22;

  return (
    <div className="relative w-full overflow-hidden">
      <style>
        {`
          @keyframes brand-marquee-px {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(calc(-1 * var(--marquee-distance)), 0, 0);
            }
          }
        `}
      </style>

      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-14" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-14" />

      <div className="overflow-hidden">
        <div
          className="flex w-max items-center"
          style={
            groupWidth > 0
              ? ({
                ["--marquee-distance" as string]: `${groupWidth}px`,
                animation: `brand-marquee-px ${duration}s linear infinite`,
                willChange: "transform",
              } as React.CSSProperties)
              : undefined
          }
        >
          <BrandGroup items={BRANDS} groupRef={firstGroupRef} />
          <BrandGroup items={BRANDS} />
        </div>
      </div>
    </div>
  );
}