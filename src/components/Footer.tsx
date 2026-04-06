import { SiWhatsapp } from "react-icons/si";
import { CreditCard, ArrowRightLeft, Wallet, Banknote } from "lucide-react";
import { Instagram, Facebook, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "5214435113228";
const WHATSAPP_TEXT = "Hola, me gustaría información sobre sus decants/perfumes.";

function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#013220] text-white">
      {/* Big editorial title */}
      <section className="py-6 sm:py-12 md:py-14">
        <div className="border-b border-white/15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-scotch font-light text-center uppercase leading-none tracking-[0] text-[clamp(1.8rem,8vw,5rem)] text-white/90 pb-4">
              LE FRAGRANCE CLUB
            </h2>
          </div>
        </div>
      </section>
      {/* Cards section */}
      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Atención personalizada */}
            <div className="rounded-2xl border border-white/20 bg-transparent p-5 sm:p-8 text-center">
              <h3 className="font-brandon font-semibold text-[16px] sm:text-[20px] leading-[1] tracking-[0] text-center uppercase mb-4 sm:mb-6 text-white/90">
                ATENCIÓN PERSONALIZADA
              </h3>

              <p className="font-brandon font-normal text-[14px] sm:text-[16px] leading-[1] tracking-[0] text-center text-white/90 mb-6 sm:mb-10">
                Asesoría directa y pedidos vía WhatsApp.
              </p>

              {/* botón como screenshot: pill sobrio, verde más claro, sin glow */}
              <a
                href={waLink(WHATSAPP_NUMBER, WHATSAPP_TEXT)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[50px] border-2 border-[#50C878] bg-[rgba(80,200,120,0.60)] px-7 py-3 font-brandon font-medium text-[16px] leading-[1] tracking-[0] text-white transition-all duration-300 hover:bg-[rgba(80,200,120,0.75)]"
              >
                <SiWhatsapp className="text-lg" />
                Contáctanos
              </a>
            </div>

            {/* Métodos de pago */}
            <div className="rounded-2xl border border-white/20 bg-transparent p-8">
              <h3 className="font-brandon font-semibold text-[20px] leading-[1] tracking-[0] text-center uppercase mb-6 text-white/90">
                MÉTODOS DE PAGO
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: CreditCard, label: "Crédito / Débito" },
                  { icon: "transferencia", label: "Transferencia" },
                  { icon: Wallet, label: "Mercado Pago" },
                  { icon: "efectivo", label: "Efectivo" },
                ].map((m) => {
                  const Icon = m.icon;

                  return (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 rounded-full border border-white/20 bg-[#0b3a2b] px-4 py-2.5 text-sm"
                    >
                      <div className="flex items-center justify-center">
                        {m.label === "Mercado Pago" ? (
                          <img
                            src="/icons/mercado_pago.svg"
                            alt="Mercado Pago"
                            className="h-6 w-6"
                          />
                        ) : m.icon === "transferencia" ? (
                          <img
                            src="/icons/Frame.svg"
                            alt="Transferencia"
                            className="h-5 w-5"
                          />
                        ) : m.icon === "efectivo" ? (
                          <img
                            src="/icons/Frame.png"
                            alt="Efectivo"
                            className="h-5 w-5"
                          />
                        ) : (
                          <m.icon
                            className="h-5 w-5 text-white"
                            strokeWidth={1.8}
                          />
                        )}
                      </div>

                      <span className="font-brandon font-normal text-[14px] leading-[1] tracking-[0] whitespace-nowrap text-white/85">
                        {m.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-10 border-t border-white/15 pt-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Left - Copyright */}
              <p className="font-brandon font-medium text-[14px] leading-[1] tracking-[0] text-white/80 text-center sm:text-left">
                © {new Date().getFullYear()} Le Fragrance Club. Todos los derechos reservados.
              </p>

              {/* Center - Social Icons */}
              <div className="flex items-center gap-6">
                <a href="#">
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    className="h-6 w-6"
                  />
                </a>

                <a href="#">
                  <img
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    className="h-6 w-6"
                  />
                </a>
              </div>

              {/* Right - Email */}
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="h-4 w-4 text-white/80" strokeWidth={1.5} />
                <span className="font-brandon font-medium text-[14px] leading-[1] tracking-[0] text-white/80">
                  lefragranceclubcontact@gmail.com
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}