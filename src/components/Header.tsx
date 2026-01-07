import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold text-foreground">
            Le Fragrance Club
          </span>
          <span className="text-primary font-medium">| Decants</span>
        </Link>

        {!isHome && (
          <nav className="flex items-center gap-6">
            <Link
              to="/hombre"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/hombre"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Hombre
            </Link>
            <Link
              to="/mujer"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/mujer"
                  ? "text-primary"
                  : "text-muted-foreground"
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
