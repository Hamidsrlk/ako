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
          ? "border-b border-border/60 bg-background/85 shadow-sm shadow-orange-500/5 backdrop-blur-xl"
          : "border-b border-transparent bg-background/50 backdrop-blur-lg"
      )}
    >
      {/* Top highlight line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-orange-500 focus:px-4 focus:py-2.5 focus:text-white focus:shadow-lg"
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
          <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg text-white shadow-md shadow-orange-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/40">
            <span className="relative z-10">A</span>
            <span className="absolute inset-0 rounded-xl bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="font-heading hidden text-xl text-foreground/90 sm:inline">
            AKO
          </span>
        </Link>

        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ key, href, icon: Icon }) => (
            <li key={key}>
              <Link
                href={href}
                className="group relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-orange-500/8 hover:text-foreground"
              >
                <Icon
                  className="size-4 text-orange-500/60 transition-all duration-200 group-hover:text-orange-500"
                  aria-hidden
                />
                <span>{dictionary.nav[key]}</span>
                <span className="absolute inset-x-3 -bottom-px h-0.5 origin-center scale-x-0 rounded-full bg-gradient-to-r from-orange-500/80 to-amber-500/80 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden flex-1 justify-center px-4 md:flex lg:max-w-md xl:max-w-lg">
          <SearchBar showButton={false} className="max-w-md" />
        </div>

        <div className="ms-auto flex items-center gap-0.5">
          <LanguageSwitcher />
          <ThemeToggle />

          <div className="hidden items-center gap-2 sm:flex sm:ms-2">
            <Button
              variant="ghost"
              size="sm"
              className="transition-all duration-200 hover:bg-orange-500/8 hover:text-orange-600"
            >
              {dictionary.nav.signIn}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-500/30"
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
            <SheetContent side="right" className="flex w-full max-w-sm flex-col border-l p-0">
              <SheetHeader className="border-b border-border/50 px-6 py-5">
                <SheetTitle className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-sm text-white shadow-sm">
                    A
                  </span>
                  <span className="font-heading text-lg">AKO</span>
                </SheetTitle>
              </SheetHeader>

              <div className="border-b border-border/50 px-6 py-4">
                <SearchBar />
              </div>

              <ul className="flex-1 space-y-0.5 px-4 py-3">
                {navLinks.map(({ key, href, icon: Icon }) => (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3.5 rounded-xl px-3 py-3 text-base font-medium transition-all duration-200 hover:bg-orange-500/8 hover:text-orange-600"
                    >
                      <span className="flex size-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      {dictionary.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2.5 border-t border-border/50 px-6 py-5">
                <Button
                  variant="outline"
                  className="w-full transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600"
                >
                  {dictionary.nav.signIn}
                </Button>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg">
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
