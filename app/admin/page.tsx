"use client";

import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth/auth-context";
import {
  type HeroConfig,
  defaultHeroConfig,
  readHeroConfig,
  updateHeroConfig,
} from "@/lib/config/hero-config";

type Tab = "en" | "fa";

export default function AdminPage() {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              This page is only accessible to administrators.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return <AdminForm />;
}

function AdminForm() {
  const [config, setConfig] = useState<HeroConfig>(defaultHeroConfig);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<Tab>("en");

  useEffect(() => {
    setConfig(readHeroConfig());
  }, []);

  const update = useCallback(<K extends keyof HeroConfig>(key: K, value: HeroConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }, []);

  const updateLocaleText = useCallback(
    (locale: Tab, field: string, value: string) => {
      setConfig((prev) => ({
        ...prev,
        [locale]: { ...prev[locale], [field]: value },
      }));
      setSaved(false);
    },
    [],
  );

  const updateStat = useCallback(
    (statKey: keyof HeroConfig["stats"], field: "value" | "en" | "fa", value: string) => {
      setConfig((prev) => ({
        ...prev,
        stats: {
          ...prev.stats,
          [statKey]: { ...prev.stats[statKey], [field]: value },
        },
      }));
      setSaved(false);
    },
    [],
  );

  const updateImage = useCallback((index: number, value: string) => {
    setConfig((prev) => {
      const images = [...prev.images];
      images[index] = value;
      return { ...prev, images };
    });
    setSaved(false);
  }, []);

  const addImage = useCallback(() => {
    setConfig((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
    setSaved(false);
  }, []);

  const removeImage = useCallback((index: number) => {
    setConfig((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setSaved(false);
  }, []);

  const handleSave = useCallback(async () => {
    setSaving(true);
    updateHeroConfig(config);
    try {
      await fetch("/api/admin/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
    } catch {
      // server persistence is optional
    }
    setSaving(false);
    setSaved(true);
  }, [config]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">Hero Banner</h1>
          <p className="mt-1 text-muted-foreground">
            Configure the homepage hero/banner section.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Background Images</CardTitle>
            <CardDescription>
              Slideshow images for the hero banner. Add multiple images to enable
              the crossfade slideshow.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {config.images.map((src, i) => (
              <div key={i} className="space-y-2 rounded-lg border bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Image {i + 1}</label>
                  {config.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="text-xs text-red-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <Input
                  value={src}
                  onChange={(e) => updateImage(i, e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                />
                {src && (
                  <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={`Slide ${i + 1} preview`}
                      className="size-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={addImage}
              className="w-full"
            >
              + Add Image
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Text Content</CardTitle>
            <CardDescription>
              Main heading, subtitle, and badge text in each language.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2 border-b pb-3">
              <button
                type="button"
                onClick={() => setTab("en")}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                  tab === "en"
                    ? "bg-orange-500 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setTab("fa")}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                  tab === "fa"
                    ? "bg-orange-500 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                فارسی
              </button>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Badge</label>
              <Input
                value={config[tab].badge}
                onChange={(e) => updateLocaleText(tab, "badge", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <Input
                value={config[tab].title}
                onChange={(e) => updateLocaleText(tab, "title", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Title Highlight</label>
              <Input
                value={config[tab].titleHighlight}
                onChange={(e) => updateLocaleText(tab, "titleHighlight", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Subtitle</label>
              <textarea
                value={config[tab].subtitle}
                onChange={(e) => updateLocaleText(tab, "subtitle", e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rating</CardTitle>
            <CardDescription>
              Floating rating badge displayed on the hero image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Rating Value</label>
              <Input
                value={config.ratingValue}
                onChange={(e) => update("ratingValue", e.target.value)}
                placeholder="4.9"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stats</CardTitle>
            <CardDescription>
              Three statistics displayed at the bottom of the hero.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {(Object.keys(defaultHeroConfig.stats) as Array<keyof HeroConfig["stats"]>).map((statKey) => (
              <div key={statKey} className="space-y-2 rounded-lg border bg-muted/30 p-4">
                <p className="text-sm font-medium capitalize">{statKey}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-xs text-muted-foreground">Value</label>
                    <Input
                      value={config.stats[statKey].value}
                      onChange={(e) => updateStat(statKey, "value", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-muted-foreground">English</label>
                    <Input
                      value={config.stats[statKey].en}
                      onChange={(e) => updateStat(statKey, "en", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-muted-foreground">فارسی</label>
                    <Input
                      value={config.stats[statKey].fa}
                      onChange={(e) => updateStat(statKey, "fa", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            onClick={handleSave}
            disabled={saving}
            className="min-w-[120px]"
          >
            {saving ? "Saving..." : "Save Changes"}
          </Button>
          {saved && (
            <span className="text-sm text-green-600 dark:text-green-400">
              Saved successfully
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
