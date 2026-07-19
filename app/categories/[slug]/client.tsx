"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { RecipeCard } from "@/components/cards/recipe-card";
import { PageLayout } from "@/components/layout/page-layout";
import { SectionHeader } from "@/components/home/section-header";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { FoodCategory, Recipe } from "@/lib/data/types";

export default function CategoryDetailClient({
  category,
  recipes,
}: {
  category: FoodCategory;
  recipes: Recipe[];
}) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();
  const name = locale === "fa" ? category.nameFa : category.nameEn;

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/" className="mb-6 inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400">
          <ArrowRightIcon className="size-4 rtl:rotate-180" />
          {dictionary.categoryDetail.backToCategories}
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className="font-heading text-3xl font-bold">{name}</h1>
            <p className="text-muted-foreground">
              {category.recipeCount.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")} {dictionary.hero.statsRecipes}
            </p>
          </div>
        </div>

        <SectionHeader title={dictionary.categoryDetail.recipesInSection} eyebrow={name} />

        {recipes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes.map((recipe, i) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={i} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted-foreground">{dictionary.categoryDetail.noRecipes}</p>
        )}
      </div>
    </PageLayout>
  );
}
