"use client";

import { SparklesIcon } from "lucide-react";

import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

const tagKeys = ["quick", "healthy", "persian", "dessert", "weeknight"] as const;

export function HeroQuickTags() {
  const { dictionary } = useTranslations();

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
        <SparklesIcon className="size-3.5 text-orange-500" aria-hidden />
        {dictionary.hero.trendingSearches}
      </span>
      {tagKeys.map((key, i) => (
        <button
          key={key}
          type="button"
          className={cn(
            "rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-700 transition-all hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-md dark:text-orange-300",
            "animate-fade-in-up opacity-0",
          )}
          style={{ animationDelay: `${400 + i * 60}ms`, animationFillMode: "forwards" }}
        >
          {dictionary.hero.tags[key]}
        </button>
      ))}
    </div>
  );
}
