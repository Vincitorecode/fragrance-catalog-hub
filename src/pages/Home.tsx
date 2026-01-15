import GenderCard from "@/components/GenderCard";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import DecantInfoSection from "@/components/DecantInfoSection";
import TrustSection from "@/components/TrustSection";



const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8 sm:py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20 animate-fade-in">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 sm:mb-4">
            Le Fragrance Club
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-primary font-display italic mb-4 sm:mb-6">
            Decants
          </p>

          <p className="
  text-sm sm:text-base md:text-lg
  text-muted-foreground
  max-w-6xl mx-auto
  px-4 sm:px-0
  leading-relaxed
  md:line-clamp-2
">
  La forma perfecta de descubrir perfumes de alta gama con frascos originales y aromas auténticos, dándote la libertad de probar, comparar y elegir antes de comprometerte con el frasco completo.
</p>


        </div>

        {/* Gender Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          <GenderCard
            gender="hombre"
            title="Hombre"
            description="Fragancias seleccionadas por su calidad, elegancia y presencia. Clásicos y modernos para un estilo definido."
            imageSrc="/images/gender/hombre.jpg"
          />

          <GenderCard
            gender="mujer"
            title="Mujer"
            description="Aromas sofisticados y atemporales, pensados para destacar con elegancia y personalidad."
            imageSrc="/images/gender/mujer.jpg"
          />
        </div>

        {/* Features Section */}
        <section className="mt-12 sm:mt-16 md:mt-28 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                Fragancias Premium
              </h3>
              <p className="text-sm text-muted-foreground">
                Solo trabajamos con las mejores casas perfumeras
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                Prueba Primero
              </h3>
              <p className="text-sm text-muted-foreground">
                Decants para que pruebes antes de comprar
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                Asesoría Personalizada
              </h3>
              <p className="text-sm text-muted-foreground">
                Te ayudamos a encontrar tu fragancia ideal
              </p>
            </div>
          </div>
        </section>
        <DecantInfoSection imageSrc="/images/decant-info-section2.jpg" />
        <TrustSection />

      </main>

      <Footer />
    </div>
  );
};

export default Home;
