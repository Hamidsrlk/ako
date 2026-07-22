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

export default function AdminPage() {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return (
      <div className="flex min-h-screen items-center justify-center">
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

  useEffect(() => {
    setConfig(readHeroConfig());
  }, []);

  const update = useCallback(
    <K extends keyof HeroConfig>(key: K, value: HeroConfig[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
      setSaved(false);
    },
    [],
  );

  const updateRating = useCallback(
    <K extends keyof HeroConfig["rating"]>(key: K, value: string) => {
      setConfig((prev) => ({
        ...prev,
        rating: { ...prev.rating, [key]: value },
      }));
      setSaved(false);
    },
    [],
  );

  const updateStats = useCallback(
    <K extends keyof HeroConfig["stats"]>(
      statKey: K,
      field: "value" | "label",
      value: string,
    ) => {
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
            <CardTitle>Background Image</CardTitle>
            <CardDescription>
              Full-bleed background image for the hero section.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Image URL
              </label>
              <Input
                value={config.image}
                onChange={(e) => update("image", e.target.value)}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
            {config.image && (
              <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
                <img
                  src={config.image}
                  alt="Hero preview"
                  className="size-full object-cover"
                />
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Text Content</CardTitle>
            <CardDescription>
              Main heading, subtitle, and badge text.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Badge</label>
              <Input
                value={config.badge}
                onChange={(e) => update("badge", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Title</label>
              <Input
                value={config.title}
                onChange={(e) => update("title", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Title Highlight
              </label>
              <Input
                value={config.titleHighlight}
                onChange={(e) => update("titleHighlight", e.target.value)}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Subtitle</label>
              <textarea
                value={config.subtitle}
                onChange={(e) => update("subtitle", e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rating Pill</CardTitle>
            <CardDescription>
              Floating rating badge displayed on the hero image.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Rating Value
              </label>
              <Input
                value={config.rating.value}
                onChange={(e) => updateRating("value", e.target.value)}
                placeholder="4.9"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Rating Label
              </label>
              <Input
                value={config.rating.label}
                onChange={(e) => updateRating("label", e.target.value)}
                placeholder="Rating"
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
            {(
              Object.keys(defaultHeroConfig.stats) as Array<
                keyof HeroConfig["stats"]
              >
            ).map((statKey) => (
              <div key={statKey} className="space-y-2">
                <p className="text-sm font-medium capitalize">{statKey}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-xs text-muted-foreground">
                      Value
                    </label>
                    <Input
                      value={config.stats[statKey].value}
                      onChange={(e) =>
                        updateStats(statKey, "value", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-muted-foreground">
                      Label
                    </label>
                    <Input
                      value={config.stats[statKey].label}
                      onChange={(e) =>
                        updateStats(statKey, "label", e.target.value)
                      }
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
