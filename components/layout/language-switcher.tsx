"use client";

import { LanguagesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import { localeConfig, locales, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { dictionary } = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={dictionary.language.switch}
          />
        }
      >
        <LanguagesIcon className="size-4" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code as Locale)}
            className={locale === code ? "bg-accent" : undefined}
          >
            {localeConfig[code].label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
