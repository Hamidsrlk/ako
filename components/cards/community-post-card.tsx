"use client";

import {
  HeartIcon,
  MessageCircleIcon,
  Share2Icon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLocale, useTranslations } from "@/hooks/use-translations";
import type { CommunityPost } from "@/lib/data/types";
import { cn } from "@/lib/utils";

type CommunityPostCardProps = {
  post: CommunityPost;
  className?: string;
};

export function CommunityPostCard({ post, className }: CommunityPostCardProps) {
  const { locale } = useLocale();
  const { dictionary } = useTranslations();

  const content = locale === "fa" ? post.contentFa : post.contentEn;
  const timestamp = locale === "fa" ? post.timestampFa : post.timestampEn;
  const tag = locale === "fa" ? post.tagFa : post.tagEn;

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg hover:ring-orange-500/10",
        className
      )}
    >
      <CardHeader className="flex-row items-start gap-3 space-y-0">
        <Avatar>
          <AvatarImage src={post.authorAvatar} alt={post.author} />
          <AvatarFallback>{post.author[0]}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{post.author}</span>
            <Badge variant="secondary" className="text-xs">
              {tag}
            </Badge>
          </div>
          <time className="text-xs text-muted-foreground">{timestamp}</time>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="leading-relaxed">{content}</p>

        {post.image && (
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <OptimizedImage
              src={post.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        )}

        <div
          className="flex items-center gap-4 border-t pt-3 text-sm text-muted-foreground"
          role="group"
          aria-label="Post engagement"
        >
          <span className="inline-flex items-center gap-1.5">
            <HeartIcon className="size-4" aria-hidden />
            {post.likes.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}{" "}
            {dictionary.community.likes}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircleIcon className="size-4" aria-hidden />
            {post.comments}{" "}
            {dictionary.community.comments}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Share2Icon className="size-4" aria-hidden />
            {post.shares}{" "}
            {dictionary.community.shares}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
