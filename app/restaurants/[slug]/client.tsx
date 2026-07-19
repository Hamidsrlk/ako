"use client";

import { ArrowRightIcon, MapPinIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { PageLayout } from "@/components/layout/page-layout";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { Restaurant } from "@/lib/data/types";

export default function RestaurantDetailClient({ restaurant }: { restaurant: Restaurant }) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const name = locale === "fa" ? restaurant.nameFa : restaurant.nameEn;
  const cuisine = locale === "fa" ? restaurant.cuisineFa : restaurant.cuisineEn;
  const location = locale === "fa" ? restaurant.locationFa : restaurant.locationEn;
  const review = locale === "fa" ? restaurant.featuredReviewFa : restaurant.featuredReviewEn;

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/restaurants" className="mb-6 inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400">
          <ArrowRightIcon className="size-4 rtl:rotate-180" />
          {dictionary.restaurantDetail.backToRestaurants}
        </Link>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <OptimizedImage src={restaurant.image} alt={name} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-3">{cuisine}</Badge>
              <h1 className="font-heading text-3xl font-bold sm:text-4xl">{name}</h1>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-orange-500/10 px-3 py-1.5 text-lg font-bold text-orange-600">
              <StarIcon className="size-5 fill-current" /> {restaurant.rating}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPinIcon className="size-4" /> {location}</span>
            <span>{"$".repeat(restaurant.priceLevel)}{"$".repeat(4 - restaurant.priceLevel).split("").map((c, i) => <span key={i} className="opacity-30">{c}</span>)}</span>
            <span>{restaurant.reviewCount} {dictionary.restaurants.reviews}</span>
          </div>

          <div className="rounded-xl bg-muted/50 p-6">
            <h2 className="mb-3 text-lg font-semibold">{dictionary.restaurantDetail.featuredReview}</h2>
            <blockquote className="border-s-2 border-orange-500/40 ps-4 text-lg italic">{review}</blockquote>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
