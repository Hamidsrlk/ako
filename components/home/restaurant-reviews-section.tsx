"use client";

import { RestaurantCard } from "@/components/cards/restaurant-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { featuredRestaurants } from "@/lib/data/mock-data";

export function RestaurantReviewsSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="restaurants"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="restaurants-heading"
    >
      <SectionHeader
        title={dictionary.restaurants.title}
        subtitle={dictionary.restaurants.subtitle}
        viewAllLabel={dictionary.restaurants.viewAll}
      />

      <StaggerGrid
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        staggerMs={100}
      >
        {featuredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </StaggerGrid>
    </section>
  );
}
