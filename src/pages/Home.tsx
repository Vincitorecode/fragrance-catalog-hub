import { useEffect } from "react";
import GenderCard from "@/components/GenderCard";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import DecantInfoSection from "@/components/DecantInfoSection";
import TrustSection from "@/components/TrustSection";
import BrandCarousel from "@/components/BrandCarousel";

const Home = () => {
  useEffect(() => {
    // Accesibilidad: si el usuario prefiere menos animación, mostramos todo.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    if (prefersReduced) {
      els.forEach((el) => el.setAttribute("data-reveal", "show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.setAttribute("data-reveal", "show");
            io.unobserve(el); // una sola vez = se siente más premium
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* CSS local SOLO para animación (no cambia estilos visuales) */}
      <style>{`
        :root {
          --reveal-dur: 900ms;
          --reveal-ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* estado inicial */
        [data-reveal]:not([data-reveal="show"]) {
          opacity: 0;
          transform: translate3d(0, 16px, 0) scale(0.995);
          filter: blur(10px);
          will-change: opacity, transform, filter;
        }

        /* estado visible */
        [data-reveal="show"] {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
          transition:
            opacity var(--reveal-dur) var(--reveal-ease),
            transform var(--reveal-dur) var(--reveal-ease),
            filter var(--reveal-dur) var(--reveal-ease);
        }

        /* stagger (delays) */
        .reveal-delay-100 { transition-delay: 100ms; }
        .reveal-delay-200 { transition-delay: 200ms; }
        .reveal-delay-300 { transition-delay: 300ms; }
        .reveal-delay-400 { transition-delay: 400ms; }
        .reveal-delay-500 { transition-delay: 500ms; }

        /* accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          [data-reveal] {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <Header />

      <main className="container py-6 sm:py-8 md:py-12">
        {/* Hero */}
        <div data-reveal="hide" className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-3">
            Le Fragrance Club
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-primary font-display italic mb-2 sm:mb-3">
            Decants
          </p>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed line-clamp-2">
            Descubre perfumes de alta gama con frascos originales. Prueba, compara y elige antes de comprometerte.
          </p>
        </div>

        {/* Gender Cards (stagger suave) */}
        <div
          data-reveal="hide"
          className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-4 sm:mb-6"
        >
          <div data-reveal="hide" className="reveal-delay-100">
            <GenderCard
              gender="hombre"
              title="Hombre"
              description="Fragancias seleccionadas por su calidad, elegancia y presencia."
              imageSrc="/images/gender/hombre.jpg"
            />
          </div>

          <div data-reveal="hide" className="reveal-delay-200">
            <GenderCard
              gender="mujer"
              title="Mujer"
              description="Aromas sofisticados y atemporales, pensados para destacar con elegancia."
              imageSrc="/images/gender/mujer.jpg"
            />
          </div>
        </div>

        {/* Brand Carousel */}
        <div
          data-reveal="hide"
          className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[calc((100vw-1280px)/2+2rem)]"
        >
          <BrandCarousel />
        </div>

        {/* Features */}
        <section data-reveal="hide" className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div data-reveal="hide" className="reveal-delay-100">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Fragancias Premium</h3>
              <p className="text-sm text-muted-foreground">Solo trabajamos con las mejores casas perfumeras</p>
            </div>

            <div data-reveal="hide" className="reveal-delay-200">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Prueba Primero</h3>
              <p className="text-sm text-muted-foreground">Decants para que pruebes antes de comprar</p>
            </div>

            <div data-reveal="hide" className="reveal-delay-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Asesoría Personalizada</h3>
              <p className="text-sm text-muted-foreground">Te ayudamos a encontrar tu fragancia ideal</p>
            </div>
          </div>
        </section>

        <div data-reveal="hide" className="reveal-delay-150">
          <DecantInfoSection imageSrc="/images/decant-info-section2.jpg" />
        </div>

        <div data-reveal="hide" className="reveal-delay-150">
          <TrustSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
