"use client";

import { createContext, useContext } from "react";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type LocaleContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useTranslations() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslations must be used within LocaleProvider");
  }
  return context;
}

export function useLocale() {
  const { locale, setLocale, dir } = useTranslations();
  return { locale, setLocale, dir };
}
