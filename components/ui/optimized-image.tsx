import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "unoptimized"> & {
  className?: string;
};

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      unoptimized
      className={cn(className)}
      {...props}
    />
  );
}
