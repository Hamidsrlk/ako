"use client";

import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";

import { LocaleContext } from "@/hooks/use-translations";
import {
  defaultLocale,
  isValidLocale,
  localeConfig,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionarySync } from "@/lib/i18n/get-dictionary";

const STORAGE_KEY = "ako-locale";
const LOCALE_CHANGE_EVENT = "ako-locale-change";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored && isValidLocale(stored) ? stored : defaultLocale;
}

function subscribeLocale(onStoreChange: () => void) {
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readStoredLocale,
    () => defaultLocale
  );

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }, []);

  useEffect(() => {
    const { dir, htmlLang } = localeConfig[locale];
    document.documentElement.lang = htmlLang;
    document.documentElement.dir = dir;
  }, [locale]);

  const value = useMemo(() => {
    const { dir } = localeConfig[locale];
    return {
      locale,
      dir,
      dictionary: getDictionarySync(locale),
      setLocale,
    };
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
