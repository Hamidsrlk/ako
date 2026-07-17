"use client";

import { CommunityPostCard } from "@/components/cards/community-post-card";
import { SectionHeader } from "@/components/home/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { communityPosts } from "@/lib/data/mock-data";

export function CommunityFeedSection() {
  const { dictionary } = useTranslations();

  return (
    <section
      id="community"
      className="bg-muted/30 py-16"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={dictionary.community.title}
          subtitle={dictionary.community.subtitle}
          viewAllLabel={dictionary.community.viewAll}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {communityPosts.map((post) => (
            <CommunityPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
