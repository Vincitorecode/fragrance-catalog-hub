export interface Product {
  id: string;
  gender: "hombre" | "mujer" | "unisex";
  brand: string;
  name: string;
  category: string;

  // Si hoy lo usas, lo dejamos obligatorio.
  // Si tu nuevo JSON aún no trae aroma, cambia a: aroma?: string;
  aroma?: string;

  // Tu "Desde..." (normalmente 2ml)
  priceFrom: number;

  // NUEVO: precios por ml (para mostrar en la card)
  prices?: {
    "2ml": number;
    "5ml": number;
    "10ml": number;
  };

  // Opcional útil para "Disponible / Nuevo lanzamiento"
  availability?: string;

  originalPriceFrom: number | null;
  onSale: boolean;

  // Si aún no tienes ratings reales, te recomiendo hacerlos opcionales
  // para no estar forzando 0 siempre.
  rating?: number;
  ratingCount?: number;

  image: string;
}
