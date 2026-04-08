import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-3">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-primary text-primary-foreground text-[10px] tracking-widest-plus uppercase px-2.5 py-1 font-body">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-badge-sale text-primary-foreground text-[10px] tracking-widest-plus uppercase px-2.5 py-1 font-body">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked(!liked);
            }}
            className="absolute top-3 right-3 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Add to wishlist"
          >
            <Heart size={16} className={liked ? "fill-foreground text-foreground" : "text-foreground"} />
          </button>

          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-primary-foreground text-center py-2.5 text-xs tracking-widest-plus uppercase font-body translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Quick Add
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-sm font-heading font-medium text-foreground">{product.name}</h3>
        {product.subtitle && (
          <p className="text-xs text-text-tertiary font-body">{product.subtitle}</p>
        )}
        <div className="flex items-center gap-2">
          <span className="text-sm font-body text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm font-body text-text-tertiary line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5 pt-1">
          {product.colors.map((color) => (
            <span
              key={color}
              className="w-3 h-3 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
