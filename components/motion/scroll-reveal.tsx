"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "blur"
  | "none";

const variantConfig: Record<
  ScrollRevealVariant,
  { initial: string; animate: string }
> = {
  "fade-up": {
    initial: "opacity-0 translate-y-10",
    animate: "animate-fade-in-up",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-10",
    animate: "animate-fade-in-down",
  },
  "fade-left": {
    initial: "opacity-0 -translate-x-10 rtl:translate-x-10",
    animate: "animate-fade-in-right",
  },
  "fade-right": {
    initial: "opacity-0 translate-x-10 rtl:-translate-x-10",
    animate: "animate-fade-in-left",
  },
  scale: {
    initial: "opacity-0 scale-90",
    animate: "animate-scale-in",
  },
  blur: {
    initial: "opacity-0 translate-y-4 scale-95 blur-sm",
    animate: "animate-blur-in",
  },
  none: {
    initial: "opacity-0",
    animate: "animate-fade-in-up",
  },
};

type DirectionClassMap = Record<string, string>;
const directionClass: DirectionClassMap = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10 rtl:-translate-x-10",
  right: "-translate-x-10 rtl:translate-x-10",
  none: "",
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  variant?: ScrollRevealVariant;
  once?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction,
  variant: variantProp,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const usingVariant = variantProp !== undefined;
  const resolvedVariant: ScrollRevealVariant = usingVariant
    ? (variantProp as ScrollRevealVariant)
    : ((direction as ScrollRevealVariant) ?? "fade-up");

  const config =
    usingVariant || (direction && direction !== "none")
      ? variantConfig[resolvedVariant]
      : {
          initial: `opacity-0 ${directionClass[direction ?? "up"]}`,
          animate: "animate-fade-in-up",
        };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const initialClasses = config.initial.split(" ").filter(Boolean);
    const animateClasses = config.animate.split(" ").filter(Boolean);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.remove(...initialClasses);
          el.classList.add(...animateClasses);
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove(...animateClasses);
          el.classList.add(...initialClasses);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, config, once]);

  return (
    <div ref={ref} className={cn(config.initial, className)}>
      {children}
    </div>
  );
}
