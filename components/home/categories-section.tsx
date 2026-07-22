"use client";

import { CategoryCard } from "@/components/cards/category-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { foodCategories } from "@/lib/data/mock-data";
export function CategoriesSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="categories-heading"
    >
      <SectionHeader
        title={dictionary.categories.title}
        subtitle={dictionary.categories.subtitle}
        viewAllLabel={dictionary.categories.viewAll}
        eyebrow="Browse"
      />

      <StaggerGrid
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        staggerMs={70}
      >
        {foodCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </StaggerGrid>
    </section>
  );
}
