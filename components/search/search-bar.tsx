"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "@/hooks/use-translations";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  size?: "default" | "lg";
  showButton?: boolean;
};

export function SearchBar({
  placeholder,
  className,
  size = "default",
  showButton = true,
}: SearchBarProps) {
  const { dictionary } = useTranslations();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const resolvedPlaceholder = placeholder ?? dictionary.search.placeholder;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full gap-2", className)}
      role="search"
    >
      <div className="relative flex-1">
        <SearchIcon
          className="pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-muted-foreground start-3"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={resolvedPlaceholder}
          aria-label={dictionary.search.ariaLabel}
          className={cn(
            "ps-10 rounded-xl transition-all duration-200 focus-visible:border-orange-500/50 focus-visible:ring-orange-500/15",
            size === "lg" && "h-12 text-base md:text-base"
          )}
        />
      </div>
      {showButton && (
        <Button
          type="submit"
          className={cn(
            "shrink-0 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600",
            size === "lg" && "h-12 px-8"
          )}
        >
          {dictionary.search.button}
        </Button>
      )}
    </form>
  );
}
