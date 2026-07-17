"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/use-translations";

function subscribe() {
  return () => {};
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const { dictionary } = useTranslations();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-hidden className="opacity-0">
        <SunIcon className="size-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label={dictionary.theme.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunIcon className="size-4" aria-hidden />
      ) : (
        <MoonIcon className="size-4" aria-hidden />
      )}
    </Button>
  );
}
