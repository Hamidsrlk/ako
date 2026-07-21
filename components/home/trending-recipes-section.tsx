"use client";

import { RecipeCard } from "@/components/cards/recipe-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { trendingRecipes } from "@/lib/data/mock-data";
import { motion } from "framer-motion";

export function TrendingRecipesSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="trending-recipes"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="trending-recipes-heading"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title={dictionary.trending.title}
          subtitle={dictionary.trending.subtitle}
          viewAllLabel={dictionary.trending.viewAll}
          eyebrow="Trending"
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
          {trendingRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </StaggerGrid>
      </motion.div>
    </section>
  );
}
