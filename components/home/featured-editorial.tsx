"use client";

import { ArrowRightIcon, ClockIcon } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import { trendingRecipes } from "@/lib/data/mock-data";

export function FeaturedEditorial() {
  const { dictionary } = useTranslations();
  const { locale } = useLocale();
  const featured = trendingRecipes[4];

  const title = locale === "fa" ? featured.titleFa : featured.titleEn;
  const description =
    locale === "fa" ? featured.descriptionFa : featured.descriptionEn;

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="featured-heading"
    >
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 via-background to-amber-500/5 ring-1 ring-orange-500/15">
          <div className="pointer-events-none absolute -end-20 -top-20 size-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[480px]">
              <OptimizedImage
                src={featured.image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/80" />
              <Badge className="absolute start-4 top-4 bg-orange-500 text-white shadow-lg">
                {dictionary.featured.badge}
              </Badge>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
                {dictionary.featured.eyebrow}
              </p>
              <h2
                id="featured-heading"
                className="font-heading mt-3 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              >
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ClockIcon className="size-4" />
                  {featured.cookTime} {dictionary.trending.minRead}
                </span>
                <span>{featured.author}</span>
              </div>

              <Button
                size="lg"
                className="group mt-8 w-fit bg-orange-500 text-white hover:bg-orange-600"
              >
                {dictionary.featured.cta}
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
