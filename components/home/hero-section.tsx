"use client";

import { SearchBar } from "@/components/search/search-bar";
import { HeroQuickTags } from "@/components/home/hero-quick-tags";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/hooks/use-translations";
import { platformStats } from "@/lib/data/mock-data";

const mosaicImages = [
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    aspect: "aspect-[3/4]",
    float: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
    aspect: "aspect-square",
    float: "animate-float",
  },
  {
    src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
    aspect: "aspect-square",
    float: "",
  },
  {
    src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    aspect: "aspect-[3/4]",
    float: "animate-float",
  },
];

export function HeroSection() {
  const { dictionary } = useTranslations();

  const stats = [
    { value: platformStats.recipes, label: dictionary.hero.statsRecipes },
    { value: platformStats.restaurants, label: dictionary.hero.statsRestaurants },
    { value: platformStats.members, label: dictionary.hero.statsMembers },
  ];

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -start-40 top-0 size-[520px] animate-pulse-glow rounded-full bg-orange-500/10 blur-3xl" />
        <div
          className="absolute -end-40 bottom-0 size-[420px] animate-pulse-glow rounded-full bg-amber-500/10 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/8 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <Badge
            className="mb-6 animate-fade-in-up border-orange-500/20 bg-orange-500/10 text-orange-600 opacity-0 dark:text-orange-400"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            {dictionary.hero.badge}
          </Badge>

          <h1
            id="hero-heading"
            className="font-heading animate-fade-in-up text-4xl font-bold tracking-tight opacity-0 sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ animationDelay: "180ms", animationFillMode: "forwards" }}
          >
            {dictionary.hero.title}
            <span className="mt-2 block bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              {dictionary.hero.titleHighlight}
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-in-up text-lg leading-relaxed text-muted-foreground opacity-0"
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

          <dl
            className="mt-10 grid grid-cols-3 gap-4 border-t border-orange-500/10 pt-8"
            style={{ animationDelay: "420ms" }}
          >
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${480 + i * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <dt className="text-2xl font-bold text-orange-600 dark:text-orange-400 sm:text-3xl">
                  <AnimatedCounter value={value} />
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {mosaicImages.slice(0, 2).map((img, i) => (
                <div
                  key={img.src}
                  className={`relative ${img.aspect} w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-foreground/10 ${img.float}`}
                  style={i === 1 ? { animationDelay: "1s" } : undefined}
                >
                  <OptimizedImage
                    src={img.src}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-10">
              {mosaicImages.slice(2).map((img, i) => (
                <div
                  key={img.src}
                  className={`relative ${img.aspect} w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-foreground/10 ${img.float}`}
                  style={i === 0 ? { animationDelay: "0.5s" } : undefined}
                >
                  <OptimizedImage
                    src={img.src}
                    alt=""
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -start-6 animate-float rounded-2xl bg-background/95 p-5 shadow-2xl ring-1 ring-orange-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-orange-500/10 text-lg">
                ⭐
              </span>
              <div>
                <p className="text-lg font-bold">4.9</p>
                <p className="text-xs text-muted-foreground">
                  {dictionary.common.rating}
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute -end-4 top-8 animate-float rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/30"
            style={{ animationDelay: "2s" }}
          >
            🔥 {dictionary.trending.trending}
          </div>
        </div>
      </div>
    </section>
  );
}
