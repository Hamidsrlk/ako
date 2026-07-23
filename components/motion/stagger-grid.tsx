"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import type { ScrollRevealVariant } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type StaggerGridProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  staggerMs?: number;
  variant?: ScrollRevealVariant;
};

export function StaggerGrid({
  children,
  className,
  itemClassName,
  staggerMs = 80,
  variant,
}: StaggerGridProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {items.map((child, index) => (
        <ScrollReveal
          key={index}
          delay={index * staggerMs}
          variant={variant}
          className={cn(itemClassName)}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
