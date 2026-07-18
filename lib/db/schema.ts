// Drizzle schema برای پلتفرم غذا AKO.
// رویکرد دوزبانه: ستون‌های مجزا `_fa` / `_en` (به‌جای جدول translations)
// تا ساده‌ترین انطباق با UI فعلی که به‌صورت fa/en رندر می‌شود نگه داشته شود.
//
// این فایل صرفاً تعریف جدول‌هاست و به‌هیچ‌عنوان نباید مستقیماً از کلاینت
// ایمپورت شود. دسترسی به داده فقط از طریق lib/db/client و lib/data/queries.ts.

import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// نقش کاربر — پایه برای فاز ۲ (auth). فعلاً فقط "user" در seed استفاده می‌شود.
// ---------------------------------------------------------------------------
export const userRoleEnum = pgEnum("user_role", ["user", "editor", "admin"]);

// ---------------------------------------------------------------------------
// Users
// ---------------------------------------------------------------------------
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  // در فاز ۱ seed می‌شود با مقدار ثابت؛ در فاز ۲ با bcrypt هش می‌شود.
  passwordHash: text("password_hash").notNull().default(""),
  displayName: varchar("display_name", { length: 100 }).notNull(),
  avatarUrl: text("avatar_url"),
  role: userRoleEnum("role").notNull().default("user"),
  bio: text("bio"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Categories — مطابق FoodCategory فعلی
// ---------------------------------------------------------------------------
export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  nameFa: varchar("name_fa", { length: 100 }).notNull(),
  nameEn: varchar("name_en", { length: 100 }).notNull(),
  icon: varchar("icon", { length: 16 }),
  image: text("image"),
  recipeCount: integer("recipe_count").notNull().default(0),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Recipes — مطابق Recipe فعلی
// ---------------------------------------------------------------------------
export const recipes = pgTable("recipes", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: varchar("slug", { length: 160 }),
  titleFa: varchar("title_fa", { length: 200 }).notNull(),
  titleEn: varchar("title_en", { length: 200 }).notNull(),
  descriptionFa: text("description_fa"),
  descriptionEn: text("description_en"),
  image: text("image"),
  authorId: uuid("author_id").references(() => users.id, { onDelete: "set null" }),
  // نام نویسنده به‌صورت denormalized ذخیره می‌شود تا join همیشه لازم نباشد
  // (مطابق فیلد author در نوع Recipe فعلی).
  authorDisplayName: varchar("author_display_name", { length: 100 }),
  authorAvatar: text("author_avatar"),
  categoryId: uuid("category_id").references(() => categories.id, { onDelete: "set null" }),
  rating: integer("rating").notNull().default(0), // ضرب در ۱۰ ذخیره می‌شود (۴.۹ -> ۴۹)
  cookTime: integer("cook_time").notNull().default(0), // دقیقه
  likes: integer("likes").notNull().default(0),
  published: boolean("published").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// تگ‌های دستور پخت — رابطه‌ی سبک چندبه‌چند (هر تگ یک ردیف).
export const recipeTags = pgTable(
  "recipe_tags",
  {
    recipeId: uuid("recipe_id")
      .notNull()
      .references(() => recipes.id, { onDelete: "cascade" }),
    tag: varchar("tag", { length: 60 }).notNull(),
  },
  (t) => [primaryKey({ columns: [t.recipeId, t.tag] })],
);

// ---------------------------------------------------------------------------
// Restaurants — مطابق Restaurant فعلی
// ---------------------------------------------------------------------------
export const restaurants = pgTable(
  "restaurants",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    slug: varchar("slug", { length: 160 }),
    nameFa: varchar("name_fa", { length: 200 }).notNull(),
    nameEn: varchar("name_en", { length: 200 }).notNull(),
    cuisineFa: varchar("cuisine_fa", { length: 120 }),
    cuisineEn: varchar("cuisine_en", { length: 120 }),
    image: text("image"),
    priceLevel: integer("price_level").notNull().default(2),
    locationFa: varchar("location_fa", { length: 200 }),
    locationEn: varchar("location_en", { length: 200 }),
    rating: integer("rating").notNull().default(0), // ضرب در ۱۰
    reviewCount: integer("review_count").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // محدود کردن priceLevel به بازه ۱..۴ در سطح دیتابیس.
    check("price_level_range", sql`${t.priceLevel} between 1 and 4`),
  ],
);

// ---------------------------------------------------------------------------
// Restaurant Reviews — نظرات واقعی کاربران روی رستوران‌ها (هدف اصلی کاربر)
// ---------------------------------------------------------------------------
export const restaurantReviews = pgTable("restaurant_reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  restaurantId: uuid("restaurant_id")
    .notNull()
    .references(() => restaurants.id, { onDelete: "cascade" }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  rating: integer("rating").notNull(), // ۱..۵
  bodyFa: text("body_fa"),
  bodyEn: text("body_en"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Community Posts — مطابق CommunityPost فعلی
// ---------------------------------------------------------------------------
export const communityPosts = pgTable("community_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  authorId: uuid("author_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  authorDisplayName: varchar("author_display_name", { length: 100 }).notNull(),
  authorAvatar: text("author_avatar"),
  contentFa: text("content_fa").notNull(),
  contentEn: text("content_en").notNull(),
  image: text("image"),
  tagFa: varchar("tag_fa", { length: 60 }),
  tagEn: varchar("tag_en", { length: 60 }),
  likes: integer("likes").notNull().default(0),
  commentsCount: integer("comments_count").notNull().default(0),
  shares: integer("shares").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Comments — نظرات روی پست‌های جامعه (پایه برای فاز بعد)
// ---------------------------------------------------------------------------
export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .notNull()
    .references(() => communityPosts.id, { onDelete: "cascade" }),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  body: text("body").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// ---------------------------------------------------------------------------
// Relations — برای query builder وقتی join لازم باشد.
// ---------------------------------------------------------------------------
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Recipe = typeof recipes.$inferSelect;
export type NewRecipe = typeof recipes.$inferInsert;
export type Restaurant = typeof restaurants.$inferSelect;
export type CommunityPost = typeof communityPosts.$inferSelect;
export type Category = typeof categories.$inferSelect;
