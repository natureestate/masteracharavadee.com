/**
 * Sanity Seed Script
 *
 * สร้าง sample data 9 blog posts, categories, tags, authors
 * สำหรับใช้ทดสอบ website ก่อน production
 *
 * Usage: npx sanity exec scripts/seed.ts --with-user-token
 */

import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-01-01" });

const categories = [
  { _id: "cat-teaching", _type: "category", title: "Teaching", slug: { _type: "slug", current: "teaching" }, description: "Dhamma teachings by Master Acharavadee" },
  { _id: "cat-motion", _type: "category", title: "Motion", slug: { _type: "slug", current: "motion" }, description: "Activities and events" },
  { _id: "cat-news", _type: "category", title: "News", slug: { _type: "slug", current: "news" }, description: "Latest news and updates" },
  { _id: "cat-books", _type: "category", title: "Books", slug: { _type: "slug", current: "books" }, description: "Buddhist literature" },
  { _id: "cat-photography", _type: "category", title: "Photography", slug: { _type: "slug", current: "photography" }, description: "Photo collections" },
  { _id: "cat-death", _type: "category", title: "Death", slug: { _type: "slug", current: "death" }, description: "Teachings about death" },
  { _id: "cat-jealousy", _type: "category", title: "Jealousy", slug: { _type: "slug", current: "jealousy" }, description: "Teachings about jealousy" },
  { _id: "cat-love", _type: "category", title: "Love", slug: { _type: "slug", current: "love" }, description: "Teachings about love" },
  { _id: "cat-rebirth", _type: "category", title: "Rebirth", slug: { _type: "slug", current: "rebirth" }, description: "Teachings about rebirth" },
];

const tags = [
  "Arahant", "Buddha", "consciousness", "death", "destiny",
  "dhamma", "friend", "heaven", "jealousy", "love",
  "mindfulness", "mother", "Nirvana", "rebirth",
].map((t) => ({
  _id: `tag-${t.toLowerCase()}`,
  _type: "tag" as const,
  title: t,
  slug: { _type: "slug" as const, current: t.toLowerCase() },
}));

const authors = [
  {
    _id: "author-master",
    _type: "author",
    name: "Master Acharavadee Wongsakon",
    slug: { _type: "slug", current: "masteracharavadee" },
    bio: "Thai lay Buddhist teacher and former entrepreneur, teaching Techo Vipassana meditation.",
  },
];

const posts = [
  {
    _id: "post-1",
    _type: "post",
    title: "Meditating for a country",
    slug: { _type: "slug", current: "meditating-for-a-country" },
    publishedAt: "2025-12-21T00:00:00Z",
    excerpt: "All problems stem from the same root — the mind.",
    categories: [{ _type: "reference", _ref: "cat-motion" }, { _type: "reference", _ref: "cat-news" }],
    tags: [{ _type: "reference", _ref: "tag-mindfulness" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "All problems stem from the same root — the mind. A mind filled with greed, ignorance, and delusion, can lead people to act without regard for morality or what is right. Therefore, the first step in healing is always to purify the mind." }] }],
  },
  {
    _id: "post-2",
    _type: "post",
    title: "International World Intangible Cultural Heritage and Healthy Lifestyle event",
    slug: { _type: "slug", current: "international-world-intangible-cultural-heritage-and-healthy-lifestyle-event" },
    publishedAt: "2025-07-28T00:00:00Z",
    excerpt: "Please join us in expressing our delight in the merit of Ms.YANG LIN.",
    categories: [{ _type: "reference", _ref: "cat-motion" }, { _type: "reference", _ref: "cat-news" }],
    tags: [{ _type: "reference", _ref: "tag-dhamma" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Please join us in expressing our delight in the merit of Ms.YANG LIN, the Chinese student of Bodhidhammayan Retreat, for her International World Intangible Cultural Heritage and Healthy Lifestyle event organized from July 23 to 26, 2025." }] }],
  },
  {
    _id: "post-3",
    _type: "post",
    title: "Why Meditation Can Cure Depression?",
    slug: { _type: "slug", current: "why-meditation-can-cure-depression" },
    publishedAt: "2025-06-08T00:00:00Z",
    excerpt: "Depressed people suffer because their mind is damaged. Meditation helps Boost Mind Power.",
    categories: [{ _type: "reference", _ref: "cat-teaching" }],
    tags: [{ _type: "reference", _ref: "tag-mindfulness" }, { _type: "reference", _ref: "tag-consciousness" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Depressed people suffer because their mind is damaged And Meditation is the Answer because It helps Boost Mind Power to be Firm and Stable." }] }],
  },
  {
    _id: "post-4",
    _type: "post",
    title: "Who is the Buddha?",
    slug: { _type: "slug", current: "who-is-the-buddha" },
    publishedAt: "2025-06-02T00:00:00Z",
    excerpt: "Before the Buddha reached Enlightenment, he was a prince named Siddhartha.",
    categories: [{ _type: "reference", _ref: "cat-teaching" }],
    tags: [{ _type: "reference", _ref: "tag-buddha" }, { _type: "reference", _ref: "tag-dhamma" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Before the Buddha reached Enlightenment and established Buddhism, he was a prince named Siddhartha of Kapilavastu City in India." }] }],
  },
  {
    _id: "post-5",
    _type: "post",
    title: "THE GIFT of ANGER",
    slug: { _type: "slug", current: "the-gift-of-anger" },
    publishedAt: "2025-05-16T00:00:00Z",
    excerpt: "Understanding anger as a powerful force that can be transformed through meditation.",
    categories: [{ _type: "reference", _ref: "cat-teaching" }],
    tags: [{ _type: "reference", _ref: "tag-mindfulness" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Anger is one of the most destructive forces in the human mind. But what if anger could become a gift? When we understand the true nature of anger through meditation, we can transform this powerful energy into wisdom and compassion." }] }],
  },
  {
    _id: "post-6",
    _type: "post",
    title: "Beautiful letter from a Vipassana Student",
    slug: { _type: "slug", current: "beautiful-letter-from-a-vipassana-student" },
    publishedAt: "2025-05-16T01:00:00Z",
    excerpt: "A touching letter sharing transformative experience with Vipassana meditation.",
    categories: [{ _type: "reference", _ref: "cat-motion" }],
    tags: [{ _type: "reference", _ref: "tag-dhamma" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "We received a beautiful letter from one of our Vipassana meditation students, sharing their profound experience during the retreat at Bodhidhammayan." }] }],
  },
  {
    _id: "post-7",
    _type: "post",
    title: "Dhamma\u2026Nature",
    slug: { _type: "slug", current: "dhammanature" },
    publishedAt: "2025-05-16T02:00:00Z",
    excerpt: "Dhamma is directly translated as nature or normality.",
    categories: [{ _type: "reference", _ref: "cat-teaching" }],
    tags: [{ _type: "reference", _ref: "tag-dhamma" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Dhamma is directly translated as nature or normality. In Buddhism, Dhamma has a meaning associated to goodness, righteousness, and appropriateness. It is timeless." }] }],
  },
  {
    _id: "post-8",
    _type: "post",
    title: "Heavy Mind, Light Mind",
    slug: { _type: "slug", current: "heavy-mind-light-mind" },
    publishedAt: "2025-04-27T00:00:00Z",
    excerpt: "Understanding the weight of our mental states and how meditation lightens the mind.",
    categories: [{ _type: "reference", _ref: "cat-teaching" }],
    tags: [{ _type: "reference", _ref: "tag-mindfulness" }, { _type: "reference", _ref: "tag-consciousness" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Our mind carries weight — the weight of worries, attachments, anger, and delusion. Through meditation practice, we learn to let go of these mental burdens one by one." }] }],
  },
  {
    _id: "post-9",
    _type: "post",
    title: "Chayanis Hannarong (Elsa)",
    slug: { _type: "slug", current: "chayanis-hannarong-elsa" },
    publishedAt: "2025-04-17T00:00:00Z",
    excerpt: "The inspiring story of Chayanis Hannarong and her journey with Vipassana meditation.",
    categories: [{ _type: "reference", _ref: "cat-motion" }, { _type: "reference", _ref: "cat-news" }],
    tags: [{ _type: "reference", _ref: "tag-dhamma" }],
    author: { _type: "reference", _ref: "author-master" },
    body: [{ _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Chayanis Hannarong, known as Elsa, shares her inspiring journey with Vipassana meditation and how it has transformed her life." }] }],
  },
];

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  title: "Master Acharavadee",
  description: "Acharavadee Wongsakon is a Thai lay Buddhist teacher teaching Techo Vipassana meditation.",
  contactEmail: "masteracharavadee@Techovipassana.org",
  contactPhone: "+66 85 175 1411",
  facebookUrl: "https://www.facebook.com/profile.php?id=61553446727150",
  youtubeUrl: "https://www.youtube.com/watch?v=55vd5-S6h0k",
};

async function seed() {
  console.log("Seeding Sanity...");

  const transaction = client.transaction();

  for (const cat of categories) {
    transaction.createOrReplace(cat);
  }
  for (const tag of tags) {
    transaction.createOrReplace(tag);
  }
  for (const author of authors) {
    transaction.createOrReplace(author);
  }
  for (const post of posts) {
    transaction.createOrReplace(post);
  }
  transaction.createOrReplace(siteSettings);

  const result = await transaction.commit();
  console.log(`Seeded ${result.results.length} documents`);
}

seed().catch(console.error);
