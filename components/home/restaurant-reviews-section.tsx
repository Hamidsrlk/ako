"use client";

import { RestaurantCard } from "@/components/cards/restaurant-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { featuredRestaurants } from "@/lib/data/mock-data";
import { motion } from "framer-motion";

export function RestaurantReviewsSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="restaurants"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="restaurants-heading"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title={dictionary.restaurants.title}
          subtitle={dictionary.restaurants.subtitle}
          viewAllLabel={dictionary.restaurants.viewAll}
          eyebrow="Popular"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StaggerGrid
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerMs={100}
        >
          {featuredRestaurants.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <RestaurantCard restaurant={restaurant} />
            </motion.div>
          ))}
        </StaggerGrid>
      </motion.div>
    </section>
  );
}
