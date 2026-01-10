import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003229]/95 backdrop-blur-sm text-white border-b border-white/15">
      <div className="container py-3 sm:py-4">
        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo + Decants */}
          <Link to="/" className="flex items-center gap-3 sm:gap-5">
            <img
              src="/logo.png"
              alt="Le Fragrance Club"
              className="h-12 sm:h-14 md:h-20 w-auto object-contain"
              loading="eager"
            />

            <span
              className="
                text-[#EABB33]/90
                font-normal
                text-2xl sm:text-3xl md:text-4xl
                leading-none
                whitespace-nowrap
              "
            >
              | Decants
            </span>
          </Link>

          {/* Nav */}
          {!isHome && (
            <nav className="flex items-center gap-6 sm:gap-8">
              <Link
                to="/hombre"
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === "/hombre"
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                Hombre
              </Link>

              <Link
                to="/mujer"
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === "/mujer"
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                Mujer
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
