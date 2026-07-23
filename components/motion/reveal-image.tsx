"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealImageProps = {
  children: React.ReactNode;
  className?: string;
};

export function RevealImage({ children, className }: RevealImageProps) {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "size-full transition-all duration-[1.2s] ease-out will-change-transform",
          revealed ? "scale-100" : "scale-110"
        )}
      >
        {children}
      </div>
    </div>
  );
}
