import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "5214435113228";
const WHATSAPP_TEXT = "Hola, me gustaría información sobre sus decants/perfumes.";

function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#013220] text-white">
      {/* Big editorial title */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-grande text-center uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(2.5rem,9vw,10rem)] text-white/90">
            LE FRAGRANCE CLUB
          </h2>
        </div>
      </section>

      {/* Cards section */}
      <section className="pb-8 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Atención personalizada */}
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center">
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-widest mb-3">
                ATENCIÓN PERSONALIZADA
              </h3>
              <p className="text-sm text-white/70 mb-6">
                Asesoría directa y pedidos vía WhatsApp.
              </p>
              <a
                href={waLink(WHATSAPP_NUMBER, WHATSAPP_TEXT)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <SiWhatsapp className="text-lg" />
                Contáctanos
              </a>
            </div>

            {/* Métodos de pago */}
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
              <h3 className="text-sm sm:text-base font-semibold uppercase tracking-widest mb-6 text-center">
                MÉTODOS DE PAGO
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "💳", label: "Crédito / Débito" },
                  { icon: "🏦", label: "Transferencia" },
                  { icon: "💰", label: "Mercado Pago" },
                  { icon: "💵", label: "Efectivo" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white/80"
                  >
                    <span className="text-base">{m.icon}</span>
                    <span className="whitespace-nowrap">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-10 border-t border-white/15 pt-6">
            <p className="text-xs text-white/50 text-center sm:text-left">
              © {new Date().getFullYear()} Le Fragrance Club. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
