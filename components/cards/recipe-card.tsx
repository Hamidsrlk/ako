"use client";

import { ClockIcon, HeartIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { Recipe } from "@/lib/data/types";
import { cn } from "@/lib/utils";

type RecipeCardProps = {
  recipe: Recipe;
  className?: string;
  featured?: boolean;
  index?: number;
};

export function RecipeCard({
  recipe,
  className,
  featured = false,
  index = 0,
}: RecipeCardProps) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const title = locale === "fa" ? recipe.titleFa : recipe.titleEn;
  const description =
    locale === "fa" ? recipe.descriptionFa : recipe.descriptionEn;
  const href = `/recipes/${recipe.slug}`;

  return (
    <Link
      href={href}
      className="group/card-link block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 rounded-xl"
    >
      <Card
        className={cn(
          "card-shine group overflow-hidden border-0 bg-card shadow-md ring-1 ring-foreground/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 hover:ring-orange-500/25",
          className
        )}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={recipe.image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

          <div className="absolute start-3 top-3 flex flex-col gap-2">
            {featured && (
              <Badge className="w-fit bg-orange-500 text-white shadow-lg">
                {dictionary.trending.editorsPick}
              </Badge>
            )}
            <Badge
              variant="secondary"
              className="w-fit gap-1 bg-white/90 text-foreground backdrop-blur-sm dark:bg-black/70 dark:text-white"
            >
              <StarIcon className="size-3 fill-orange-500 text-orange-500" />
              {recipe.rating}
            </Badge>
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              size="sm"
              className="w-full bg-white/95 text-foreground hover:bg-white dark:bg-black/80 dark:text-white"
              tabIndex={-1}
            >
              {dictionary.trending.viewRecipe}
            </Button>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity group-hover:opacity-0">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarImage src={recipe.authorAvatar} alt={recipe.author} />
                <AvatarFallback>{recipe.author[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-white drop-shadow">
                {recipe.author}
              </span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-0">
          <CardTitle className="font-heading text-lg font-semibold leading-snug transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-400">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5">
              <ClockIcon className="size-3.5" aria-hidden />
              {recipe.cookTime} {dictionary.trending.minRead}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5">
              <HeartIcon className="size-3.5 text-orange-500" aria-hidden />
              {recipe.likes.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}
            </span>
          </div>
        </CardContent>

        <CardFooter className="border-t-0 bg-transparent pt-0 sm:hidden">
          <Button
            className="w-full bg-orange-500 text-white hover:bg-orange-600"
            size="lg"
            tabIndex={-1}
          >
            {dictionary.trending.viewRecipe}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

