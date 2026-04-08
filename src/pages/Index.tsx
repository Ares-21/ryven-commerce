import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import CollectionCards from "@/components/CollectionCards";
import CampaignBanner from "@/components/CampaignBanner";
import BrandStory from "@/components/BrandStory";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts title="New Arrivals" filter="new" linkTo="/collection/new-arrivals" />
      <CollectionCards />
      <FeaturedProducts title="Best Sellers" filter="best" linkTo="/collection/best-sellers" />
      <CampaignBanner />
      <BrandStory />
      <FeaturedProducts title="All Products" filter="all" />
      <Newsletter />
      <Footer />
    </div>
  );
}
