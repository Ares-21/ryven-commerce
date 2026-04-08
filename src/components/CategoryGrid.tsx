import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export default function CategoryGrid() {
  return (
    <section className="container py-10 md:py-14">
      <h2 className="font-heading font-semibold text-lg tracking-widest-plus uppercase mb-6">Shop by Category</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/collection/${cat.slug}`}
            className="shrink-0 bg-secondary hover:bg-accent text-secondary-foreground px-5 py-3 text-xs tracking-widest-plus uppercase font-body transition-colors whitespace-nowrap"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
