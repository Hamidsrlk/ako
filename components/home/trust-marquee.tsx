"use client";

import { AwardIcon, ShieldCheckIcon, StarIcon, UsersIcon } from "lucide-react";

import { useTranslations } from "@/hooks/use-translations";

const icons = [StarIcon, UsersIcon, AwardIcon, ShieldCheckIcon];

export function TrustMarquee() {
  const { dictionary } = useTranslations();
  const items = dictionary.trust.items;

  const doubled = [...items, ...items];

  return (
    <section
      className="relative overflow-hidden border-y border-orange-500/10 bg-orange-500/[0.03] py-4"
      aria-label={dictionary.trust.ariaLabel}
    >
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {doubled.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Icon className="size-4 text-orange-500" aria-hidden />
              {item}
            </span>
          );
        })}
      </div>
    </section>
  );
}
