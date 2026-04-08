import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Minus, Plus, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("description");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground font-body">Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const recommendations = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordions = [
    { key: "description", title: "Description", content: product.description },
    { key: "fit", title: "Fit & Sizing", content: product.fit },
    { key: "material", title: "Material & Care", content: product.material },
    { key: "shipping", title: "Shipping & Returns", content: "Free standard shipping on orders over $150. Express shipping available. Free returns within 30 days of delivery." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="container py-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/collection/${product.category}`} className="hover:text-foreground transition-colors capitalize">{product.category}</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-2">
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
            {product.hoverImage && (
              <div className="aspect-[3/4] bg-secondary overflow-hidden">
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div>
              {product.isNew && (
                <span className="text-[10px] tracking-widest-plus uppercase bg-primary text-primary-foreground px-2.5 py-1 font-body mb-3 inline-block">
                  New Arrival
                </span>
              )}
              <h1 className="font-heading font-bold text-2xl md:text-3xl tracking-tight mt-2">{product.name}</h1>
              {product.subtitle && <p className="text-sm text-text-tertiary font-body mt-1">{product.subtitle}</p>}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xl font-heading font-semibold text-foreground">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-base text-text-tertiary line-through font-body">${product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Color */}
            <div>
              <h3 className="text-xs tracking-widest-plus uppercase font-body mb-3">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 border-2 transition-colors ${
                      selectedColor === color ? "border-foreground" : "border-border"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color ${color}`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs tracking-widest-plus uppercase font-body">Size</h3>
                <button className="text-xs text-muted-foreground hover:text-foreground font-body underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 text-xs font-body text-center transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-xs tracking-widest-plus uppercase font-body mb-3">Quantity</h3>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-foreground hover:bg-secondary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 py-2 text-sm font-body min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-foreground hover:bg-secondary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-primary-foreground py-3.5 text-xs tracking-widest-plus uppercase font-body hover:bg-foreground/80 transition-colors">
                Add to Cart
              </button>
              <button className="p-3.5 border border-border hover:bg-secondary transition-colors" aria-label="Wishlist">
                <Heart size={18} />
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border pt-4 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest-plus uppercase font-body text-foreground"
                  >
                    {acc.title}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeAccordion === acc.key ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeAccordion === acc.key && (
                    <p className="pb-4 text-sm text-text-tertiary font-body leading-relaxed">
                      {acc.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <section className="container py-14 border-t border-border">
        <h2 className="font-heading font-semibold text-lg tracking-widest-plus uppercase mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {recommendations.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
