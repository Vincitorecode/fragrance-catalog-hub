import { Star } from "lucide-react";
import { Product } from "@/types/product";
import { WHATSAPP_NUMBER, CURRENCY } from "@/config";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    brand,
    name,
    category,
    priceFrom,
    originalPriceFrom,
    onSale,
    rating,
    ratingCount,
    image,
  } = product;

  const handleBuyClick = () => {
    const message = encodeURIComponent(
      `Hola, me interesa: ${brand} ${name} - $${priceFrom} ${CURRENCY}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const hasDiscount = onSale && originalPriceFrom && originalPriceFrom > priceFrom;

  return (
    <article className="group relative flex flex-col rounded-xl bg-card border border-border overflow-hidden card-hover animate-fade-in">
      {/* Sale Badge */}
      {onSale && (
        <div className="absolute top-3 left-3 z-10 badge-sale">
          Oferta
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square product-image-bg flex items-center justify-center p-6 overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Category & Brand */}
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
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
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

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPriceFrom} {CURRENCY}
            </span>
          )}
          <span className="text-lg font-semibold text-foreground">
            Desde ${priceFrom} {CURRENCY}
          </span>
        </div>

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
