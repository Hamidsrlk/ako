"use client";

import { ArrowLeftIcon, SparklesIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";

import { SearchBar } from "@/components/search/search-bar";
import { HeroQuickTags } from "@/components/home/hero-quick-tags";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  readHeroConfig,
  subscribeHeroConfig,
} from "@/lib/config/hero-config";
import { useLocale, useTranslations } from "@/hooks/use-translations";

export function HeroSection() {
  const { dictionary } = useTranslations();
  const { locale } = useLocale();
  const config = useSyncExternalStore(
    subscribeHeroConfig,
    readHeroConfig,
    readHeroConfig,
  );

  const meta = dictionary.hero;

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden sm:min-h-[85vh]"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <OptimizedImage
          src={config.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {/* Dark base for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/10 sm:bg-gradient-to-r sm:from-background/90 sm:via-background/60 sm:to-background/5" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/15 via-transparent to-transparent" />
        {/* Soft vignette bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 pb-8 pt-20 sm:min-h-[85vh] sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
          >
            <Badge className="border-orange-500/20 bg-orange-500/15 text-orange-600 shadow-sm backdrop-blur-sm dark:text-orange-300">
              <SparklesIcon className="size-3.5" aria-hidden />
              {config.badge}
            </Badge>
          </div>

          <h1
            id="hero-heading"
            className="font-heading animate-fade-in-up text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white opacity-0 drop-shadow-lg"
            style={{ animationDelay: "160ms", animationFillMode: "forwards" }}
          >
            {config.title}
            <span className="mt-2 block bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-transparent">
              {config.titleHighlight}
            </span>
          </h1>

          <p
            className="animate-fade-in-up max-w-xl text-balance text-lg leading-relaxed text-white/80 opacity-0 drop-shadow sm:text-xl"
            style={{ animationDelay: "260ms", animationFillMode: "forwards" }}
          >
            {config.subtitle}
          </p>

          <div
            className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in-up opacity-0"
            style={{ animationDelay: "360ms", animationFillMode: "forwards" }}
          >
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40"
            >
              {dictionary.trending.viewAll}
              <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl"
            >
              {dictionary.cta.secondary}
            </Link>
          </div>

          <div
            className="pt-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "460ms", animationFillMode: "forwards" }}
          >
            <div className="max-w-xl rounded-2xl bg-card/95 p-1 shadow-2xl shadow-black/15 backdrop-blur-lg ring-1 ring-white/10">
              <SearchBar
                placeholder={dictionary.hero.searchPlaceholder}
                size="lg"
              />
            </div>
            <HeroQuickTags />
          </div>
        </div>

        {/* Stats strip */}
        <dl
          className="mt-auto grid w-full grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-background/60 px-6 py-5 shadow-lg backdrop-blur-xl animate-fade-in-up opacity-0 sm:px-10"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          {Object.values(config.stats).map(({ value, label }, i) => (
            <div
              key={label}
              className="text-center sm:text-start"
            >
              <dt className="font-heading text-2xl font-bold text-orange-500 sm:text-3xl">
                {value}
              </dt>
              <dd className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Floating rating pill */}
      <div
        className="absolute end-6 top-28 z-20 hidden animate-fade-in-up items-center gap-1.5 rounded-xl border border-white/15 bg-background/70 px-2.5 py-1 opacity-0 shadow-2xl backdrop-blur-xl sm:inline-flex lg:end-12 lg:top-36"
        style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
      >
        <span className="flex size-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
          <StarIcon className="size-3 fill-current" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-semibold leading-none text-foreground">
            {config.rating.value}
          </p>
          <p className="mt-px text-[9px] text-muted-foreground">
            {config.rating.label}
          </p>
        </div>
      </div>
    </section>
  );
}
