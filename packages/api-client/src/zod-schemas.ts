import { z } from "zod";

const sanityImageSchema = z.object({
  _type: z.literal("image"),
  asset: z.object({
    _ref: z.string(),
    _type: z.literal("reference"),
  }),
  alt: z.string().optional(),
});

const sanitySlugSchema = z.object({
  _type: z.literal("slug"),
  current: z.string(),
});

const seoSchema = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  ogImage: sanityImageSchema.optional(),
});

export const categorySchema = z.object({
  _id: z.string(),
  _type: z.literal("category"),
  title: z.string(),
  slug: sanitySlugSchema,
  description: z.string().optional(),
});

export const tagSchema = z.object({
  _id: z.string(),
  _type: z.literal("tag"),
  title: z.string(),
  slug: sanitySlugSchema,
});

export const authorSchema = z.object({
  _id: z.string(),
  _type: z.literal("author"),
  name: z.string(),
  slug: sanitySlugSchema,
  image: sanityImageSchema.optional(),
  bio: z.string().optional(),
});

export const postSchema = z.object({
  _id: z.string(),
  _type: z.literal("post"),
  title: z.string(),
  slug: sanitySlugSchema,
  publishedAt: z.string(),
  mainImage: sanityImageSchema.optional(),
  body: z.array(z.record(z.unknown())).optional(),
  excerpt: z.string().optional(),
  categories: z.array(categorySchema).optional(),
  tags: z.array(tagSchema).optional(),
  author: authorSchema.optional(),
  seo: seoSchema.optional(),
});

export const siteSettingsSchema = z.object({
  _id: z.string(),
  _type: z.literal("siteSettings"),
  title: z.string(),
  description: z.string().optional(),
  logo: sanityImageSchema.optional(),
  contactEmail: z.string().optional(),
  contactPhone: z.string().optional(),
  facebookUrl: z.string().optional(),
  youtubeUrl: z.string().optional(),
});

export type Category = z.infer<typeof categorySchema>;
export type Tag = z.infer<typeof tagSchema>;
export type Author = z.infer<typeof authorSchema>;
export type Post = z.infer<typeof postSchema>;
export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type SanityImage = z.infer<typeof sanityImageSchema>;
