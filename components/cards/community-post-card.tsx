"use client";

import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { motion } from "framer-motion";

export function CommunityPostCard({ post }: { post: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-lg dark:shadow-black/10"
    >
      <Link
        href={`/community/${post.slug || post.id}`}
        className="block"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <OptimizedImage
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-orange-500">
                {post.author}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                {post.date}
              </span>
            </div>
          </div>
          
          <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                💬 {post.commentCount}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                ❤️ {post.likeCount}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {post.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

