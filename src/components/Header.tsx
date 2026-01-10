import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003229]/95 backdrop-blur-sm text-white border-b border-white/15">
      {/* Header más alto */}
      <div className="container flex h-24 items-center justify-between">
        
        {/* Logo + Decants */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src="/logo.png"
            alt="Le Fragrance Club"
            className="h-16 md:h-18 w-auto object-contain"
            loading="eager"
          />

          <span
            className="
              text-[#EABB33]/90
              font-normal
              text-3xl
              md:text-4xl
              leading-none
            "
          >
            | Decants
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
