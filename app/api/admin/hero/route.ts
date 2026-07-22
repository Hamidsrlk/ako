import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

import type { HeroConfig } from "@/lib/config/hero-config";
import { defaultHeroConfig } from "@/lib/config/hero-config";

const CONFIG_PATH = path.join(process.cwd(), "data", "hero-config.json");

function readFile(): HeroConfig | null {
  try {
    if (!fs.existsSync(CONFIG_PATH)) return null;
    return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8")) as HeroConfig;
  } catch {
    return null;
  }
}

function writeFile(config: HeroConfig) {
  const dir = path.dirname(CONFIG_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}

export async function GET() {
  const saved = readFile();
  return NextResponse.json(saved ?? defaultHeroConfig);
}

export async function PUT(request: NextRequest) {
  try {
    const body = (await request.json()) as HeroConfig;
    if (!body.image || !body.title) {
      return NextResponse.json(
        { error: "image and title are required" },
        { status: 400 },
      );
    }
    writeFile(body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "invalid JSON body" },
      { status: 400 },
    );
  }
}
