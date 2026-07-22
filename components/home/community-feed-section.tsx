"use client";

import { CommunityPostCard } from "@/components/cards/community-post-card";
import { SectionHeader } from "@/components/home/section-header";
import { StaggerGrid } from "@/components/motion/stagger-grid";
import { useTranslations } from "@/hooks/use-translations";
import { communityPosts } from "@/lib/data/mock-data";
export function CommunityFeedSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="community"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="community-heading"
    >
      <SectionHeader
        title={dictionary.community.title}
        subtitle={dictionary.community.subtitle}
        viewAllLabel={dictionary.community.viewAll}
        eyebrow="Community"
      />

      <StaggerGrid
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        staggerMs={100}
      >
        {communityPosts.map((post) => (
          <CommunityPostCard key={post.id} post={post} />
        ))}
      </StaggerGrid>
    </section>
  );
}
