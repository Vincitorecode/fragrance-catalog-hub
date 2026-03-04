import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartButton from "@/components/cart/CartButton";

const WHATSAPP_NUMBER = "5214435113228";

const Header = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#013220] text-white relative pt-[env(safe-area-inset-top)]">
      {/* LEFT: pegado al borde de la pantalla */}
      <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
              <span className="text-sm font-medium hidden sm:inline">Menú</span>
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[320px]">
            <SheetHeader>
              <SheetTitle>Menú</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                to="/hombre"
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                Hombre
              </Link>
              <Link
                to="/mujer"
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                Mujer
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                Contacto (WhatsApp)
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* RIGHT: pegado al borde de la pantalla */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10">
        <CartButton className="text-white hover:bg-white/10" />
      </div>

      {/* CENTER: contenido centrado con max width */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-[72px] sm:h-[80px]">
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/logo.svg"
              alt="Le Fragrance Club"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain invert brightness-0"
              loading="eager"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;