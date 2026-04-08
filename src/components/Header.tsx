import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";

const WHATSAPP_NUMBER = "5214435113228";

const Header = () => {
  const { itemCount, openCart } = useCart();
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
              <span className="font-brandon font-regular text-[14px] leading-[1] tracking-[0] hidden sm:inline">Menú</span>
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[320px]">
            <SheetHeader>
              <SheetTitle className="font-brandon font-medium text-[16px] leading-[1] tracking-[0] text-[#013220]">
                Menú
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                to="/hombre"
                className="block rounded-lg px-3 py-2 font-brandon font-medium text-[14px] leading-[1] tracking-[0] text-[#013220] transition-all duration-200 hover:bg-[#013220] hover:text-white"
              >
                Hombre
              </Link>

              <Link
                to="/mujer"
                className="block rounded-lg px-3 py-2 font-brandon font-medium text-[14px] leading-[1] tracking-[0] text-[#013220] transition-all duration-200 hover:bg-[#013220] hover:text-white"
              >
                Mujer
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-2 font-brandon font-medium text-[14px] leading-[1] tracking-[0] text-[#013220] transition-all duration-200 hover:bg-[#013220] hover:text-white"
              >
                Contacto (WhatsApp)
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* RIGHT: pegado al borde de la pantalla */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={openCart}
          className="relative flex items-center justify-center transition-all duration-200 hover:opacity-80 hover:scale-105"
        >
          <img
            src="/icons/bac.png"
            alt="Carrito"
            className="h-7 w-7 filter brightness-150"
          />
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#B7E4C3] text-[9px] font-bold text-[#013220] shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          )}
        </button>
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