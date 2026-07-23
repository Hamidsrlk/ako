"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { RecipeCard } from "@/components/cards/recipe-card";
import { RestaurantCard } from "@/components/cards/restaurant-card";
import { PageLayout } from "@/components/layout/page-layout";
import { SectionHeader } from "@/components/home/section-header";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import { trendingRecipes, featuredRestaurants } from "@/lib/data/mock-data";

function SearchContent() {
  const { dictionary } = useTranslations();
  const { locale } = useLocale();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [tab, setTab] = useState<"recipes" | "restaurants">("recipes");

  const lowerQ = q.toLowerCase();

  const filteredRecipes = useMemo(
    () =>
      q
        ? trendingRecipes.filter(
            (r) =>
              r.titleEn.toLowerCase().includes(lowerQ) ||
              r.titleFa.includes(q) ||
              r.descriptionEn.toLowerCase().includes(lowerQ) ||
              r.descriptionFa.includes(q) ||
              r.tags.some((t) => t.includes(lowerQ))
          )
        : [],
    [q, lowerQ]
  );

  const filteredRestaurants = useMemo(
    () =>
      q
        ? featuredRestaurants.filter(
            (r) =>
              r.nameEn.toLowerCase().includes(lowerQ) ||
              r.nameFa.includes(q) ||
              r.cuisineEn.toLowerCase().includes(lowerQ)
          )
        : [],
    [q, lowerQ]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader title={dictionary.search.title} subtitle={dictionary.search.subtitle} eyebrow="Search" />

      {!q && <p className="py-12 text-center text-muted-foreground">{dictionary.search.noQuery}</p>}

      {q && (
        <>
          <p className="mb-6 text-muted-foreground">
            {dictionary.search.resultsFor} &ldquo;<strong>{q}</strong>&rdquo;
          </p>

          <div className="mb-8 flex gap-2">
            <button
              onClick={() => setTab("recipes")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${tab === "recipes" ? "bg-orange-500 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {dictionary.search.recipesTab} ({filteredRecipes.length})
            </button>
            <button
              onClick={() => setTab("restaurants")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${tab === "restaurants" ? "bg-orange-500 text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {dictionary.search.restaurantsTab} ({filteredRestaurants.length})
            </button>
          </div>

          {tab === "recipes" && (
            filteredRecipes.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredRecipes.map((r, i) => <RecipeCard key={r.id} recipe={r} index={i} />)}
              </div>
            ) : (
              <p className="py-12 text-center text-muted-foreground">{dictionary.search.noResults} &ldquo;{q}&rdquo;</p>
            )
          )}

          {tab === "restaurants" && (
            filteredRestaurants.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredRestaurants.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
              </div>
            ) : (
              <p className="py-12 text-center text-muted-foreground">{dictionary.search.noResults} &ldquo;{q}&rdquo;</p>
            )
          )}
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-16"><p className="text-muted-foreground">Loading...</p></div>}>
        <SearchContent />
      </Suspense>
    </PageLayout>
  );
}
