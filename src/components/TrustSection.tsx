import { useEffect, useRef, useState } from "react";
import { ShieldCheck, SprayCan, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/config";

const TrustSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // una sola vez (elegante)
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const phone = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const text = encodeURIComponent(
    "Hola, me gustaría una recomendación de perfume. ¿Me ayudas?"
  );

  return (
    <section
      ref={sectionRef}
      className={[
        "mt-14 sm:mt-16 md:mt-20",
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Confianza & Garantía
        </p>

        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Compra con total tranquilidad
        </h2>

        {/* Sellos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Sello 1 */}
          <div className="group rounded-2xl border border-border bg-card p-6 card-hover">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
              100% Original
            </h3>
            <p className="text-sm text-muted-foreground">
              Decants extraídos exclusivamente de frascos originales.
            </p>
          </div>

          {/* Sello 2 */}
          <div className="group rounded-2xl border border-border bg-card p-6 card-hover">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
              <SprayCan className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
              Higiene y cuidado
            </h3>
            <p className="text-sm text-muted-foreground">
              Atomizadores limpios, etiquetados y preparados con cuidado.
            </p>
          </div>

          {/* Sello 3 */}
          <div className="group rounded-2xl border border-border bg-card p-6 card-hover">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
              Atención personalizada
            </h3>
            <p className="text-sm text-muted-foreground">
              Te asesoramos por WhatsApp y aceptamos múltiples métodos de pago.
            </p>
          </div>
        </div>

        {/* CTA WhatsApp (premium) */}
        <div className="mt-9 flex justify-center">
          <a
            href={`https://wa.me/${phone}?text=${text}`}
            target="_blank"
            rel="noreferrer"
            className="
              group inline-flex items-center gap-3
              rounded-xl px-6 py-3
              font-semibold
              bg-[#003229] text-white
              shadow-sm
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-primary/40
            "
          >
            {/* icono whatsapp */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6a11.96 11.96 0 0 0 5.88 1.5h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.51-8.42Z" />
            </svg>

            <span>Quiero recomendación</span>

            {/* detalle oro pequeño */}
            <span
              className="
                ml-1 inline-flex items-center
                rounded-full border border-white/15
                bg-white/10 px-2 py-0.5
                text-[11px] font-medium
                text-[#EABB33]
              "
            >
              Respuesta rápida
            </span>
          </a>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Te ayudamos a elegir según tu estilo y ocasión.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;

