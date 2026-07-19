export type FoodCategory = {
  id: string;
  slug: string;
  nameKey: string;
  nameFa: string;
  nameEn: string;
  image: string;
  recipeCount: number;
  icon: string;
};

export type Recipe = {
  id: string;
  slug: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  image: string;
  author: string;
  authorAvatar: string;
  rating: number;
  cookTime: number;
  likes: number;
  tags: string[];
};

export type Restaurant = {
  id: string;
  slug: string;
  nameFa: string;
  nameEn: string;
  cuisineFa: string;
  cuisineEn: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceLevel: 1 | 2 | 3 | 4;
  locationFa: string;
  locationEn: string;
  featuredReviewFa: string;
  featuredReviewEn: string;
};

export type CommunityPost = {
  id: string;
  author: string;
  authorAvatar: string;
  contentFa: string;
  contentEn: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestampFa: string;
  timestampEn: string;
  tagFa: string;
  tagEn: string;
};
