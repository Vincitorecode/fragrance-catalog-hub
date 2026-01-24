import { SiVisa, SiMercadopago } from "react-icons/si";
import { FaBuildingColumns } from "react-icons/fa6";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const LINKS = {
  instagram: "https://www.instagram.com/lefragranceclub/",
  facebook: "https://www.facebook.com/LeFragranceClub/",
  email: "lefragranceclubcontact@gmail.com",
  whatsappNumber: "5214435113228",
  whatsappText: "Hola, me gustaría información sobre sus decants/perfumes.",
};

function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#003229] text-white">
      {/* SECCIÓN 1 · TÍTULO */}
      <section className="w-full">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-14 md:py-16">
          <div className="flex justify-center">
            <h2
              className="
                font-grande
                text-center uppercase
                leading-[0.82]
                tracking-[-0.05em]
                text-[clamp(2.2rem,9vw,11rem)]
                max-w-[14ch]
                sm:max-w-none
                whitespace-normal
                sm:whitespace-nowrap
              "
            >
              LE FRAGRANCE CLUB
            </h2>
          </div>
        </div>
      </section>

      <div className="border-t border-white/15" />

      {/* SECCIÓN 2 · INFO */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-7 sm:py-8 md:py-10">
          {/* Top cards */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Contacto */}
            <div className="relative rounded-2xl border border-white/20 bg-white/5 p-6 transition-all duration-300 hover:border-white/40">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-2">
                Contacto
              </p>

              <p className="text-lg font-semibold text-white mb-3">
                Atención personalizada
              </p>

              <p className="text-base text-white/80 mb-5">
                Asesoría directa y pedidos vía WhatsApp.
              </p>

              <a
                href={waLink(LINKS.whatsappNumber, LINKS.whatsappText)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#003229] px-6 py-3 text-base font-semibold transition-all duration-200 hover:bg-white/90"
              >
                Contáctanos por WhatsApp
              </a>
            </div>

            {/* Métodos de pago */}
            <div className="relative rounded-2xl border border-white/15 p-6 transition-all duration-300 hover:border-white/30">
              <p className="text-xs uppercase tracking-widest text-white/70 mb-4">
                Métodos de pago
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm text-white/90">
                {/* Visa */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 min-h-[44px]">
                  <span className="flex w-6 justify-center">
                    <SiVisa className="text-xl text-white" />
                  </span>
                  <span className="text-white/70 whitespace-nowrap">
                    Crédito / Débito
                  </span>
                </div>

                {/* Transferencia */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 min-h-[44px]">
                  <span className="flex w-6 justify-center">
                    <FaBuildingColumns className="text-xl text-white" />
                  </span>
                  <span className="whitespace-nowrap">Transferencia</span>
                </div>

                {/* Mercado Pago */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 min-h-[44px]">
                  <span className="flex w-6 justify-center">
                    <SiMercadopago className="text-xl text-white" />
                  </span>
                  <span className="text-white/70 whitespace-nowrap">
                    Mercado Pago
                  </span>
                </div>

                {/* Efectivo */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 min-h-[44px]">
                  <span className="flex w-6 justify-center text-lg">💵</span>
                  <span className="text-white/70 whitespace-nowrap">
                    Efectivo
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/60">
                * Pagos confirmados antes de preparar el envío.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 sm:mt-10 border-t border-white/15 pt-5 sm:pt-6">
            <div
              className="
                flex flex-col items-center justify-center gap-3
                sm:flex-row sm:flex-wrap
                text-xs sm:text-sm text-white/70
                text-center
              "
            >
              {/* Derechos */}
              <span className="text-white/70">
                © {new Date().getFullYear()} Le Fragrance Club. Todos los derechos reservados.
              </span>

              {/* Separador (solo desktop) */}
              <span className="hidden sm:inline mx-2 text-white/30">|</span>

              {/* Instagram */}
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <SiInstagram className="text-base text-white" />
                <span>Instagram</span>
              </a>

              <span className="hidden sm:inline text-white/30">|</span>

              {/* Facebook */}
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <SiFacebook className="text-base text-white" />
                <span>Facebook</span>
              </a>

              <span className="hidden sm:inline text-white/30">|</span>

              {/* Email */}
              <a
                href={`mailto:${LINKS.email}`}
                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors break-all sm:break-normal"
              >
                <HiOutlineMail className="text-base text-white" />
                <span className="break-all sm:break-normal">{LINKS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
