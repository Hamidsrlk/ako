"use client";

import { CommunityPostCard } from "@/components/cards/community-post-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { communityPosts } from "@/lib/data/mock-data";
import { motion } from "framer-motion";

export function CommunityFeedSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="community"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="community-heading"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          title={dictionary.community.title}
          subtitle={dictionary.community.subtitle}
          viewAllLabel={dictionary.community.viewAll}
          eyebrow="Community"
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
          {communityPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <CommunityPostCard post={post} />
            </motion.div>
          ))}
        </StaggerGrid>
      </motion.div>
    </section>
  );
}
