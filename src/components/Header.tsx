import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const location = useLocation();
  const isHome = location.pathname === "/";

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-white ${
      location.pathname === path ? "text-white" : "text-white/70"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003229]/95 backdrop-blur-sm text-white border-b border-white/15">
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
        <div className="grid grid-cols-3 items-center sm:flex sm:items-center sm:justify-between">
          {/* Left spacer (solo mobile) */}
          <div className="sm:hidden" />

          {/* Logo */}
          <Link
            to="/"
            className="flex justify-center sm:justify-start col-start-2 sm:col-auto"
          >
            <img
              src="/logo.png"
              alt="Le Fragrance Club"
              className="h-12 sm:h-14 md:h-20 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 md:gap-8">
            {!isHome && (
              <>
                <Link to="/hombre" className={navLinkClass("/hombre")}>
                  Hombre
                </Link>
                <Link to="/mujer" className={navLinkClass("/mujer")}>
                  Mujer
                </Link>
              </>
            )}

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-white/70 hover:text-white"
            >
              Contacto
            </a>

            {/* Cart Button */}
            <CartButton className="text-white hover:bg-white/10" />
          </nav>

          {/* Mobile: cart + menu */}
          <div className="flex justify-end items-center gap-1 sm:hidden">
            <CartButton className="text-white hover:bg-white/10" />
            
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
