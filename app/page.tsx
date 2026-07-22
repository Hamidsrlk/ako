import { CategoriesSection } from "@/components/home/categories-section";
import { CommunityFeedSection } from "@/components/home/community-feed-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { FeaturedEditorial } from "@/components/home/featured-editorial";
import { HeroSection } from "@/components/home/hero-section";
import { RestaurantReviewsSection } from "@/components/home/restaurant-reviews-section";
import { TrendingRecipesSection } from "@/components/home/trending-recipes-section";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AKO",
  url: "https://ako.food",
  description:
    "Share recipes, review restaurants, and discover food with a vibrant community.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ako.food/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustMarquee />
        <CategoriesSection />
        <TrendingRecipesSection />
        <FeaturedEditorial />
        <RestaurantReviewsSection />
        <CommunityFeedSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
