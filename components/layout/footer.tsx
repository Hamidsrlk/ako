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

export function Footer() {
  const { dictionary } = useTranslations();

  return (
    <footer className="relative border-t border-border/60 bg-gradient-to-b from-background to-muted/50" role="contentinfo">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-32 start-1/4 h-64 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-orange-500/5 to-amber-500/3 blur-3xl" />
        <div className="absolute -top-24 end-1/3 h-48 w-64 rounded-full bg-gradient-to-bl from-orange-500/4 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2.5 font-bold">
              <span className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-lg shadow-orange-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-500/40">
                A
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="font-heading bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-xl">
                AKO
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {dictionary.footer.tagline}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-all duration-200 hover:border-orange-500/30 hover:text-orange-500 hover:shadow-sm hover:shadow-orange-500/10">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-all duration-200 hover:border-orange-500/30 hover:text-orange-500 hover:shadow-sm hover:shadow-orange-500/10">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.11 2.525c.636-.247 1.363-.416 2.427-.465C8.83 2.013 9.165 2 11.992 2h.323zm0 2c-2.337 0-2.665.011-3.645.053-.935.04-1.44.199-1.777.33a2.8 2.8 0 00-1.038.673 2.8 2.8 0 00-.673 1.038c-.131.337-.29.842-.33 1.777-.042.98-.053 1.308-.053 3.645 0 2.337.011 2.665.053 3.645.04.935.199 1.44.33 1.777a2.8 2.8 0 00.673 1.038 2.8 2.8 0 001.038.673c.337.131.842.29 1.777.33.98.042 1.308.053 3.645.053 2.337 0 2.665-.011 3.645-.053.935-.04 1.44-.199 1.777-.33a2.8 2.8 0 001.038-.673 2.8 2.8 0 00.673-1.038c.131-.337.29-.842.33-1.777.042-.98.053-1.308.053-3.645 0-2.337-.011-2.665-.053-3.645-.04-.935-.199-1.44-.33-1.777a2.8 2.8 0 00-.673-1.038 2.8 2.8 0 00-1.038-.673c-.337-.131-.842-.29-1.777-.33-.98-.042-1.308-.053-3.645-.053zm0 5a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.115-3.5a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z"/></svg>
              </span>
              <span className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-background text-muted-foreground transition-all duration-200 hover:border-orange-500/30 hover:text-orange-500 hover:shadow-sm hover:shadow-orange-500/10">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              {dictionary.footer.explore}
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                    {dictionary.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              {dictionary.footer.company}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                  {dictionary.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                  {dictionary.footer.careers}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                  {dictionary.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              {dictionary.footer.legal}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                  {dictionary.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                  {dictionary.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                >
                  <span className="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-4" />
                  {dictionary.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative my-12">
          <Separator />
          <span className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-[10px] uppercase tracking-widest text-muted-foreground/40">
            Connect
          </span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md space-y-3">
            <h3 className="text-sm font-semibold">
              {dictionary.footer.newsletter}
            </h3>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder={dictionary.footer.newsletterPlaceholder}
                  aria-label={dictionary.footer.newsletterPlaceholder}
                  className="h-10 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus-visible:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500/15"
                />
              </div>
              <Button
                type="submit"
                className="h-10 shrink-0 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 text-sm text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/30"
              >
                {dictionary.footer.subscribe}
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden h-4 w-px bg-border/60 lg:block" />
            <p>
              © {new Date().getFullYear()} AKO.{" "}
              <span className="text-muted-foreground/70">{dictionary.footer.rights}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
