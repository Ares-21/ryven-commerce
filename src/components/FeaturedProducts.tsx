import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

interface FeaturedProductsProps {
  title: string;
  filter?: "new" | "best" | "all";
  linkTo?: string;
}

export default function FeaturedProducts({ title, filter = "all", linkTo }: FeaturedProductsProps) {
  let filtered = products;
  if (filter === "new") filtered = products.filter((p) => p.isNew);
  else if (filter === "best") filtered = products.filter((p) => p.isBestSeller);

  return (
    <section className="container py-10 md:py-14">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-semibold text-lg tracking-widest-plus uppercase">{title}</h2>
        {linkTo && (
          <Link
            to={linkTo}
            className="text-xs tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            View All →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
