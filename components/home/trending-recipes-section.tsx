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
      id="recipes"
      className="relative overflow-hidden bg-muted/40 py-20"
      aria-labelledby="trending-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={dictionary.trending.title}
          subtitle={dictionary.trending.subtitle}
          viewAllLabel={dictionary.trending.viewAll}
          viewAllHref="/recipes"
          eyebrow={dictionary.trending.trending}
        />

        <StaggerGrid
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          staggerMs={90}
        >
          {trendingRecipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              featured={index === 0}
              index={index}
            />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
