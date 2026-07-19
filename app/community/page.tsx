"use client";

import { CommunityPostCard } from "@/components/cards/community-post-card";
import { PageLayout } from "@/components/layout/page-layout";
import { SectionHeader } from "@/components/home/section-header";
import { useTranslations } from "@/hooks/use-translations";
import { communityPosts } from "@/lib/data/mock-data";

export default function CommunityPage() {
  const { dictionary } = useTranslations();
  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title={dictionary.community.title} subtitle={dictionary.community.subtitle} eyebrow="All" />
        <div className="grid gap-6 lg:grid-cols-3">
          {communityPosts.map((post) => (
            <CommunityPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
