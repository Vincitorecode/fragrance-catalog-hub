interface DecantInfoSectionProps {
  imageSrc?: string;
}

const DecantInfoSection = ({ imageSrc = "/images/decant-info-section2.jpg" }: DecantInfoSectionProps) => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-foreground mb-12 sm:mb-16">
          ¿QUÉ ES UN <span className="font-script text-[#013220] text-[1.2em]">Decant</span>?{" "}
          <span className="text-muted-foreground font-normal">(Y POR QUÉ LO NECESITAS)</span>
        </h2>

        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16 items-start">
          {/* Left: Q&A blocks */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground uppercase tracking-wide mb-3">
                ¿QUÉ ES UN DECANT?
              </h3>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                <span className="text-[#3CB371] font-semibold">Fragancia totalmente original</span>{" "}
                extraída directamente de su botella a un atomizador portátil. La libertad de usar, probar y viajar con tu fragancia favorita sin pagar el precio completo.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground uppercase tracking-wide mb-3">
                ¿SON PERFUMES ORIGINALES?
              </h3>
              <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                <span className="text-[#3CB371] font-semibold">Sí, 100%.</span>{" "}
                Preservamos el ADN de cada fragancia. Realizamos la extracción de forma manual y precisa para asegurar que el jugo llegue a ti intacto, manteniendo su potencia y evolución original.
              </p>
            </div>
          </div>

          {/* Right: Circular image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden flex-shrink-0">
              <img
                src={imageSrc}
                alt="Decants Le Fragrance Club"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecantInfoSection;
