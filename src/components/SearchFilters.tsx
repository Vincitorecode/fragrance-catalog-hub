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
    <div className="mb-3 sm:mb-6 p-2.5 sm:p-3 rounded-xl bg-card border border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
        {/* Search */}
        <div className="relative md:col-span-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre o marca..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="font-brandon font-normal text-[14px] leading-[1] tracking-[0] pl-10 bg-background h-11 text-black placeholder:text-black"
          />
        </div>

        {/* Brand Filter */}
        <div className="md:col-span-3">
          <Select value={brandFilter} onValueChange={onBrandFilterChange}>
            <SelectTrigger className="font-brandon font-normal text-[14px] leading-[1] tracking-[0] w-full bg-background h-11">
              <SelectValue
                placeholder="Marca"
                className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]"
              />
            </SelectTrigger>
            <SelectContent className="font-brandon">
              <SelectItem
                className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]"
                value="all"
              >
                Todas las marcas
              </SelectItem>
              {brands.map((brand) => (
                <SelectItem
                  className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]"
                  key={brand}
                  value={brand}
                >
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort Order */}
        <div className="md:col-span-3">
          <Select value={sortOrder} onValueChange={onSortChange}>
            <SelectTrigger className="font-brandon font-normal text-[14px] leading-[1] tracking-[0] w-full bg-background h-11">
              <SelectValue
                placeholder="Ordenar por"
                className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]"
              />
            </SelectTrigger>
            <SelectContent className="font-brandon">
              <SelectItem className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]" value="default">
                Relevancia
              </SelectItem>
              <SelectItem className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]" value="price-asc">
                Precio: Menor a Mayor
              </SelectItem>
              <SelectItem className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]" value="price-desc">
                Precio: Mayor a Menor
              </SelectItem>
              <SelectItem className="font-brandon font-normal text-[14px] leading-[1] tracking-[0]" value="rating">
                Mejor valorados
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
