"use client";

import { ArrowRightIcon, ClockIcon, HeartIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { PageLayout } from "@/components/layout/page-layout";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { Recipe } from "@/lib/data/types";

export default function RecipeDetailClient({ recipe }: { recipe: Recipe }) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const title = locale === "fa" ? recipe.titleFa : recipe.titleEn;
  const description = locale === "fa" ? recipe.descriptionFa : recipe.descriptionEn;

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/recipes" className="mb-6 inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400">
          <ArrowRightIcon className="size-4 rtl:rotate-180" />
          {dictionary.recipeDetail.backToRecipes}
        </Link>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <OptimizedImage src={recipe.image} alt={title} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-orange-500/10 text-orange-700 dark:text-orange-300">{tag}</Badge>
              ))}
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-y border-border py-4 text-sm">
            <span className="inline-flex items-center gap-1.5">
              <StarIcon className="size-4 fill-orange-500 text-orange-500" /> {recipe.rating}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="size-4" /> {recipe.cookTime} {dictionary.trending.minRead}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HeartIcon className="size-4 text-orange-500" /> {recipe.likes.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
            <Avatar>
              <AvatarImage src={recipe.authorAvatar} alt={recipe.author} />
              <AvatarFallback>{recipe.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs text-muted-foreground">{dictionary.recipeDetail.author}</p>
              <p className="font-medium">{recipe.author}</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
