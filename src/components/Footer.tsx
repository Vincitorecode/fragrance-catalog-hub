const BRAND = "Le Fragrance Club";

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
      {/* ✅ SECCIÓN 1: SOLO TÍTULO (franja alta) */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <h2 className="uppercase font-extrabold tracking-wide leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            LE FRAGRANCE
            <br />
            CLUB
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/80">
            Decants y perfumes para hombre y mujer.
          </p>
        </div>
      </section>

      {/* ✅ Separador */}
      <div className="border-t border-white/15" />

      {/* ✅ SECCIÓN 2: SOLO INFORMACIÓN (franja alta) */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            {/* Redes */}
            <div>
              <h3 className="text-xl font-semibold">Redes sociales</h3>
              <ul className="mt-6 space-y-4 text-lg text-white/90">
                <li>
                  <a
                    className="hover:underline underline-offset-4"
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline underline-offset-4"
                    href={LINKS.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline underline-offset-4"
                    href={`mailto:${LINKS.email}`}
                  >
                    {LINKS.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xl font-semibold">Información de contacto</h3>
              <p className="mt-6 text-lg text-white/80">
                Atención y pedidos por WhatsApp.
              </p>

              <a
                href={waLink(LINKS.whatsappNumber, LINKS.whatsappText)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center rounded-2xl border border-white/25 px-6 py-3 text-lg font-semibold text-white hover:bg-white/10"
              >
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>

          {/* ✅ sección inferior (más “aire”) */}
          <div className="mt-12 border-t border-white/15 pt-8 text-base text-white/70">
            © {new Date().getFullYear()} Le Fragrance Club. Todos los derechos reservados.
          </div>
        </div>
      </section>
    </footer>
  );
}
