import type { NextConfig } from "next";

// Backend فعال شد: route handlers، server actions و cookies نیاز به سرور Node دارند.
// قبلاً "output: export" بود که همه‌ی قابلیت‌های server-side را غیرفعال می‌کرد.
const nextConfig: NextConfig = {
  images: {
    // حالا که سرور داریم، next/image می‌تواند تصاویر Unsplash را بهینه کند.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
