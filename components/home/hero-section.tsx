"use client";

import { ArrowLeftIcon, SparklesIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { SearchBar } from "@/components/search/search-bar";
import { HeroQuickTags } from "@/components/home/hero-quick-tags";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/hooks/use-translations";

// A small set of curated cinematic dishes for the hero visual stack.
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900&q=80",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&q=80",
    alt: "",
  },
];

export function HeroSection() {
  const { dictionary } = useTranslations();

  const stats = [
    { value: "12K+", label: dictionary.hero.statsRecipes },
    { value: "3.2K", label: dictionary.hero.statsRestaurants },
    { value: "89K", label: dictionary.hero.statsMembers },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-orange-50/40 via-background to-background dark:from-orange-950/10"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -start-40 -top-20 size-[520px] animate-pulse-glow rounded-full bg-orange-500/15 blur-3xl" />
        <div
          className="absolute -end-32 top-40 size-[420px] animate-pulse-glow rounded-full bg-amber-400/15 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/[0.07] via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Headline + search */}
          <div className="lg:col-span-7">
            <Badge
              className="mb-6 animate-fade-in-up border-orange-500/20 bg-orange-500/10 text-orange-700 opacity-0 dark:text-orange-300"
              style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
            >
              <SparklesIcon className="size-3.5" aria-hidden />
              {dictionary.hero.badge}
            </Badge>

            <h1
              id="hero-heading"
              className="font-heading animate-fade-in-up text-[2.75rem] font-bold leading-[1.05] tracking-tight opacity-0 sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
              style={{ animationDelay: "160ms", animationFillMode: "forwards" }}
            >
              {dictionary.hero.title}
              <span className="mt-2 block bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                {dictionary.hero.titleHighlight}
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-in-up text-lg leading-relaxed text-muted-foreground opacity-0 sm:text-xl"
              style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
            >
              {dictionary.hero.subtitle}
            </p>

            <div
              className="mt-8 max-w-xl animate-fade-in-up opacity-0"
              style={{ animationDelay: "340ms", animationFillMode: "forwards" }}
            >
              <SearchBar
                placeholder={dictionary.hero.searchPlaceholder}
                size="lg"
              />
              <HeroQuickTags />
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-3 animate-fade-in-up opacity-0"
              style={{ animationDelay: "440ms", animationFillMode: "forwards" }}
            >
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/40"
              >
                {dictionary.trending.viewAll}
                <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-background px-6 py-3 text-sm font-semibold text-orange-700 transition-all duration-300 hover:bg-orange-500/5 dark:text-orange-300"
              >
                {dictionary.cta.secondary}
              </Link>
            </div>
          </div>

          {/* Cinematic image stack */}
          <div className="lg:col-span-5">
            <div
              className="relative animate-fade-in-up opacity-0"
              style={{ animationDelay: "380ms", animationFillMode: "forwards" }}
            >
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10 ring-1 ring-foreground/5">
                    <OptimizedImage
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10 ring-1 ring-foreground/5 animate-float">
                    <OptimizedImage
                      src={heroImages[1].src}
                      alt={heroImages[1].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10 ring-1 ring-foreground/5">
                    <OptimizedImage
                      src={heroImages[2].src}
                      alt={heroImages[2].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-orange-500/10 ring-1 ring-foreground/5 animate-float">
                    <OptimizedImage
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -bottom-6 -start-4 z-10 rounded-2xl bg-background/95 p-4 shadow-2xl ring-1 ring-orange-500/20 backdrop-blur-md sm:-start-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
                    <StarIcon className="size-5 fill-current" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xl font-bold leading-none">4.9</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {dictionary.common.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <dl
          className="mt-16 grid grid-cols-3 gap-4 border-t border-orange-500/10 pt-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: "560ms", animationFillMode: "forwards" }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center sm:text-start">
              <dt className="font-heading text-3xl font-bold text-orange-600 sm:text-4xl dark:text-orange-400">
                {value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground sm:text-base">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
