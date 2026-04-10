import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart, MlSize } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { WHATSAPP_NUMBER, CURRENCY } from "@/config";

const formatMlLabel = (ml: MlSize) =>
  ml === "2ml" ? "2 ml" : ml === "5ml" ? "5 ml" : "10 ml";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart, total } = useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const itemLines = items.map(
      (item) =>
        `${item.quantity}x ${item.product.brand} – ${item.product.name} (${formatMlLabel(item.size)}) — $${item.unitPrice * item.quantity} ${CURRENCY}`
    );

    const message = [
      "🛒 *Pedido Le Fragrance Club*",
      "",
      ...itemLines,
      "",
      `*Total estimado:* $${total} ${CURRENCY}`,
      "",
      "Hola, me gustaría confirmar disponibilidad y tiempo de entrega.",
    ].join("\n");

    const phone = String(WHATSAPP_NUMBER).replace(/\D/g, "");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");

    clearCart();
    closeCart();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2 font-brandon">
              <ShoppingBag className="h-5 w-5" />
              Tu Carrito
            </SheetTitle>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
            <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground/30" />
            <p className="mb-2 text-muted-foreground">Tu carrito está vacío</p>
            <p className="text-sm text-muted-foreground/70">
              Explora nuestra colección y agrega tus fragancias favoritas
            </p>
            <Button variant="outline" className="mt-6" onClick={closeCart}>
              Seguir explorando
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto py-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-background">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.product.brand}
                    </p>

                    <p className="truncate text-sm font-medium">
                      {item.product.name}
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {formatMlLabel(item.size)} • ${item.unitPrice} {CURRENCY}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="w-6 text-center text-sm font-medium leading-7">
                          {item.quantity}
                        </span>

                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex h-7 items-center gap-2 shrink-0">
                        <span className="whitespace-nowrap text-sm font-semibold leading-none">
                          ${item.unitPrice * item.quantity}
                        </span>

                        <button
                          type="button"
                          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-destructive transition-colors hover:bg-destructive/10"
                          onClick={() => removeItem(item.productId, item.size)}
                          aria-label={`Eliminar ${item.product.name} del carrito`}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total estimado</span>
                <span className="text-xl font-bold">
                  ${total} {CURRENCY}
                </span>
              </div>

              <Button
                className="btn-primary w-full gap-2"
                size="lg"
                onClick={handleWhatsAppCheckout}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar pedido por WhatsApp
              </Button>

              <Button variant="ghost" className="w-full" onClick={closeCart}>
                Seguir explorando
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;