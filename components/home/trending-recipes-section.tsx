"use client";

import { RecipeCard } from "@/components/cards/recipe-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { trendingRecipes } from "@/lib/data/mock-data";
export function TrendingRecipesSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="trending-recipes"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="trending-recipes-heading"
    >
      <SectionHeader
        title={dictionary.trending.title}
        subtitle={dictionary.trending.subtitle}
        viewAllLabel={dictionary.trending.viewAll}
        eyebrow="Trending"
      />

      <StaggerGrid
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        staggerMs={100}
        variant="blur"
      >
        {trendingRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </StaggerGrid>
    </section>
  );
}
