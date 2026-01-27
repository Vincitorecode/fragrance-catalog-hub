import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface CartButtonProps {
  className?: string;
}

const CartButton = ({ className }: CartButtonProps) => {
  const { openCart, itemCount } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={openCart}
      aria-label={`Carrito (${itemCount} items)`}
    >
      <div className="relative">
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </div>
    </Button>
  );
};

export default CartButton;
