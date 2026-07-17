"use client";

import { MapPinIcon, StarIcon } from "lucide-react";

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
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { Restaurant } from "@/lib/data/types";
import { cn } from "@/lib/utils";

type RestaurantCardProps = {
  restaurant: Restaurant;
  className?: string;
};

function PriceLevel({ level }: { level: Restaurant["priceLevel"] }) {
  return (
    <span className="text-sm font-medium text-muted-foreground" aria-hidden>
      {"$".repeat(level)}
      <span className="opacity-30">{"$".repeat(4 - level)}</span>
    </span>
  );
}

export function RestaurantCard({ restaurant, className }: RestaurantCardProps) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const name = locale === "fa" ? restaurant.nameFa : restaurant.nameEn;
  const cuisine = locale === "fa" ? restaurant.cuisineFa : restaurant.cuisineEn;
  const location =
    locale === "fa" ? restaurant.locationFa : restaurant.locationEn;
  const review =
    locale === "fa"
      ? restaurant.featuredReviewFa
      : restaurant.featuredReviewEn;

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-orange-500/20",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <OptimizedImage
          src={restaurant.image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute start-3 top-3 bg-white/90 text-foreground backdrop-blur-sm dark:bg-black/70 dark:text-white">
          {cuisine}
        </Badge>
      </div>

      <CardHeader className="pb-0">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-orange-500/10 px-2 py-0.5 text-sm font-semibold text-orange-600 dark:text-orange-400">
            <StarIcon className="size-3.5 fill-current" aria-hidden />
            {restaurant.rating}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPinIcon className="size-3.5 shrink-0" aria-hidden />
          <span>{location}</span>
        </div>
      </CardHeader>

      <CardContent>
        <blockquote className="border-s-2 border-orange-500/40 ps-3 text-sm italic text-muted-foreground">
          &ldquo;{review}&rdquo;
        </blockquote>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {restaurant.reviewCount.toLocaleString(
              locale === "fa" ? "fa-IR" : "en-US"
            )}{" "}
            {dictionary.restaurants.reviews}
          </span>
          <PriceLevel level={restaurant.priceLevel} />
        </div>
      </CardContent>

      <CardFooter className="border-t-0 bg-transparent pt-0">
        <Button variant="outline" className="w-full" size="lg">
          {dictionary.restaurants.viewRestaurant}
        </Button>
      </CardFooter>
    </Card>
  );
}
