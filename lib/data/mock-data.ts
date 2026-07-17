import type {
  CommunityPost,
  FoodCategory,
  Recipe,
  Restaurant,
} from "@/lib/data/types";

export const platformStats = {
  recipes: 12500,
  restaurants: 3200,
  members: 89000,
};

export const foodCategories: FoodCategory[] = [
  {
    id: "persian",
    nameKey: "persian",
    nameFa: "ایرانی",
    nameEn: "Persian",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=600&q=80",
    recipeCount: 842,
    icon: "🍚",
  },
  {
    id: "italian",
    nameKey: "italian",
    nameFa: "ایتالیایی",
    nameEn: "Italian",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    recipeCount: 1203,
    icon: "🍕",
  },
  {
    id: "desserts",
    nameKey: "desserts",
    nameFa: "دسر",
    nameEn: "Desserts",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
    recipeCount: 654,
    icon: "🍰",
  },
  {
    id: "healthy",
    nameKey: "healthy",
    nameFa: "سالم",
    nameEn: "Healthy",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
    recipeCount: 978,
    icon: "🥗",
  },
  {
    id: "seafood",
    nameKey: "seafood",
    nameFa: "دریایی",
    nameEn: "Seafood",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b9a2?w=600&q=80",
    recipeCount: 421,
    icon: "🦐",
  },
  {
    id: "breakfast",
    nameKey: "breakfast",
    nameFa: "صبحانه",
    nameEn: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80",
    recipeCount: 567,
    icon: "🥞",
  },
];

export const trendingRecipes: Recipe[] = [
  {
    id: "1",
    titleFa: "پاستا کرمی با قارچ",
    titleEn: "Creamy Mushroom Pasta",
    descriptionFa: "پاستای خامه‌ای با سس قارچ تازه و پarmesan",
    descriptionEn: "Silky pasta with fresh mushroom cream sauce and parmesan",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
    author: "Sara M.",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.9,
    cookTime: 25,
    likes: 2340,
    tags: ["pasta", "quick"],
  },
  {
    id: "2",
    titleFa: "سالاد مدیترانه‌ای",
    titleEn: "Mediterranean Salad Bowl",
    descriptionFa: "سالاد رنگارنگ با سبزیجات تازه و سس لیمو",
    descriptionEn: "Colorful bowl with fresh greens, feta, and lemon dressing",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    author: "Ali R.",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 4.7,
    cookTime: 15,
    likes: 1890,
    tags: ["healthy", "salad"],
  },
  {
    id: "3",
    titleFa: "استیک گریل شده",
    titleEn: "Perfect Grilled Steak",
    descriptionFa: "استیک گریل با کره herb و سیب‌زمینی",
    descriptionEn: "Juicy grilled steak with herb butter and roasted potatoes",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    author: "Mike T.",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4.8,
    cookTime: 40,
    likes: 3120,
    tags: ["meat", "grill"],
  },
  {
    id: "4",
    titleFa: "کباب کوبیده خانگی",
    titleEn: "Homemade Koobideh",
    descriptionFa: "کباب اصیل ایرانی با زعفران و برنج",
    descriptionEn: "Authentic Persian koobideh with saffron rice",
    image:
      "https://images.unsplash.com/photo-1529042410799-b751142a3d5a?w=800&q=80",
    author: "Neda K.",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5.0,
    cookTime: 55,
    likes: 4560,
    tags: ["persian", "grill"],
  },
];

export const featuredRestaurants: Restaurant[] = [
  {
    id: "1",
    nameFa: "رستوران سنتی نارنج",
    nameEn: "Naranj Traditional",
    cuisineFa: "ایرانی · سنتی",
    cuisineEn: "Persian · Traditional",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    rating: 4.8,
    reviewCount: 342,
    priceLevel: 3,
    locationFa: "تهران، ایران",
    locationEn: "Tehran, Iran",
    featuredReviewFa: "بهترین فسنجان که تا حالا خوردم!",
    featuredReviewEn: "The best fesenjan I've ever had!",
  },
  {
    id: "2",
    nameFa: "تراس ایتالیایی",
    nameEn: "Terrace Italiano",
    cuisineFa: "ایتالیایی · پیتزا",
    cuisineEn: "Italian · Pizza",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    rating: 4.6,
    reviewCount: 218,
    priceLevel: 2,
    locationFa: "اصفهان، ایران",
    locationEn: "Isfahan, Iran",
    featuredReviewFa: "پیتزای ناپoli واقعی با خمیر دست‌ساز",
    featuredReviewEn: "Real Neapolitan pizza with handmade dough",
  },
  {
    id: "3",
    nameFa: "کافه آبی",
    nameEn: "Blue Cafe",
    cuisineFa: "کافه · برانچ",
    cuisineEn: "Cafe · Brunch",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    rating: 4.9,
    reviewCount: 567,
    priceLevel: 2,
    locationFa: "شیراز، ایران",
    locationEn: "Shiraz, Iran",
    featuredReviewFa: "فضای دنج و قهوه عالی برای آخر هفته",
    featuredReviewEn: "Cozy vibe and excellent coffee for weekends",
  },
];

export const communityPosts: CommunityPost[] = [
  {
    id: "1",
    author: "Leila A.",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    contentFa:
      "امروز اولین بار زرشک پلو با مرغ درست کردم و خانواده عاشقش شدند! دستور پخت را در پروفایلم گذاشتم 🍗",
    contentEn:
      "Made zereshk polo with chicken for the first time today — family loved it! Recipe is on my profile 🍗",
    image:
      "https://images.unsplash.com/photo-1603133872877-684f208fb84b?w=800&q=80",
    likes: 428,
    comments: 56,
    shares: 23,
    timestampFa: "۲ ساعت پیش",
    timestampEn: "2 hours ago",
    tagFa: "دستور پخت",
    tagEn: "Recipe",
  },
  {
    id: "2",
    author: "Omid H.",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    contentFa:
      "کافه جدید محله را امتحان کردم — لatte art فوق‌العاده و staff خیلی مهربان بودند ☕",
    contentEn:
      "Tried the new neighborhood cafe — amazing latte art and super friendly staff ☕",
    image:
      "https://images.unsplash.com/photo-1495474472283-4d4bc789f0ae?w=800&q=80",
    likes: 312,
    comments: 41,
    shares: 12,
    timestampFa: "۵ ساعت پیش",
    timestampEn: "5 hours ago",
    tagFa: "نقد رستوران",
    tagEn: "Review",
  },
  {
    id: "3",
    author: "Mina S.",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    contentFa:
      "نکته: برای برنج ایرانی، ۳۰ دقیقه خیساندن قبل از پخت تفاوت بزرگی ایجاد می‌کند!",
    contentEn:
      "Tip: Soaking Persian rice for 30 minutes before cooking makes a huge difference!",
    likes: 891,
    comments: 124,
    shares: 67,
    timestampFa: "دیروز",
    timestampEn: "Yesterday",
    tagFa: "نکته آشپزی",
    tagEn: "Cooking tip",
  },
];
