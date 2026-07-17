"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "@/hooks/use-translations";

const exploreLinks = [
  { key: "recipes" as const, href: "#recipes" },
  { key: "restaurants" as const, href: "#restaurants" },
  { key: "community" as const, href: "#community" },
  { key: "marketplace" as const, href: "#marketplace" },
];

export function Footer() {
  const { dictionary } = useTranslations();

  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="flex size-9 items-center justify-center rounded-xl bg-orange-500 text-lg text-white">
                A
              </span>
              <span className="text-xl">AKO</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">
              {dictionary.footer.explore}
            </h3>
            <ul className="space-y-2">
              {exploreLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-orange-600 dark:hover:text-orange-400"
                  >
                    {dictionary.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">
              {dictionary.footer.company}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {dictionary.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {dictionary.footer.careers}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {dictionary.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">
              {dictionary.footer.legal}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {dictionary.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {dictionary.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {dictionary.footer.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md space-y-2">
            <h3 className="text-sm font-semibold">
              {dictionary.footer.newsletter}
            </h3>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={dictionary.footer.newsletterPlaceholder}
                aria-label={dictionary.footer.newsletterPlaceholder}
                className="h-9 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
              <Button
                type="submit"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                {dictionary.footer.subscribe}
              </Button>
            </form>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AKO. {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
