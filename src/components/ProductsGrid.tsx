import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export default function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div
      className="
        grid grid-cols-2
        gap-3 sm:gap-4 md:gap-6 lg:gap-8
      "
    >
      {products.map((p) => (
        <ProductCard key={p.id ?? `${p.brand}-${p.name}`} product={p} />
      ))}
    </div>
  );
}
