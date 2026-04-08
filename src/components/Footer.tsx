import { Link } from "react-router-dom";
import ryvenIcon from "@/assets/ryven-icon.png";

const footerLinks = {
  Shop: [
    { label: "New Arrivals", to: "/collection/new-arrivals" },
    { label: "Best Sellers", to: "/collection/best-sellers" },
    { label: "Tops", to: "/collection/tops" },
    { label: "Bottoms", to: "/collection/bottoms" },
    { label: "Outerwear", to: "/collection/outerwear" },
    { label: "Sale", to: "/collection/best-sellers" },
  ],
  Company: [
    { label: "About", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Press", to: "/" },
  ],
  Support: [
    { label: "Shipping", to: "/" },
    { label: "Returns", to: "/" },
    { label: "FAQ", to: "/" },
    { label: "Contact", to: "/" },
    { label: "Size Guide", to: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={ryvenIcon} alt="RYVEN" className="h-8 w-auto mb-4 invert" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed font-body max-w-xs">
              Precision performance apparel. Designed for those who move with intent.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-widest-plus uppercase mb-4 font-body font-medium">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-body">© 2026 RYVEN. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "X"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors font-body uppercase tracking-widest-plus"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
