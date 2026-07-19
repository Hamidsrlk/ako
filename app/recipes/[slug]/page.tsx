import { notFound } from "next/navigation";
import { trendingRecipes } from "@/lib/data/mock-data";
import RecipeDetailClient from "./client";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = trendingRecipes.find((r) => r.slug === slug);
  if (!recipe) notFound();
  return <RecipeDetailClient recipe={recipe} />;
}
