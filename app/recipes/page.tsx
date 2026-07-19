"use client";

import { RecipeCard } from "@/components/cards/recipe-card";
import { PageLayout } from "@/components/layout/page-layout";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { trendingRecipes } from "@/lib/data/mock-data";

export default function RecipesPage() {
  const { dictionary } = useTranslations();

  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title={dictionary.trending.title} subtitle={dictionary.trending.subtitle} eyebrow="All" />
        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" staggerMs={70}>
          {trendingRecipes.map((recipe, i) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={i} />
          ))}
        </StaggerGrid>
      </section>
    </PageLayout>
  );
}
