import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortOrder: string;
  onSortChange: (value: string) => void;
  brandFilter: string;
  onBrandFilterChange: (value: string) => void;
  brands: string[];
}

const SearchFilters = ({
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
  brandFilter,
  onBrandFilterChange,
  brands,
}: SearchFiltersProps) => {
  return (
    <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-card border border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
        {/* Search */}
        <div className="relative md:col-span-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre o marca..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background h-11"
          />
        </div>

        {/* Brand Filter */}
        <div className="md:col-span-3">
          <Select value={brandFilter} onValueChange={onBrandFilterChange}>
            <SelectTrigger className="w-full bg-background h-11">
              <SelectValue placeholder="Marca" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las marcas</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort Order */}
        <div className="md:col-span-3">
          <Select value={sortOrder} onValueChange={onSortChange}>
            <SelectTrigger className="w-full bg-background h-11">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Relevancia</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="rating">Mejor valorados</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
