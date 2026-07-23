"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/use-translations";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  onViewAll?: () => void;
  className?: string;
  eyebrow?: string;
};

export function SectionHeader({
  title,
  subtitle,
  viewAllLabel,
  viewAllHref,
  onViewAll,
  className,
  eyebrow,
}: SectionHeaderProps) {
  const { dictionary } = useTranslations();

  return (
    <ScrollReveal variant="blur" className={cn("mb-8", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {subtitle}
            </p>
          )}
          <div className="mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </div>

        {viewAllLabel && viewAllHref && (
          <div>
            <Button
              variant="outline"
              className="group shrink-0 border-orange-500/30 text-orange-600 hover:border-orange-500 hover:bg-orange-500/5 dark:text-orange-400"
              render={
                <Link
                  href={viewAllHref}
                  aria-label={viewAllLabel}
                />
              }
            >
              {viewAllLabel}
              <ArrowRightIcon
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                aria-hidden
              />
            </Button>
          </div>
        )}
        {viewAllLabel && !viewAllHref && onViewAll && (
          <div>
            <Button
              variant="outline"
              className="group shrink-0 border-orange-500/30 text-orange-600 hover:border-orange-500 hover:bg-orange-500/5 dark:text-orange-400"
              onClick={onViewAll}
            >
              {viewAllLabel}
              <ArrowRightIcon
                className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                aria-hidden
              />
            </Button>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}

