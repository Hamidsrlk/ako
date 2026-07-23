"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealImage } from "@/components/motion/reveal-image";
import { useLocale } from "@/hooks/use-translations";
import type { Restaurant } from "@/lib/data/types";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const priceSymbols = ["$", "$$", "$$$", "$$$$"];

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { locale } = useLocale();

  const name = locale === "fa" ? restaurant.nameFa : restaurant.nameEn;
  const cuisine = locale === "fa" ? restaurant.cuisineFa : restaurant.cuisineEn;
  const location = locale === "fa" ? restaurant.locationFa : restaurant.locationEn;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/restaurants/${restaurant.slug}`}
        className="block"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <RevealImage className="absolute inset-0">
            <OptimizedImage
              src={restaurant.image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </RevealImage>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute end-3 top-3 bg-white/20 text-white backdrop-blur-sm">
            {priceSymbols[restaurant.priceLevel - 1]}
          </Badge>
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-orange-500">
            {name}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {cuisine}
          </p>
          <p className="text-xs text-muted-foreground/60">{location}</p>
        </div>
      </Link>
    </div>
  );
}
