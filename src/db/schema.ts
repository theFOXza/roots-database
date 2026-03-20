import { pgTable, text, timestamp, uuid, integer, jsonb, boolean, primaryKey } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  email: text("email").unique(),
  image: text("image"),
  locale: text("locale").default("en"),
  cqs: integer("cqs").default(0),
  points: integer("points").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
});

export const accounts = pgTable(
  "accounts",
  {
    userId: uuid("user_id").notNull().references(() => users.id),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refreshToken: text("refresh_token"),
    accessToken: text("access_token"),
    expiresAt: integer("expires_at"),
    tokenType: text("token_type"),
    scope: text("scope"),
    idToken: text("id_token"),
    sessionState: text("session_state")
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.provider, table.providerAccountId] })
  })
);

export const sessions = pgTable("sessions", {
  sessionToken: text("session_token").primaryKey(),
  userId: uuid("user_id").notNull().references(() => users.id),
  expires: timestamp("expires", { withTimezone: true }).notNull()
});

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { withTimezone: true }).notNull()
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.identifier, table.token] })
  })
);

export const remedies = pgTable("remedies", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: jsonb("name").notNull(),
  conditionSummary: jsonb("condition_summary").notNull(),
  preparation: jsonb("preparation").notNull(),
  culturalOrigin: jsonb("cultural_origin").notNull(),
  source: text("source"),
  mediaUrl: text("media_url"),
  story: text("story"),
  score: integer("score"),
  scoreBreakdown: jsonb("score_breakdown"),
  status: text("status").default("pending"),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
});

export const ingredients = pgTable("ingredients", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: jsonb("name").notNull(),
  latinName: text("latin_name"),
  description: jsonb("description")
});

export const conditions = pgTable("conditions", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: jsonb("name").notNull(),
  category: text("category")
});

export const cultures = pgTable("cultures", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: jsonb("name").notNull(),
  region: text("region")
});

export const remedyIngredients = pgTable(
  "remedy_ingredients",
  {
    remedyId: uuid("remedy_id").notNull().references(() => remedies.id),
    ingredientId: uuid("ingredient_id").notNull().references(() => ingredients.id)
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.remedyId, table.ingredientId] })
  })
);

export const remedyConditions = pgTable(
  "remedy_conditions",
  {
    remedyId: uuid("remedy_id").notNull().references(() => remedies.id),
    conditionId: uuid("condition_id").notNull().references(() => conditions.id)
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.remedyId, table.conditionId] })
  })
);

export const remedyCultures = pgTable(
  "remedy_cultures",
  {
    remedyId: uuid("remedy_id").notNull().references(() => remedies.id),
    cultureId: uuid("culture_id").notNull().references(() => cultures.id)
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.remedyId, table.cultureId] })
  })
);

export const comments = pgTable("comments", {
  id: uuid("id").primaryKey().defaultRandom(),
  remedyId: uuid("remedy_id").notNull().references(() => remedies.id),
  userId: uuid("user_id").notNull().references(() => users.id),
  body: text("body").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow()
});

export const badges = pgTable("badges", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  tier: text("tier"),
  icon: text("icon")
});

export const userBadges = pgTable(
  "user_badges",
  {
    userId: uuid("user_id").notNull().references(() => users.id),
    badgeId: uuid("badge_id").notNull().references(() => badges.id),
    earnedAt: timestamp("earned_at", { withTimezone: true }).defaultNow()
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.userId, table.badgeId] })
  })
);

export const challenges = pgTable("challenges", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  startsAt: timestamp("starts_at", { withTimezone: true }),
  endsAt: timestamp("ends_at", { withTimezone: true }),
  isActive: boolean("is_active").default(false)
});

export const challengeSubmissions = pgTable(
  "challenge_submissions",
  {
    challengeId: uuid("challenge_id").notNull().references(() => challenges.id),
    remedyId: uuid("remedy_id").notNull().references(() => remedies.id),
    userId: uuid("user_id").notNull().references(() => users.id)
  },
  (table) => ({
    compoundKey: primaryKey({ columns: [table.challengeId, table.remedyId, table.userId] })
  })
);
