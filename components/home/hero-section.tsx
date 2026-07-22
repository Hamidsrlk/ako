"use client";

import { ArrowLeftIcon, SparklesIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { SearchBar } from "@/components/search/search-bar";
import { HeroQuickTags } from "@/components/home/hero-quick-tags";
import { Badge } from "@/components/ui/badge";
import {
  defaultHeroConfig,
  readHeroConfig,
  subscribeHeroConfig,
} from "@/lib/config/hero-config";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL = 6000;

function useHeroSlideshow(imageCount: number) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, imageCount - 1)));
  }, [imageCount]);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageCount);
    }, SLIDE_INTERVAL);
  }, [imageCount]);

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (imageCount > 1) startTimer();
    return stopTimer;
  }, [imageCount, startTimer, stopTimer]);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % imageCount);
    startTimer();
  }, [imageCount, startTimer]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + imageCount) % imageCount);
    startTimer();
  }, [imageCount, startTimer]);

  return { index, next, prev, pause: stopTimer, resume: startTimer };
}

type RevealDir = "up" | "left" | "fade" | "blur";

function RevealText({
  children,
  delay,
  direction = "up",
}: {
  children: React.ReactNode;
  delay: number;
  direction?: RevealDir;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (direction === "up" || direction === "left") {
    return (
      <div className="overflow-hidden">
        <div
          className={cn(
            "transition-all duration-[900ms] ease-out",
            visible
              ? "translate-y-0 translate-x-0 opacity-100"
              : direction === "up"
                ? "translate-y-full opacity-0"
                : "-translate-x-full opacity-0",
          )}
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : direction === "blur"
            ? "translate-y-3 blur-[4px] opacity-0"
            : "translate-y-6 opacity-0",
      )}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </div>
  );
}

export function HeroSection() {
  const { dictionary } = useTranslations();
  const { locale } = useLocale();
  const config = useSyncExternalStore(
    subscribeHeroConfig,
    readHeroConfig,
    readHeroConfig,
  );

  const images = config.images.length > 0 ? config.images : defaultHeroConfig.images;
  const { index, pause, resume } = useHeroSlideshow(images.length);
  const text = locale === "fa" ? config.fa : config.en;

  return (
    <section
      className="relative min-h-[85vh] overflow-hidden sm:min-h-[80vh]"
      aria-labelledby="hero-heading"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Slideshow background */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        {images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <img
              src={src}
              alt=""
              className="size-full object-cover"
              style={{
                animation: i === index ? "hero-zoom 6s ease-in-out forwards" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay layers */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/10 sm:bg-gradient-to-r sm:from-background/90 sm:via-background/60 sm:to-background/5" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/15 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Slideshow navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-36 start-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-32" aria-hidden>
          {images.map((_, i) => (
            <span
              key={i}
              className={cn(
                "rounded-full transition-all duration-500",
                i === index
                  ? "h-1.5 w-6 bg-white"
                  : "h-1.5 w-1.5 bg-white/40",
              )}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 pb-8 pt-20 sm:min-h-[80vh] sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <RevealText direction="up" delay={80}>
            <Badge className="mb-5 inline-flex items-center gap-1.5 border-orange-500/20 bg-orange-500/15 text-orange-600 shadow-sm backdrop-blur-sm dark:text-orange-300">
              <SparklesIcon className="size-3.5" aria-hidden />
              {text.badge}
            </Badge>
          </RevealText>

          <div className="space-y-3">
            <RevealText direction="up" delay={160}>
              <h1
                id="hero-heading"
                className="font-heading text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg"
              >
                {text.title}
              </h1>
            </RevealText>

            <RevealText direction="left" delay={260}>
              <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-transparent font-heading text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-tight drop-shadow-lg bg-[length:200%_100%] motion-safe:animate-[shimmer-in_1s_ease-out_1.3s_both]">
                {text.titleHighlight}
              </span>
            </RevealText>
          </div>

          <RevealText direction="blur" delay={420}>
            <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/80 drop-shadow sm:text-lg">
              {text.subtitle}
            </p>
          </RevealText>

          <RevealText direction="fade" delay={520}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40"
              >
                {dictionary.trending.viewAll}
                <ArrowLeftIcon className="size-4 rtl:rotate-180" aria-hidden />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-xl"
              >
                {dictionary.cta.secondary}
              </Link>
            </div>
          </RevealText>

          <RevealText direction="fade" delay={620}>
            <div className="mt-6">
              <div className="max-w-xl rounded-2xl bg-card/95 p-1 shadow-2xl shadow-black/15 backdrop-blur-lg ring-1 ring-white/10">
                <SearchBar
                  placeholder={dictionary.hero.searchPlaceholder}
                  size="lg"
                />
              </div>
              <HeroQuickTags />
            </div>
          </RevealText>
        </div>

        {/* Stats strip */}
        <RevealText direction="up" delay={720}>
          <dl className="mt-8 grid w-full grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-background/60 px-6 py-4 shadow-lg backdrop-blur-xl sm:px-10">
            {Object.values(config.stats).map((stat) => {
              const label = locale === "fa" ? stat.fa : stat.en;
              return (
                <div key={label} className="text-center sm:text-start">
                  <dt className="font-heading text-xl font-bold text-orange-500 sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                    {label}
                  </dd>
                </div>
              );
            })}
          </dl>
        </RevealText>
      </div>

      {/* Floating rating pill */}
      <RevealText direction="fade" delay={550}>
        <div className="absolute end-6 top-28 z-20 hidden items-center gap-1.5 rounded-xl border border-white/15 bg-background/70 px-2.5 py-1 shadow-2xl backdrop-blur-xl sm:inline-flex lg:end-12 lg:top-36">
          <span className="flex size-5 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
            <StarIcon className="size-3 fill-current" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold leading-none text-foreground">
              {config.ratingValue}
            </p>
            <p className="mt-px text-[9px] text-muted-foreground">
              {dictionary.common.rating}
            </p>
          </div>
        </div>
      </RevealText>

      <style>{`@keyframes hero-zoom { from { transform: scale(1); } to { transform: scale(1.04); } } @keyframes shimmer-in { 0% { background-position: 200% 0%; } 100% { background-position: 0% 0%; } }`}</style>
    </section>
  );
}
