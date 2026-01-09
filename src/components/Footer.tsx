const LINKS = {
  instagram: "https://instagram.com/TU_USUARIO",
  facebook: "https://facebook.com/TU_PAGINA",
  email: "hola@lefragrance.club",
  whatsappNumber: "52XXXXXXXXXX",
  whatsappText: "Hola, me gustaría información sobre sus decants/perfumes.",
};

function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#003229] text-white">
      {/* SECCIÓN 1 · TÍTULO (más compacto) */}
      <section className="w-full">
        <div className="mx-auto max-w-[1600px] px-6 py-14 md:py-16">
          <h2
  className="
    font-grande
    mx-auto text-center uppercase tracking-tight
    leading-[0.9]
    text-[clamp(4.5rem,14vw,11rem)]
  "
>
  LE FRAGRANCE
  <br />
  CLUB
</h2>


        </div>
      </section>

      <div className="border-t border-white/15" />

      {/* SECCIÓN 2 · INFO (más compacta) */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
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
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-80"
                        >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.25-.88a.88.88 0 1 1 0 1.75a.88.88 0 0 1 0-1.75Z"/>
                        </svg>
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
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-80"
                        >
                        <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.5V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84c1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12Z"/>
                        </svg>
                        Facebook
                    </a>
                    </li>

                    {/* Email */}
                    <li>
                    <a
                        className="inline-flex items-center gap-3 hover:text-white transition-colors"
                        href={`mailto:${LINKS.email}`}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="opacity-80"
                        >
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 7.2L4.8 6.75A.75.75 0 0 0 4 7.38v9.87c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V7.38a.75.75 0 0 0-.8-.63L12 11.2Z"/>
                        </svg>
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
                    {/* Icono WhatsApp */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path d="M20.52 3.48A11.77 11.77 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6a11.96 11.96 0 0 0 5.88 1.5h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.51-8.42Z"/>
                    </svg>

                    Contáctanos por WhatsApp
                </a>
                </div>

          </div>

          {/* Bottom mini */}
          <div className="mt-10 border-t border-white/15 pt-6 text-sm text-white/70 text-center">
            © {new Date().getFullYear()} Le Fragrance Club. Todos los derechos reservados.
          </div>
        </div>
      </section>
    </footer>
  );
}
