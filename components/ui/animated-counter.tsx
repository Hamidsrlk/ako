"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "+",
  className,
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (value - start) * eased);
      el!.textContent = `${current.toLocaleString()}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      0{suffix}
    </span>
  );
}
