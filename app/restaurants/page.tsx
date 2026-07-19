"use client";

import { RestaurantCard } from "@/components/cards/restaurant-card";
import { PageLayout } from "@/components/layout/page-layout";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { featuredRestaurants } from "@/lib/data/mock-data";

export default function RestaurantsPage() {
  const { dictionary } = useTranslations();
  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title={dictionary.restaurants.title} subtitle={dictionary.restaurants.subtitle} eyebrow="All" />
        <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerMs={80}>
          {featuredRestaurants.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
        </StaggerGrid>
      </section>
    </PageLayout>
  );
}
