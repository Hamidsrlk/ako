"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
};

const directionClass: Record<
  NonNullable<ScrollRevealProps["direction"]>,
  string
> = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10 rtl:-translate-x-10",
  right: "-translate-x-10 rtl:translate-x-10",
  none: "",
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("animate-fade-in-up");
          el.classList.remove("opacity-0", directionClass[direction]);
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("animate-fade-in-up");
          el.classList.add("opacity-0", directionClass[direction]);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, once]);

  return (
    <div
      ref={ref}
      className={cn("opacity-0", directionClass[direction], className)}
    >
      {children}
    </div>
  );
}
