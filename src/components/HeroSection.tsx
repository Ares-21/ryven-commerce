import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-primary">
      <img
        src={heroImage}
        alt="RYVEN Performance Apparel"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover object-top opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
      <div className="relative container h-full flex items-end pb-16 md:pb-20">
        <div className="max-w-lg">
          <p className="text-primary-foreground/70 text-xs tracking-widest-plus uppercase mb-3 font-body">
            New Season — SS26
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight leading-[1.1] mb-4">
            Precision<br />in Motion
          </h1>
          <p className="text-primary-foreground/60 text-sm font-body mb-6 max-w-sm leading-relaxed">
            Performance apparel engineered for focus. Clean lines, premium materials, intentional design.
          </p>
          <div className="flex items-center gap-3">
            <Link
              to="/collection/new-arrivals"
              className="bg-primary-foreground text-primary px-6 py-3 text-xs tracking-widest-plus uppercase font-body hover:bg-primary-foreground/90 transition-colors"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/collection/essentials"
              className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 text-xs tracking-widest-plus uppercase font-body hover:bg-primary-foreground/10 transition-colors"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
