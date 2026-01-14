import { Link } from "react-router-dom";

interface DecantInfoSectionProps {
  imageSrc?: string;
}

const DecantInfoSection = ({ imageSrc = "/images/decant-info-section1.png" }: DecantInfoSectionProps) => {
  return (
    <section className="mt-14 sm:mt-16 md:mt-20">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Imagen */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="aspect-[16/11] w-full">
            <img
              src={imageSrc}
              alt="Decants Le Fragrance Club"
              className="h-full w-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>

        {/* Texto */}
        <div className="md:pl-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Guía rápida
          </p>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Todo lo que necesitas saber sobre Decants
          </h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                ¿Qué es un decant?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Es una muestra de perfume 100% original colocada en un frasco pequeño,
                ideal para probarlo o llevarlo contigo sin comprar el frasco completo.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                ¿Son perfumes originales?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Sí, 100%. Se extraen directamente de frascos originales y se preparan con cuidado
                para mantener el aroma auténtico.
              </p>
            </div>
          </div>

          {/* CTA mini (opcional, no hace largo) */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/hombre"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Ver Hombre
            </Link>
            <Link
              to="/mujer"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Ver Mujer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecantInfoSection;
