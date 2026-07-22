"use client";

import { ChefHatIcon, SparklesIcon } from "lucide-react";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

export function CtaBanner() {
  const { dictionary } = useTranslations();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <ScrollReveal direction="none">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-14 text-background sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.705_0.189_47.604_/_0.35),transparent_50%)]" />
          <div className="pointer-events-none absolute -end-10 -top-10 size-40 animate-float rounded-full bg-orange-500/20 blur-2xl" />
          <div
            className="pointer-events-none absolute -bottom-8 start-1/3 size-32 animate-float rounded-full bg-amber-400/15 blur-2xl"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <SparklesIcon className="size-4 text-orange-400" aria-hidden />
              {dictionary.cta.badge}
            </span>
            <h2 className="font-heading mt-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              {dictionary.cta.title}
            </h2>
            <p className="mt-3 text-base text-white/70">{dictionary.cta.subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="min-w-[180px] bg-orange-500 text-white hover:bg-orange-600"
              >
                <ChefHatIcon className="size-4" aria-hidden />
                {dictionary.cta.primary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="min-w-[180px] border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                {dictionary.cta.secondary}
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
