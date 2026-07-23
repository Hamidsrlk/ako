"use client";

import { HeartIcon, MessageCircleIcon, Share2Icon } from "lucide-react";
import Link from "next/link";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealImage } from "@/components/motion/reveal-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { CommunityPost } from "@/lib/data/types";

type CommunityPostCardProps = {
  post: CommunityPost;
};

export function CommunityPostCard({ post }: CommunityPostCardProps) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const content = locale === "fa" ? post.contentFa : post.contentEn;
  const timestamp = locale === "fa" ? post.timestampFa : post.timestampEn;
  const tag = locale === "fa" ? post.tagFa : post.tagEn;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-foreground/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/community/${post.id}`}
        className="block"
      >
        {post.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <RevealImage className="absolute inset-0">
              <OptimizedImage
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </RevealImage>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        ) : (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-orange-500/10 to-amber-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-16 rounded-full bg-orange-500/10 text-2xl font-bold text-orange-500/30 flex items-center justify-center">
                {post.author[0]}
              </div>
            </div>
          </div>
        )}

        <div className="p-4">
          <div className="flex items-center gap-2.5">
            <Avatar size="sm">
              <AvatarImage src={post.authorAvatar} alt={post.author} />
              <AvatarFallback>{post.author[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-foreground">
              {post.author}
            </span>
            <span className="text-xs text-muted-foreground/50">&bull;</span>
            <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-600 dark:text-orange-400">
              {tag}
            </span>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {content}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <HeartIcon className="size-3.5 text-orange-500" aria-hidden />
                {post.likes.toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MessageCircleIcon className="size-3.5" aria-hidden />
                {post.comments.toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Share2Icon className="size-3.5" aria-hidden />
                {post.shares.toLocaleString()}
              </span>
            </div>
            <span className="text-xs text-muted-foreground/60">{timestamp}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
