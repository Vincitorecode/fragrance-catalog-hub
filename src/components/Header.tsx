import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003229]/95 backdrop-blur-sm text-white border-b border-white/15">
      {/* ↑ Header un poco más alto */}
      <div className="container flex h-20 items-center justify-between">
        
        {/* Logo + Decants */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Le Fragrance Club"
            className="h-14 md:h-16 w-auto object-contain"
            loading="eager"
          />

          <span
            className="
              font-grande
              text-white/90
              text-2xl
              md:text-3xl
              leading-none
              tracking-tight
            "
          >
            Decants
          </span>
        </Link>

        {!isHome && (
          <nav className="flex items-center gap-8">
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
    </header>
  );
};

export default Header;
