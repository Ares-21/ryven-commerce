import { Link } from "react-router-dom";
import campaignImage from "@/assets/campaign-banner.jpg";

export default function CampaignBanner() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img
        src={campaignImage}
        alt="RYVEN New Season Campaign"
        loading="lazy"
        width={1920}
        height={800}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative container h-full flex items-center justify-center text-center">
        <div>
          <p className="text-primary-foreground/60 text-xs tracking-widest-plus uppercase mb-3 font-body">
            The New Drop
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground tracking-tight mb-4">
            Move with Intent
          </h2>
          <Link
            to="/collection/new-arrivals"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 text-xs tracking-widest-plus uppercase font-body hover:bg-primary-foreground/90 transition-colors"
          >
            Shop the Drop
          </Link>
        </div>
      </div>
    </section>
  );
}
