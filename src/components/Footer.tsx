import { 
  SiVisa, 
  SiMastercard, 
  SiAmericanexpress,
  SiPaypal,
  SiMercadopago 
} from "react-icons/si";
import { FaMoneyBillTransfer, FaBuildingColumns } from "react-icons/fa6";



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
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
  {/* Redes */}
  <div
    className="
      relative rounded-2xl border border-white/15
      p-6
      transition-all duration-300
      hover:border-white/30
    "
  >
    <p className="text-xs uppercase tracking-widest text-white/70 mb-4">
      Redes
    </p>

    <ul className="space-y-4 text-base text-white/90">
      {/* Instagram */}
      <li>
        <a
          className="inline-flex items-center gap-3 hover:text-white transition-colors"
          href={LINKS.instagram}
          target="_blank"
          rel="noreferrer"
        >
          {/* ... tu svg instagram ... */}
          Instagram
        </a>
      </li>

      {/* Facebook */}
      <li>
        <a
          className="inline-flex items-center gap-3 hover:text-white transition-colors"
          href={LINKS.facebook}
          target="_blank"
          rel="noreferrer"
        >
          {/* ... tu svg facebook ... */}
          Facebook
        </a>
      </li>

      {/* Email */}
      <li>
        <a
          className="inline-flex items-center gap-3 hover:text-white transition-colors"
          href={`mailto:${LINKS.email}`}
        >
          {/* ... tu svg email ... */}
          {LINKS.email}
        </a>
      </li>
    </ul>
  </div>

  {/* Contacto */}
  <div
    className="
      relative rounded-2xl border border-white/20
      bg-white/5 p-6
      transition-all duration-300
      hover:border-white/40
      hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_24px_rgba(255,255,255,0.15)]
    "
  >
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
      className="
        inline-flex items-center justify-center gap-2
        rounded-xl bg-white text-[#003229]
        px-6 py-3
        text-base font-semibold
        transition-all duration-200
        hover:bg-white/90
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]
      "
    >
      {/* ... tu svg whatsapp ... */}
      Contáctanos por WhatsApp
    </a>
  </div>

{/* Métodos de pago */}
<div
  className="
    relative rounded-2xl border border-white/15
    p-6
    transition-all duration-300
    hover:border-white/30
  "
>
  <p className="text-xs uppercase tracking-widest text-white/70 mb-4">
    Métodos de pago
  </p>

  <div className="grid grid-cols-2 gap-3 text-sm text-white/90">
    {/* Transferencia */}
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <FaBuildingColumns className="text-xl text-white" />
      <span>Transferencia</span>
    </div>

    {/* Mercado Pago */}
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <SiMercadopago className="text-xl text-white" />
      <span>Mercado Pago</span>
    </div>

    {/* Visa */}
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
        alt="Visa"
        className="w-8 brightness-0 invert"
      />
      <span className="text-white/70">Crédito/Débito</span>
    </div>

    {/* MasterCard */}
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
  <svg
    viewBox="0 0 48 32"
    className="h-5 w-auto"
    aria-label="MasterCard"
  >
    <circle cx="16" cy="16" r="10" fill="white" />
    <circle cx="28" cy="16" r="10" fill="white" fillOpacity="0.6" />
  </svg>

  <span className="text-white/70">MasterCard</span>
</div>


    {/* Amex */}
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 col-span-2">
      <SiAmericanexpress className="text-2xl text-white" />
      <span className="text-white/70">American Express</span>
    </div>
  </div>

  <p className="mt-4 text-xs text-white/60">
    * Pagos confirmados antes de preparar el envío.
  </p>
</div>

  
</div>

          {/* Bottom mini */}
          <div className="mt-8 sm:mt-10 border-t border-white/15 pt-5 sm:pt-6 text-xs sm:text-sm text-white/70 text-center">
            © {new Date().getFullYear()} Le Fragrance Club. Todos los derechos
            reservados.
          </div>
        </div>
      </section>
    </footer>
  );
}
