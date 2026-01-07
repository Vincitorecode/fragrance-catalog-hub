export interface Product {
  id: string;
  gender: "hombre" | "mujer" | "unisex";
  brand: string;
  name: string;
  category: string;
  aroma: string;
  priceFrom: number;
  originalPriceFrom: number | null;
  onSale: boolean;
  rating: number;
  ratingCount: number;
  image: string;
}
