import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import { Product } from "@/types/product";
import { WHATSAPP_NUMBER, CURRENCY } from "@/config";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

/**
 * Imagen informativa que aparece al hacer hover (desktop)
 * Guardada en: public/images/decant-info.jpg
 */
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

  // Selector de ml (por defecto 2ml si existe, si no, null)
  const [selectedMl, setSelectedMl] = useState<MlOption>("2ml");

  const hasMlPrices = Boolean(
    prices?.["2ml"] && prices?.["5ml"] && prices?.["10ml"]
  );

  const selectedPrice = useMemo(() => {
    if (!hasMlPrices) return null;
    return prices![selectedMl];
  }, [hasMlPrices, prices, selectedMl]);

  const displayPrice = selectedPrice ?? priceFrom;

  const hasDiscount =
    onSale && originalPriceFrom && originalPriceFrom > priceFrom;

  

  const handleBuyClick = () => {
  const mlLabel = hasMlPrices ? formatMlLabel(selectedMl) : null;
  const finalPrice = hasMlPrices ? prices![selectedMl] : priceFrom;

  const message = encodeURIComponent(
    [
      "Hola",
      `Me interesa: ${brand} ${name}`,
      mlLabel ? `Tamaño: ${mlLabel}` : null,
      `Precio: $${finalPrice} ${CURRENCY}`,
      "",
      "¿Lo tienes disponible?",
    ]
      .filter(Boolean)
      .join("\n")
  );

  const phone = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};



  return (
    <article className="group relative flex flex-col rounded-xl bg-card border border-border overflow-hidden card-hover animate-fade-in">
      {/* Sale Badge */}
      {onSale && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 badge-sale text-xs sm:text-sm">
          Oferta
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square product-image-bg flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Imagen principal */}
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="
            absolute inset-0 w-full h-full object-contain
            transition-opacity duration-500
            sm:group-hover:opacity-0
          "
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />

        {/* Imagen hover (solo desktop/>=sm) */}
        <img
          src={DECANT_INFO_IMAGE}
          alt="Información del decant"
          className="
            absolute inset-0 w-full h-full object-contain
            opacity-0 transition-opacity duration-500
            sm:group-hover:opacity-100
          "
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3 sm:p-4">
        {/* Brand + Category */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {brand}
          </span>
          {category === "Nicho" && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Nicho
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating (solo si hay rating real) */}
        {rating > 0 && ratingCount > 0 && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(rating)
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {rating.toFixed(1)} ({ratingCount})
              </span>
            </div>

            <span className="text-xs text-muted-foreground">
              {category === "Nicho" ? "Niche" : "Selección"}
            </span>
          </div>
        )}

        {/* Price (dinámico por ml si existe) */}
        <div className="flex items-baseline gap-2 mb-3">
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPriceFrom} {CURRENCY}
            </span>
          )}

          <span className="text-base sm:text-lg font-semibold text-foreground">
            {hasMlPrices ? (
              <>
                {formatMlLabel(selectedMl)}: ${displayPrice} {CURRENCY}
              </>
            ) : (
              <>
                Desde ${displayPrice} {CURRENCY}
              </>
            )}
          </span>
        </div>

        {/* Selector de ML (chips) */}
        {hasMlPrices && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">Elige tamaño</p>

            <div className="grid grid-cols-3 gap-2">
              {ML_OPTIONS.map((ml) => {
                const active = ml === selectedMl;
                return (
                  <button
                        type="button"
                        onClick={() => setSelectedMl(ml)}
                        className={[
                        "relative rounded-lg border px-3 py-2 text-sm font-semibold transition-all",
                        "focus:outline-none focus:ring-2",

                        // Focus ring: verde solo en 5ml activo, si no amarillo
                        ml === "5ml" && active ? "focus:ring-[#003229]/40" : "focus:ring-primary/40",

                        // Estados:
                        ml === "5ml" && active
                          ? "border-[#003229] bg-background text-foreground"
                          : active
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background/60 text-muted-foreground hover:border-primary/50",
                      ].join(" ")}
                      >


                                          <div
                        className={`
                          relative flex flex-col items-center leading-tight
                          ${ml === "5ml" && active ? "before:content-['Favorito·🔥']" : "before:content-none"}

                          before:absolute
                          before:-top-3.5
                          before:left-1/2
                          before:-translate-x-1/2
                          before:rounded-full
                          before:bg-[#003229]
                          before:px-1.5
                          before:py-[1px]
                          before:text-[9px]
                          before:font-medium
                          before:text-white
                          before:leading-none
                          before:whitespace-nowrap
                        `}
                      >
                        <span className="mt-1">{formatMlLabel(ml)}</span>

                        <span className="text-foreground">
                          ${prices![ml]}
                        </span>
                      </div>



                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Buy Button */}
        <Button
          onClick={handleBuyClick}
          className="mt-auto w-full btn-primary"
          size="lg"
        >
          Comprar
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
