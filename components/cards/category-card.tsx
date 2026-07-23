"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealImage } from "@/components/motion/reveal-image";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { FoodCategory } from "@/lib/data/types";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: FoodCategory;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const name = locale === "fa" ? category.nameFa : category.nameEn;
  const href = `/categories/${category.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex aspect-square w-full flex-col items-center justify-end overflow-hidden rounded-2xl ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-orange-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
        className
      )}
      aria-label={`${name} — ${category.recipeCount} ${dictionary.hero.statsRecipes}`}
    >
      <RevealImage className="absolute inset-0">
        <OptimizedImage
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </RevealImage>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 w-full p-4 text-start">
        {category.icon && (
          <span className="flex size-8 items-center justify-center rounded-lg bg-white/15 text-sm font-bold text-white backdrop-blur-sm" aria-hidden>
            {category.icon}
          </span>
        )}
        <h3 className="mt-2 text-base font-bold text-white">{name}</h3>
        <p className="text-sm text-white/80">
          {category.recipeCount.toLocaleString(
            locale === "fa" ? "fa-IR" : "en-US"
          )}{" "}
          {dictionary.hero.statsRecipes}
        </p>
      </div>
      <Badge className="absolute end-3 top-3 bg-white/20 text-white backdrop-blur-sm">
        <ArrowUpRightIcon className="size-3" aria-hidden />
      </Badge>
    </Link>
  );
}
