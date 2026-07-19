import { notFound } from "next/navigation";
import { foodCategories, trendingRecipes } from "@/lib/data/mock-data";
import CategoryDetailClient from "./client";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = foodCategories.find((c) => c.slug === slug);
  if (!category) notFound();
  // مقادیر مرتبط رو بر اساس tag پیدا می‌کنیم
  const related = trendingRecipes.filter((r) =>
    r.tags.some((t) => t.toLowerCase().includes(slug) || slug.includes(t.toLowerCase()))
  );
  return <CategoryDetailClient category={category} recipes={related} />;
}
