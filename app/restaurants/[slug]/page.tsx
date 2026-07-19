import { notFound } from "next/navigation";
import { featuredRestaurants } from "@/lib/data/mock-data";
import RestaurantDetailClient from "./client";

export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const restaurant = featuredRestaurants.find((r) => r.slug === slug);
  if (!restaurant) notFound();
  return <RestaurantDetailClient restaurant={restaurant} />;
}
