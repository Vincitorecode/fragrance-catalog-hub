import { useState, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { PRODUCTS_PER_PAGE } from "@/config";
import productsData from "@/data/products.json";

const Catalog = () => {
  const { gender } = useParams<{ gender: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [brandFilter, setBrandFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  // Validate gender parameter
  if (gender !== "hombre" && gender !== "mujer") {
    return <Navigate to="/" replace />;
  }

  const products = productsData as Product[];

  // Get products for current gender (including unisex)
  const genderProducts = useMemo(() => {
    return products.filter((p) => p.gender === gender || p.gender === "unisex");
  }, [gender, products]);

  // Get unique brands for filter
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(genderProducts.map((p) => p.brand))];
    return uniqueBrands.sort();
  }, [genderProducts]);

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let result = [...genderProducts];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      );
    }

    // Brand filter
    if (brandFilter !== "all") {
      result = result.filter((p) => p.brand === brandFilter);
    }

    // Sorting
    switch (sortOrder) {
      case "price-asc":
        result.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order (relevance)
        break;
    }

    return result;
  }, [genderProducts, searchQuery, sortOrder, brandFilter]);

  // Products to display (with pagination)
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE);
  };

  const genderTitle = gender === "hombre" ? "Hombre" : "Mujer";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-5 sm:py-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1.5 sm:mb-2">
            {genderTitle}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {filteredProducts.length} productos encontrados
          </p>
        </div>

        {/* Filters */}
        <SearchFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          brandFilter={brandFilter}
          onBrandFilterChange={setBrandFilter}
          brands={brands}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {visibleProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-10 sm:mt-12 text-center">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[200px]"
                >
                  Cargar más productos
                </Button>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  Mostrando {visibleProducts.length} de {filteredProducts.length}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg text-muted-foreground">
              No se encontraron productos con los filtros seleccionados.
            </p>
            <Button
              variant="outline"
              className="mt-4 w-full sm:w-auto"
              onClick={() => {
                setSearchQuery("");
                setBrandFilter("all");
                setSortOrder("default");
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 sm:py-8 mt-10 sm:mt-12">
        <div className="container text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2024 Le Fragrance Club. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
