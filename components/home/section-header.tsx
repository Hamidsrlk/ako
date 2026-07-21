"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/use-translations";
import { motion } from "framer-motion";

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
    <ScrollReveal className={cn("mb-10", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </motion.div>

        {viewAllLabel && viewAllHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>
        )}
        {viewAllLabel && !viewAllHref && onViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>
        )}
      </div>
    </ScrollReveal>
  );
}

