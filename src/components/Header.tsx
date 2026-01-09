import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003229]/95 backdrop-blur-sm text-white border-b border-white/15">

      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-white">
            Le Fragrance Club
          </span>
          <span className="text-white/70 font-medium">| Decants</span>
        </Link>

        {!isHome && (
          <nav className="flex items-center gap-6">
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
