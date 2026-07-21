"use client";

import { CategoryCard } from "@/components/cards/category-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { foodCategories } from "@/lib/data/mock-data";
import { motion } from "framer-motion";

export function CategoriesSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="categories-heading"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title={dictionary.categories.title}
          subtitle={dictionary.categories.subtitle}
          viewAllLabel={dictionary.categories.viewAll}
          eyebrow="Browse"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StaggerGrid
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          staggerMs={70}
        >
          {foodCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <CategoryCard key={category.id} category={category} />
            </motion.div>
          ))}
        </StaggerGrid>
      </motion.div>
    </section>
  );
}
