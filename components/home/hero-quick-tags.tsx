"use client";

import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tagKeys = ["quick", "healthy", "persian", "dessert", "weeknight"] as const;

export function HeroQuickTags() {
  const { dictionary } = useTranslations();

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1 text-xs font-medium text-white/70">
        <SparklesIcon className="size-3.5 text-orange-400" aria-hidden />
        {dictionary.hero.trendingSearches}
      </span>
      {tagKeys.map((key, i) => (
        <motion.span
          key={key}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/search?q=${encodeURIComponent(dictionary.hero.tags[key])}`}
            className={cn(
              "rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 hover:shadow-lg backdrop-blur-sm",
              "animate-fade-in-up opacity-0",
            )}
            style={{ animationDelay: `${400 + i * 60}ms`, animationFillMode: "forwards" }}
          >
            {dictionary.hero.tags[key]}
          </Link>
        </motion.span>
      ))}
    </div>
  );
}

