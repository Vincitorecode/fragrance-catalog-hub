import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003229]/95 backdrop-blur-sm text-white border-b border-white/15">
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">

        {/* 
          - mobile: columna, centrado
          - sm+: fila, logo izquierda y nav derecha
        */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          {/* Logo */}
          <Link
            to="/"
            className="
              flex items-center justify-center
              w-full
              sm:w-auto sm:justify-start
            "
          >
            <img
              src="/logo.png"
              alt="Le Fragrance Club"
              className="h-12 sm:h-14 md:h-20 w-auto object-contain"
              loading="eager"
            />

            {/* Texto solo en web (sm+) */}
            <span
              className="
                hidden sm:inline-block
                ml-5
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
            <nav
              className="
                flex items-center gap-6
                sm:gap-8
                w-full justify-center
                sm:w-auto sm:justify-end
              "
            >
              <Link
                to="/hombre"
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === "/hombre" ? "text-white" : "text-white/70"
                }`}
              >
                Hombre
              </Link>

              <Link
                to="/mujer"
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === "/mujer" ? "text-white" : "text-white/70"
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
