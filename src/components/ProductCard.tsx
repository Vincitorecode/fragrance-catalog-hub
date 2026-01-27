import { useMemo, useState } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/types/product";
import { CURRENCY } from "@/config";
import { Button } from "@/components/ui/button";
import { useCart, MlSize } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const DECANT_INFO_IMAGE = "/images/decant-info.jpg";

type MlOption = "2ml" | "5ml" | "10ml";
const ML_OPTIONS: MlOption[] = ["2ml", "5ml", "10ml"];

const formatMlLabel = (ml: MlOption) =>
  ml === "2ml" ? "2 ml" : ml === "5ml" ? "5 ml" : "10 ml";

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    brand,
    name,
    category,
    priceFrom,
    originalPriceFrom,
    onSale,
    rating = 0,
    ratingCount = 0,
    image,
    prices,
  } = product;

  const { addItem } = useCart();
  const [selectedMl, setSelectedMl] = useState<MlOption | null>(null);
  const [justAdded, setJustAdded] = useState(false);

  const hasMlPrices = Boolean(prices?.["2ml"] && prices?.["5ml"] && prices?.["10ml"]);

  const selectedPrice = useMemo(() => {
    if (!hasMlPrices || !selectedMl) return null;
    return prices![selectedMl];
  }, [hasMlPrices, prices, selectedMl]);

  const displayPrice = selectedPrice ?? priceFrom;
  const hasDiscount = onSale && originalPriceFrom && originalPriceFrom > priceFrom;

  const handleAddToCart = () => {
    if (hasMlPrices && !selectedMl) return;

    const size: MlSize = selectedMl || "5ml";
    addItem(product, size);
    
    // Show feedback
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <article className="group relative flex flex-col rounded-xl bg-card border border-border overflow-hidden card-hover animate-fade-in">
      {/* Sale Badge */}
      {onSale && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 badge-sale text-[10px] sm:text-sm">
          Oferta
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square product-image-bg flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 sm:group-hover:opacity-0"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        <img
          src={DECANT_INFO_IMAGE}
          alt="Información del decant"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 sm:group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3 sm:p-4">
        {/* Brand + Category */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {brand}
          </span>
          {category === "Nicho" && (
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Nicho
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.25rem] sm:min-h-[2.75rem]">
          {name}
        </h3>

        {/* Rating */}
        {rating > 0 && ratingCount > 0 && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < Math.floor(rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {rating.toFixed(1)} ({ratingCount})
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              {category === "Nicho" ? "Niche" : "Selección"}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          {hasDiscount && (
            <span className="text-xs sm:text-sm text-muted-foreground line-through">
              ${originalPriceFrom} {CURRENCY}
            </span>
          )}
          <span className="text-sm sm:text-lg font-semibold text-foreground">
            {hasMlPrices ? (
              selectedMl ? (
                <>
                  {formatMlLabel(selectedMl)}: ${displayPrice} {CURRENCY}
                </>
              ) : (
                <>Selecciona un tamaño</>
              )
            ) : (
              <>Desde ${displayPrice} {CURRENCY}</>
            )}
          </span>
        </div>

        {/* ML Selector */}
        {hasMlPrices && (
          <div className="mb-3 sm:mb-4">
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-2">
              Elige tamaño
            </p>
            <div className="grid grid-cols-3 gap-2">
              {ML_OPTIONS.map((ml) => {
                const active = ml === selectedMl;
                return (
                  <button
                    key={ml}
                    type="button"
                    onClick={(e) => {
                      setSelectedMl((prev) => (prev === ml ? null : ml));
                      (e.currentTarget as HTMLButtonElement).blur();
                    }}
                    className={[
                      "relative rounded-lg border px-3 py-2 text-sm font-semibold transition-all",
                      "focus:outline-none focus-visible:ring-2",
                      ml === "5ml" && active
                        ? "focus-visible:ring-[#003229]/40"
                        : "focus-visible:ring-primary/40",
                      ml === "5ml" && active
                        ? "border-[#003229] bg-[#003229]/10 text-foreground"
                        : active
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-transparent bg-background/60 text-muted-foreground hover:border-primary/50",
                    ].join(" ")}
                  >
                    <div
                      className={`
                        relative flex flex-col items-center leading-tight
                        ${ml === "5ml" ? "before:content-['Favorito🔥']" : "before:content-none"}
                        before:absolute before:-top-2 sm:before:-top-3
                        before:left-1/2 before:-translate-x-1/2
                        before:rounded-full before:bg-[#003229]
                        before:px-1 sm:before:px-1.5 before:py-[1px]
                        before:text-[8px] sm:before:text-[9px]
                        before:font-medium before:text-white
                        before:leading-none before:whitespace-nowrap
                      `}
                    >
                      <span className="mt-1 whitespace-nowrap text-[11px] sm:text-sm">
                        {formatMlLabel(ml)}
                      </span>
                      <span className="text-foreground whitespace-nowrap text-[11px] sm:text-sm">
                        ${prices![ml]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={hasMlPrices && !selectedMl}
          className={`mt-auto w-full gap-2 transition-all ${
            justAdded 
              ? "bg-green-600 hover:bg-green-600" 
              : "btn-primary"
          }`}
          size="lg"
        >
          {justAdded ? (
            <>
              <Check className="h-4 w-4" />
              ¡Agregado!
            </>
          ) : hasMlPrices && !selectedMl ? (
            "Elige un tamaño"
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Agregar
            </>
          )}
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
