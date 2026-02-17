import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenderCard from "@/components/GenderCard";
import DecantInfoSection from "@/components/DecantInfoSection";
import BrandCarousel from "@/components/BrandCarousel";

const BENEFITS = [
  {
    title: "Un Universo Olfativo",
    text: (
      <>
        De los tesoros de <strong>nicho</strong> y la opulencia <strong>árabe</strong> a los grandes iconos <strong>comerciales.</strong>
        <br />Todo el espectro del perfume en un solo lugar.
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-16 text-foreground/70">
        <ellipse cx="32" cy="42" rx="12" ry="18" />
        <rect x="28" y="20" width="8" height="6" rx="1" />
        <line x1="32" y1="20" x2="32" y2="14" />
        <line x1="28" y1="14" x2="36" y2="14" />
        <ellipse cx="20" cy="38" rx="6" ry="10" />
        <rect x="18" y="26" width="4" height="4" rx="1" />
        <ellipse cx="46" cy="40" rx="5" ry="8" />
        <rect x="44" y="30" width="4" height="3" rx="1" />
      </svg>
    ),
  },
  {
    title: "Decide con Libertad",
    text: (
      <>
        Experimenta la evolución de cada perfume en tu piel.
        <br />El formato <strong>decant</strong> es tu pase directo para elegir sin errores ni remordimientos.
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-16 text-foreground/70">
        <rect x="24" y="22" width="16" height="28" rx="3" />
        <rect x="28" y="16" width="8" height="6" rx="1" />
        <circle cx="32" cy="36" r="4" />
        <path d="M26 50 L32 56 L38 50" />
        <line x1="32" y1="8" x2="32" y2="16" />
        <circle cx="32" cy="6" r="2" />
      </svg>
    ),
  },
  {
    title: "Encuentra tu Firma",
    text: (
      <>
        ¿Buscas algo <strong>único</strong>?
        <br />Te guiamos entre notas y familias olfativas para que descubras la fragancia que realmente habla de ti.
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-16 h-16 text-foreground/70">
        <path d="M20 44 C20 30, 32 20, 32 20 C32 20, 44 30, 44 44" />
        <ellipse cx="32" cy="46" rx="12" ry="8" />
        <path d="M26 36 C22 32, 16 34, 18 40" />
        <path d="M38 36 C42 32, 48 34, 46 40" />
        <circle cx="28" cy="28" r="3" />
        <circle cx="36" cy="24" r="2" />
        <line x1="32" y1="20" x2="32" y2="12" />
        <path d="M28 12 L32 8 L36 12" />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* ─── HERO ─── */}
        <section className="py-12 sm:py-16 md:py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Script title */}
            <h1 className="font-script text-[42px] sm:text-[48px] md:text-[56px] text-[#013220] font-medium leading-tight">
              Decants
            </h1>

            {/* Green subtitle */}
            <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold tracking-[0.15em] uppercase text-[#3CB371]">
              COLECCIONA EXPERIENCIAS, NO SOLO FRASCOS.
            </p>

            {/* Description */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-[#555] max-w-[820px] mx-auto leading-relaxed">
              ¿Nicho, comercial o árabe? Ya no tienes que elegir a ciegas.
              <br className="hidden sm:block" />
              Prueba las fragancias más deseadas del mundo en decants originales y decide cuál merece un lugar en tu colección.
            </p>

            {/* Brand logos row */}
            <div className="mt-8 sm:mt-10 overflow-x-auto scrollbar-none">
              <BrandCarousel />
            </div>
          </div>
        </section>

        {/* ─── GENDER SPLIT 50/50 ─── */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <GenderCard
              gender="hombre"
              title="HOMBRE"
              description=""
              imageSrc="/images/gender/hombre.jpg"
            />
            <GenderCard
              gender="mujer"
              title="MUJER"
              description=""
              imageSrc="/images/gender/mujer.jpg"
            />
          </div>
        </section>

        {/* ─── 3 BENEFITS ─── */}
        <section className="py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 md:gap-16">
              {BENEFITS.map((b) => (
                <div key={b.title} className="text-center">
                  {/* Circle icon */}
                  <div className="w-[120px] h-[120px] mx-auto mb-6 rounded-full border border-[#ddd] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-[#3CB371] mb-3">
                    {b.title}
                  </h3>
                  <p className="text-sm text-[#555] leading-relaxed max-w-[300px] mx-auto">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DECANT INFO ─── */}
        <DecantInfoSection imageSrc="/images/decant-info-section2.jpg" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
