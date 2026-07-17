import type { Locale } from "@/lib/i18n/config";
import en from "@/lib/i18n/dictionaries/en";
import fa from "@/lib/i18n/dictionaries/fa";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { fa, en };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}

export function getDictionarySync(locale: Locale): Dictionary {
  return dictionaries[locale];
}
