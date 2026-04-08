import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="border-t border-border">
      <div className="container py-14 md:py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-heading font-semibold text-base tracking-widest-plus uppercase mb-2">Join RYVEN</h2>
          <p className="text-sm text-muted-foreground font-body mb-6">
            Early access to drops, exclusive offers, and new arrivals.
          </p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 bg-secondary text-sm font-body px-4 py-3 outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 text-xs tracking-widest-plus uppercase font-body hover:bg-foreground/80 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
