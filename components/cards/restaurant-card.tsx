"use client";

import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { motion } from "framer-motion";

export function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg dark:shadow-black/10"
    >
      <Link
        href={`/restaurants/${restaurant.slug || restaurant.id}`}
        className="block"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <OptimizedImage
            src={restaurant.image}
            alt={restaurant.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors">
            {restaurant.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {restaurant.cuisine}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm text-muted-foreground">{restaurant.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {restaurant.priceLevel}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

