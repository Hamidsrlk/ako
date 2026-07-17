export const locales = ["fa", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeConfig: Record<
  Locale,
  { label: string; dir: "rtl" | "ltr"; htmlLang: string }
> = {
  fa: { label: "فارسی", dir: "rtl", htmlLang: "fa" },
  en: { label: "English", dir: "ltr", htmlLang: "en" },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
