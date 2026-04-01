interface DecantInfoSectionProps {
  imageSrc?: string;
}

const DecantInfoSection = ({
  imageSrc = "/images/decant-info-section2.jpg",
}: DecantInfoSectionProps) => {
  return (
    <section className="pt-16 pb-28 sm:pt-20 sm:pb-32 md:pt-24 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="font-brandon font-light text-2xl sm:text-3xl md:text-4xl text-[#013220] mb-12 sm:mb-16 tracking-[0.02em]">
          ¿QUÉ ES UN{" "}
          <span className="font-snell text-[1.25em]">
            Decant
          </span>
          <span className="font-brandon font-light text-[0.75em]">
            ? (Y POR QUÉ LO NECESITAS)
          </span>
        </h2>

        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16">

          {/* Text */}
          <div className="space-y-10">

            {/* Block 1 */}
            <div>
              <h3 className="font-brandon font-bold text-lg sm:text-xl uppercase tracking-[0.08em] mb-3">
                ¿QUÉ ES UN DECANT?
              </h3>

              <p className="font-brandon font-normal text-sm sm:text-base text-[#555] leading-relaxed">
                <span className="font-brandon font-medium text-[#3CB371]">
                  Fragancia totalmente original
                </span>{" "}
                extraída directamente de su botella a un atomizador portátil.
                La libertad de usar, probar y viajar con tu fragancia favorita
                sin pagar el precio completo.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="font-brandon font-bold text-lg sm:text-xl uppercase tracking-[0.08em] mb-3">
                ¿SON PERFUMES ORIGINALES?
              </h3>

              <p className="font-brandon font-normal text-sm sm:text-base text-[#555] leading-relaxed">
                <span className="font-brandon font-medium text-[#3CB371]">
                  Sí, 100%.
                </span>{" "}
                Preservamos el ADN de cada fragancia. Realizamos la extracción
                de forma manual y precisa para asegurar que el jugo llegue a ti
                intacto, manteniendo su potencia y evolución original.
              </p>
            </div>

          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end md:self-start md:-translate-y-28">
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