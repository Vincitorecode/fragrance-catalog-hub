import { useIsMobile } from "@/hooks/use-mobile";
import CartDrawer from "./CartDrawer";
import CartBottomSheet from "./CartBottomSheet";

/**
 * Smart Cart component that renders:
 * - Desktop: Right-side drawer (Sheet)
 * - Mobile: Bottom sheet (Drawer from vaul)
 */
const Cart = () => {
  const isMobile = useIsMobile();

  return isMobile ? <CartBottomSheet /> : <CartDrawer />;
};

export default Cart;
