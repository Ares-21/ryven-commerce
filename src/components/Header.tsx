import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import ryvenWordmark from "@/assets/ryven-wordmark.png";

const navLinks = [
  { label: "New Arrivals", to: "/collection/new-arrivals" },
  { label: "Men", to: "/collection/tops" },
  { label: "Women", to: "/collection/essentials" },
  { label: "Tops", to: "/collection/tops" },
  { label: "Bottoms", to: "/collection/bottoms" },
  { label: "Outerwear", to: "/collection/outerwear" },
  { label: "Collections", to: "/collection/essentials" },
  { label: "Sale", to: "/collection/best-sellers" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs tracking-widest-plus uppercase font-body">
        Free shipping on orders over $150
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-14 lg:h-16">
          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -ml-2 text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={ryvenWordmark} alt="RYVEN" className="h-5 lg:h-6 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs tracking-widest-plus uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-foreground hover:text-muted-foreground transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link to="/" className="hidden sm:block p-2 text-foreground hover:text-muted-foreground transition-colors" aria-label="Account">
              <User size={18} />
            </Link>
            <Link to="/" className="hidden sm:block p-2 text-foreground hover:text-muted-foreground transition-colors" aria-label="Wishlist">
              <Heart size={18} />
            </Link>
            <Link to="/" className="p-2 text-foreground hover:text-muted-foreground transition-colors relative" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-body">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border py-4">
            <div className="container">
              <div className="flex items-center gap-3">
                <Search size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm font-body outline-none text-foreground placeholder:text-muted-foreground"
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-widest-plus uppercase text-foreground font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
