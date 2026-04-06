import { useMemo, useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types/product";
import { CURRENCY } from "@/config";
import { Button } from "@/components/ui/button";
import { useCart, MlSize } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

type MlOption = "2ml" | "5ml" | "10ml";
const ML_OPTIONS: MlOption[] = ["2ml", "5ml", "10ml"];

const formatMlLabel = (ml: MlOption) =>
  ml === "2ml" ? "2 ML" : ml === "5ml" ? "5 ML" : "10 ML";

/** Maps every known raw category value to the label shown in the green badge. */
const CATEGORY_LABEL_MAP: Record<string, string> = {
  Nicho: "NICHO",
  Designer: "DISEÑADOR",
  "Diseñador": "DISEÑADOR",
  "Árabe": "ÁRABE",
  Arabe: "ÁRABE",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    brand,
    name,
    category,
    priceFrom,
    originalPriceFrom,
    onSale,
    image,
    prices,
  } = product;

  const { addItem } = useCart();
  const [selectedMl, setSelectedMl] = useState<MlOption | null>(null);
  const [justAdded, setJustAdded] = useState(false);

  const hasMlPrices = Boolean(
    prices?.["2ml"] && prices?.["5ml"] && prices?.["10ml"]
  );

  const selectedPrice = useMemo(() => {
    if (!hasMlPrices || !selectedMl) return null;
    return prices![selectedMl];
  }, [hasMlPrices, prices, selectedMl]);

  const displayPrice = selectedPrice ?? priceFrom;
  const hasDiscount =
    onSale && originalPriceFrom && originalPriceFrom > priceFrom;

  const handleAddToCart = () => {
    if (hasMlPrices && !selectedMl) return;

    const size: MlSize = selectedMl || "5ml";
    addItem(product, size);

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const showButton = !hasMlPrices || selectedMl !== null;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[18px] sm:rounded-[20px] md:rounded-[22px] border border-[#ECE7E1] bg-[#F5F3F0] shadow-[0_1px_6px_rgba(0,0,0,0.02)]">
      {onSale && (
        <div className="absolute left-2 top-2 z-10 text-[10px] sm:left-3 sm:top-3 sm:text-xs badge-sale">
          Oferta
        </div>
      )}

      {/* Image Container with hover zoom */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F3F0]">
        <img
          src={image}
          alt={`${brand} ${name}`}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-2.5 sm:p-4 md:p-5">
        {/* Brand + Category */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="font-brandon min-w-0 truncate text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em] text-[#7D7872]">
            {brand}
          </span>

          {CATEGORY_LABEL_MAP[category] && (
            <span className="font-brandon shrink-0 rounded-full bg-[#B7E4C3] px-2.5 py-1 text-[9px] sm:px-3 sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.06em] text-[#0B4D36]">
              {CATEGORY_LABEL_MAP[category]}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="mb-2 sm:mb-3 min-h-[2rem] sm:min-h-[2.8rem] md:min-h-[3rem] line-clamp-2 font-brandon text-[15px] sm:text-[21px] font-semibold leading-[110%] tracking-[0.01em] text-[#0B0B0B]">
          {name}
        </h3>

        {/* Size title */}
        {hasMlPrices && (
          <p className="font-brandon mb-2 text-center text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.08em] text-[#7D7872]">
            Elige un tamaño
          </p>
        )}

        {/* ML Selector — compact */}
        {hasMlPrices && (
          <div className="mb-2 sm:mb-3 grid grid-cols-3 gap-1 sm:gap-2">
            {ML_OPTIONS.map((ml) => {
              const active = ml === selectedMl;
              const isFavorite = ml === "5ml";

              return (
                <button
                  key={ml}
                  type="button"
                  onClick={(e) => {
                    setSelectedMl(ml);
                    (e.currentTarget as HTMLButtonElement).blur();
                  }}
                  className={[
                    "font-brandon relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border px-1 py-2 sm:px-1.5 sm:py-2.5 md:px-2 md:py-3 transition-all",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003229]/20",
                    active
                      ? "border-[#58C878] bg-[#CFE8D7]"
                      : "border-[#C8C2BB] bg-transparent hover:border-[#58C878]/50",
                  ].join(" ")}
                >
                  {isFavorite && (
                    <span className="font-brandon absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#003F2D] px-2 py-0.5 text-[8px] sm:px-2.5 sm:text-[9px] md:px-3 md:text-[10px] font-medium text-white">
                      FAV 🔥
                    </span>
                  )}

                  <div className="flex min-h-[52px] sm:min-h-[58px] md:min-h-[68px] flex-col items-center justify-center leading-tight">
                    <span
                      className={[
                        "font-brandon mb-1.5 text-[9px] sm:text-[10px] md:text-[12px] font-medium uppercase",
                        active ? "text-[#62816F]" : "text-[#7A7A7A]",
                      ].join(" ")}
                    >
                      {formatMlLabel(ml)}
                    </span>

                    <span
                      className={[
                        "font-brandon text-[16px] sm:text-[18px] md:text-[22px] font-semibold leading-none",
                        active ? "text-[#003F2D]" : "text-[#0B0B0B]",
                      ].join(" ")}
                    >
                      ${prices![ml]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Price fallback */}
        {!hasMlPrices && (
          <div className="mb-4 flex flex-wrap items-baseline gap-2">
            {hasDiscount && (
              <span className="font-brandon text-xs sm:text-sm text-muted-foreground line-through">
                ${originalPriceFrom} {CURRENCY}
              </span>
            )}
            <span className="font-brandon text-sm sm:text-base md:text-lg font-semibold text-foreground">
              Desde ${displayPrice} {CURRENCY}
            </span>
          </div>
        )}

        {/* Add to Cart Button — appears after ML selection */}
        <div
          className={`mt-auto overflow-hidden transition-all duration-300 ease-out ${showButton
            ? "max-h-16 opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <Button
            onClick={handleAddToCart}
            className={`font-brandon font-medium h-10 w-full rounded-full px-4 text-[12px] sm:h-11 sm:text-[13px] md:h-12 md:text-sm gap-2 transition-all ${justAdded
              ? "bg-[#0D6B47] text-white hover:bg-[#0D6B47]"
              : "bg-[#013220] text-white hover:bg-[#02422c]"
              }`}
            size="lg"
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                ¡Agregado!
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                <span className="truncate">Agregar al carrito</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
