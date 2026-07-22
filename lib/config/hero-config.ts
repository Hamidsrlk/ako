"use client";

type LocaleText = {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
};

type StatConfig = {
  value: string;
  en: string;
  fa: string;
};

export type HeroConfig = {
  images: string[];
  ratingValue: string;
  en: LocaleText;
  fa: LocaleText;
  stats: {
    recipes: StatConfig;
    restaurants: StatConfig;
    members: StatConfig;
  };
};

const CONFIG_KEY = "ako:hero-config";

const CHANGE_EVENT = "ako:hero-config-change";

export const defaultHeroConfig: HeroConfig = {
  images: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1600&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600&q=80",
  ],
  ratingValue: "4.9",
  en: {
    badge: "Welcome to AKO",
    title: "Discover",
    titleHighlight: "Amazing Flavors",
    subtitle:
      "Share recipes, review restaurants, sell homemade food, and discover new meals with a vibrant food community.",
  },
  fa: {
    badge: "به AKO خوش آمدید",
    title: "کشف",
    titleHighlight: "طعم‌های شگفت‌انگیز",
    subtitle:
      "دستور پخت به اشتراک بگذارید، رستوران‌ها را نقد کنید، غذای خانگی بفروشید و غذاهای جدید کشف کنید.",
  },
  stats: {
    recipes: { value: "12K+", en: "Recipes", fa: "دستور پخت" },
    restaurants: { value: "3.2K", en: "Restaurants", fa: "رستوران" },
    members: { value: "89K", en: "Active members", fa: "عضو فعال" },
  },
};

let cachedRaw = "";
let cachedSnapshot: HeroConfig | null = null;

function readSnapshot(): HeroConfig {
  if (typeof window === "undefined") return defaultHeroConfig;

  try {
    const raw = localStorage.getItem(CONFIG_KEY) ?? "";
    if (raw === cachedRaw && cachedSnapshot) return cachedSnapshot;

    cachedRaw = raw;

    if (!raw) {
      cachedSnapshot = defaultHeroConfig;
      return defaultHeroConfig;
    }

    const parsed = JSON.parse(raw) as Partial<HeroConfig>;

    // Migrate old single-image config
    if (!parsed.images && (parsed as Record<string, unknown>).image) {
      parsed.images = [(parsed as Record<string, unknown>).image as string];
    }

    cachedSnapshot = { ...defaultHeroConfig, ...parsed };
    return cachedSnapshot;
  } catch {
    cachedRaw = "";
    cachedSnapshot = defaultHeroConfig;
    return defaultHeroConfig;
  }
}

function writeSnapshot(config: HeroConfig) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  cachedRaw = "";
  cachedSnapshot = null;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeHeroConfig(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function readHeroConfig(): HeroConfig {
  return readSnapshot();
}

export function updateHeroConfig(config: HeroConfig) {
  writeSnapshot(config);
}
