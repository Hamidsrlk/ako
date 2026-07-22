"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/hooks/use-translations";

const exploreLinks = [
  { key: "recipes" as const, href: "/recipes" },
  { key: "restaurants" as const, href: "/restaurants" },
  { key: "community" as const, href: "/community" },
  { key: "marketplace" as const, href: "/marketplace" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
];

export function Footer() {
  const { dictionary } = useTranslations();

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/40" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 sm:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2.5 font-bold">
              <span className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-md shadow-orange-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                <span className="relative z-10">A</span>
                <span className="absolute inset-0 rounded-xl bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="font-heading text-xl text-foreground/90">
                AKO
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {dictionary.footer.tagline}
            </p>
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60 transition-colors duration-200 hover:text-orange-500"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              {dictionary.footer.explore}
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="size-1 rounded-full bg-orange-500/0 transition-all duration-300 group-hover:bg-orange-500" />
                    {dictionary.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              {dictionary.footer.company}
            </h3>
            <ul className="space-y-3">
              {["about", "careers", "contact"].map((key) => (
                <li key={key}>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="size-1 rounded-full bg-orange-500/0 transition-all duration-300 group-hover:bg-orange-500" />
                    {dictionary.footer[key as keyof typeof dictionary.footer]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              {dictionary.footer.legal}
            </h3>
            <ul className="space-y-3">
              {["privacy", "terms", "cookies"].map((key) => (
                <li key={key}>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <span className="size-1 rounded-full bg-orange-500/0 transition-all duration-300 group-hover:bg-orange-500" />
                    {dictionary.footer[key as keyof typeof dictionary.footer]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md space-y-3">
            <h3 className="text-sm font-semibold text-foreground/80">
              {dictionary.footer.newsletter}
            </h3>
            <form
              className="flex gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={dictionary.footer.newsletterPlaceholder}
                aria-label={dictionary.footer.newsletterPlaceholder}
                className="h-10 flex-1 rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500/15"
              />
              <Button
                type="submit"
                className="h-10 shrink-0 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 text-sm text-white shadow-md shadow-orange-500/15 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/25"
              >
                {dictionary.footer.subscribe}
              </Button>
            </form>
          </div>

          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} AKO.{" "}
            {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
