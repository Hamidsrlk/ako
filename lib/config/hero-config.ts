"use client";

export type HeroConfig = {
  image: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  rating: {
    value: string;
    label: string;
  };
  stats: {
    recipes: { value: string; label: string };
    restaurants: { value: string; label: string };
    members: { value: string; label: string };
  };
};

const CONFIG_KEY = "ako:hero-config";

const CHANGE_EVENT = "ako:hero-config-change";

export const defaultHeroConfig: HeroConfig = {
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
  badge: "Welcome to AKO",
  title: "Discover",
  titleHighlight: "Amazing Flavors",
  subtitle:
    "Share recipes, review restaurants, sell homemade food, and discover new meals with a vibrant food community.",
  rating: {
    value: "4.9",
    label: "Rating",
  },
  stats: {
    recipes: { value: "12K+", label: "Recipes" },
    restaurants: { value: "3.2K", label: "Restaurants" },
    members: { value: "89K", label: "Active members" },
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
