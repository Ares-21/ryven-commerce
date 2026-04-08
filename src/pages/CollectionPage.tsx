import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, getProductsByFilter } from "@/data/products";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colorOptions = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Grey", value: "#4A4A4A" },
  { name: "Light Grey", value: "#D4D4D4" },
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Sellers", value: "best" },
];

export default function CollectionPage() {
  const { slug = "new-arrivals" } = useParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sort, setSort] = useState("newest");

  const collectionTitle = categories.find((c) => c.slug === slug)?.name || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const filtered = useMemo(() => {
    let result = getProductsByFilter(slug);
    if (result.length === 0) result = products;

    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    }
    if (selectedColors.length > 0) {
      result = result.filter((p) => p.colors.some((c) => selectedColors.includes(c)));
    }

    switch (sort) {
      case "price-asc": return [...result].sort((a, b) => a.price - b.price);
      case "price-desc": return [...result].sort((a, b) => b.price - a.price);
      case "best": return [...result].sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
      default: return [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
  }, [slug, selectedSizes, selectedColors, sort]);

  const toggleSize = (s: string) => setSelectedSizes((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  const toggleColor = (c: string) => setSelectedColors((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">{collectionTitle}</span>
        </div>
      </div>

      {/* Title */}
      <div className="container pb-6">
        <h1 className="font-heading font-bold text-2xl md:text-3xl tracking-tight uppercase">{collectionTitle}</h1>
        <p className="text-sm text-muted-foreground font-body mt-1">{filtered.length} products</p>
      </div>

      {/* Category chips */}
      <div className="container pb-6">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/collection/${cat.slug}`}
              className={`shrink-0 px-4 py-2 text-xs tracking-widest-plus uppercase font-body transition-colors ${
                cat.slug === slug
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="container pb-6 flex items-center justify-between">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-2 text-xs tracking-widest-plus uppercase font-body text-foreground"
        >
          <SlidersHorizontal size={14} />
          Filters
          {(selectedSizes.length + selectedColors.length) > 0 && (
            <span className="bg-primary text-primary-foreground w-4 h-4 flex items-center justify-center text-[10px]">
              {selectedSizes.length + selectedColors.length}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2 text-xs font-body">
          <span className="text-muted-foreground">Sort:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-transparent text-foreground text-xs font-body outline-none cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown size={12} />
        </div>
      </div>

      <div className="container pb-16">
        <div className="flex gap-8">
          {/* Filters sidebar */}
          {filtersOpen && (
            <aside className="hidden md:block w-56 shrink-0 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest-plus uppercase font-body font-medium">Filters</span>
                <button onClick={() => setFiltersOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={14} />
                </button>
              </div>

              {/* Size filter */}
              <div>
                <h3 className="text-xs tracking-widest-plus uppercase font-body mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleSize(s)}
                      className={`px-3 py-1.5 text-xs font-body transition-colors ${
                        selectedSizes.includes(s) ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color filter */}
              <div>
                <h3 className="text-xs tracking-widest-plus uppercase font-body mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => toggleColor(c.value)}
                      className={`w-7 h-7 border-2 transition-colors ${
                        selectedColors.includes(c.value) ? "border-foreground" : "border-border"
                      }`}
                      style={{ backgroundColor: c.value }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              {selectedSizes.length + selectedColors.length > 0 && (
                <button
                  onClick={() => { setSelectedSizes([]); setSelectedColors([]); }}
                  className="text-xs text-muted-foreground hover:text-foreground font-body underline"
                >
                  Clear all filters
                </button>
              )}
            </aside>
          )}

          {/* Product grid */}
          <div className="flex-1">
            <div className={`grid gap-x-4 gap-y-8 ${filtersOpen ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16 font-body">No products match your filters.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
