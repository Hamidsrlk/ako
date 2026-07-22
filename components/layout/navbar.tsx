"use client";

import {
  ChefHatIcon,
  MenuIcon,
  StoreIcon,
  UsersIcon,
  UtensilsCrossedIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SearchBar } from "@/components/search/search-bar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "recipes" as const, href: "/recipes", icon: ChefHatIcon },
  {
    key: "restaurants" as const,
    href: "/restaurants",
    icon: UtensilsCrossedIcon,
  },
  { key: "community" as const, href: "/community", icon: UsersIcon },
  { key: "marketplace" as const, href: "/marketplace", icon: StoreIcon },
];

export function Navbar() {
  const { dictionary } = useTranslations();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-lg shadow-orange-500/5 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-opacity duration-700",
          scrolled ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute -top-24 start-1/4 h-36 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-orange-500/8 to-amber-500/5 blur-3xl" />
        <div className="absolute -top-12 end-1/3 h-24 w-48 rounded-full bg-gradient-to-bl from-orange-500/6 to-transparent blur-2xl" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-orange-500 focus:px-4 focus:py-2 focus:text-white"
      >
        {dictionary.nav.skipToContent}
      </a>

      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-4 px-4 transition-all sm:px-6 lg:px-8",
          scrolled ? "h-14" : "h-16"
        )}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 font-bold tracking-tight"
          aria-label="AKO Home"
        >
          <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-lg shadow-orange-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-orange-500/40">
            A
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="font-heading hidden bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-xl sm:inline">
            AKO
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ key, href, icon: Icon }) => (
            <li key={key}>
              <Link
                href={href}
                className="group relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-orange-500/8 hover:text-foreground"
              >
                <Icon
                  className="size-4 text-orange-500/60 transition-all duration-300 group-hover:text-orange-500 group-hover:drop-shadow-[0_1px_4px_rgba(249,115,22,0.35)]"
                  aria-hidden
                />
                {dictionary.nav[key]}
                <span className="absolute inset-x-3 -bottom-px h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden flex-1 justify-center px-4 md:flex lg:max-w-md xl:max-w-lg">
          <SearchBar showButton={false} className="max-w-md" />
        </div>

        <div className="ms-auto flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />

          <div className="hidden items-center gap-2 sm:flex">
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-200 hover:bg-orange-500/8 hover:text-orange-600"
            >
              {dictionary.nav.signIn}
            </Button>
            <Button
              size="sm"
              className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/35"
            >
              {dictionary.nav.signUp}
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="lg:hidden"
                  aria-label={dictionary.nav.menu}
                />
              }
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l p-0">
              <SheetHeader className="border-b border-border/50 px-6 py-5">
                <SheetTitle className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-sm text-white shadow-md shadow-orange-500/25">
                    A
                  </span>
                  <span className="font-heading text-lg">AKO</span>
                </SheetTitle>
              </SheetHeader>

              <div className="px-6 py-4">
                <SearchBar />
              </div>

              <ul className="flex flex-col gap-0.5 px-4">
                {navLinks.map(({ key, href, icon: Icon }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-all duration-200 hover:bg-orange-500/8 hover:text-orange-600"
                    >
                      <span className="flex size-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      {dictionary.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-2 border-t border-border/50 p-6">
                <Button
                  variant="outline"
                  className="w-full transition-all duration-200 hover:bg-orange-500/8 hover:text-orange-600 hover:border-orange-500/30"
                >
                  {dictionary.nav.signIn}
                </Button>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/35">
                  {dictionary.nav.signUp}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
