import { Link } from "react-router-dom";
import { collections } from "@/data/products";

export default function CollectionCards() {
  return (
    <section className="container py-10 md:py-14">
      <h2 className="font-heading font-semibold text-lg tracking-widest-plus uppercase mb-6">Shop by Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.slice(0, 3).map((col) => (
          <Link
            key={col.slug}
            to={`/collection/${col.slug}`}
            className="group bg-secondary hover:bg-accent transition-colors p-8 flex flex-col justify-end min-h-[160px]"
          >
            <h3 className="font-heading font-semibold text-base uppercase tracking-widest-plus text-foreground mb-1">
              {col.name}
            </h3>
            <p className="text-xs text-text-tertiary font-body">{col.description}</p>
            <span className="mt-3 text-[10px] tracking-widest-plus uppercase text-muted-foreground group-hover:text-foreground transition-colors font-body">
              Shop Now →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
