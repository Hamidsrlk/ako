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
    slug: "persian",
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
    slug: "italian",
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
    slug: "desserts",
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
    slug: "healthy",
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
    slug: "seafood",
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
    slug: "breakfast",
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
    slug: "creamy-mushroom-pasta",
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
    slug: "mediterranean-salad-bowl",
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
    slug: "perfect-grilled-steak",
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
    slug: "homemade-koobideh",
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
  {
    id: "5",
    slug: "chocolate-lava-cake",
    titleFa: "کیک لاوای شکلاتی",
    titleEn: "Chocolate Lava Cake",
    descriptionFa: "کیک شکلاتی گرم با مغز روان شکلاتی و بستنی وانیلی",
    descriptionEn: "Warm chocolate cake with molten center and vanilla ice cream",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    author: "Maryam J.",
    authorAvatar:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&q=80",
    rating: 4.9,
    cookTime: 30,
    likes: 5210,
    tags: ["desserts", "chocolate"],
  },
  {
    id: "6",
    slug: "shakshuka-breakfast",
    titleFa: "شکشوکای صبحانه‌ای",
    titleEn: "Shakshuka Breakfast",
    descriptionFa: "تخم‌مرغ پخته در سس گوجه ادویه‌ای با نان تازه",
    descriptionEn: "Eggs poached in spiced tomato sauce with fresh bread",
    image:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&q=80",
    author: "Reza M.",
    authorAvatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
    rating: 4.6,
    cookTime: 20,
    likes: 1540,
    tags: ["breakfast", "quick"],
  },
  {
    id: "7",
    slug: "grilled-salmon-asparagus",
    titleFa: "سالمون گریل با مارچوبه",
    titleEn: "Grilled Salmon with Asparagus",
    descriptionFa: "فیله سالمون گریل با مارچوبه و سس لیمو",
    descriptionEn: "Grilled salmon fillet with asparagus and lemon sauce",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    author: "Sara M.",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.8,
    cookTime: 35,
    likes: 2890,
    tags: ["seafood", "healthy"],
  },
  {
    id: "8",
    slug: "ghormeh-sabzi",
    titleFa: "قورمه سبزی اصیل",
    titleEn: "Authentic Ghormeh Sabzi",
    descriptionFa: "خورشت سنتی ایرانی با سبزی معطر و لوبیا قرمز",
    descriptionEn: "Traditional Persian herb stew with kidney beans",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80",
    author: "Neda K.",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.9,
    cookTime: 120,
    likes: 6780,
    tags: ["persian", "meat"],
  },
];

export const featuredRestaurants: Restaurant[] = [
  {
    id: "1",
    slug: "naranj-traditional",
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
    slug: "terrace-italiano",
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
    slug: "blue-cafe",
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
  {
    id: "4",
    slug: "saffron-grill",
    nameFa: "گریل زعفران",
    nameEn: "Saffron Grill",
    cuisineFa: "کباب · استیک",
    cuisineEn: "Grill · Steak",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    rating: 4.7,
    reviewCount: 489,
    priceLevel: 3,
    locationFa: "تهران، ایران",
    locationEn: "Tehran, Iran",
    featuredReviewFa: "کباب‌های بی‌نظیر با گوشت تازه و زعفران اصل",
    featuredReviewEn: "Incredible kebabs with fresh meat and real saffron",
  },
  {
    id: "5",
    slug: "ocean-catch",
    nameFa: "اوشن کچ",
    nameEn: "Ocean Catch",
    cuisineFa: "دریایی · سوشی",
    cuisineEn: "Seafood · Sushi",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    rating: 4.5,
    reviewCount: 156,
    priceLevel: 4,
    locationFa: "کرج، ایران",
    locationEn: "Karaj, Iran",
    featuredReviewFa: "سوشی تازه و میگوهای گریل فوق‌العاده",
    featuredReviewEn: "Fresh sushi and amazing grilled shrimp",
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
  {
    id: "4",
    author: "Pouya N.",
    authorAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    contentFa:
      "باغچه ریحان راه انداختم و تازه‌ترین ریحان رو برای پستو استفاده می‌کنم 🌿 تفاوت طعم با ریحان خشک شب و روزه!",
    contentEn:
      "Started a basil garden and use the freshest basil for pesto 🌿 The flavor difference from dried is night and day!",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    likes: 645,
    comments: 78,
    shares: 34,
    timestampFa: "۳ روز پیش",
    timestampEn: "3 days ago",
    tagFa: "باغچه خانگی",
    tagEn: "Home garden",
  },
  {
    id: "5",
    author: "Sahar T.",
    authorAvatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    contentFa:
      "اولین بار نان سوردا (sourdough) پختم! ۲۴ ساعت فرمنت کردم و پوستش بیرون شد ترد و عالی 🍞",
    contentEn:
      "Baked my first sourdough! 24h ferment and the crust came out crisp and perfect 🍞",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    likes: 1203,
    comments: 187,
    shares: 92,
    timestampFa: "۴ روز پیش",
    timestampEn: "4 days ago",
    tagFa: "نانپزی",
    tagEn: "Bread baking",
  },
  {
    id: "6",
    author: "Bahram K.",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    contentFa:
      "رستوران جدید زعفران رو امتحان کردم — کباب کوبیده فوق‌العاده با ته‌دیگ Crunchy 👌",
    contentEn:
      "Tried the new Saffron Grill restaurant — amazing koobideh with crunchy tahdig 👌",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
    likes: 478,
    comments: 53,
    shares: 19,
    timestampFa: "هفته پیش",
    timestampEn: "A week ago",
    tagFa: "نقد رستوران",
    tagEn: "Review",
  },
];
