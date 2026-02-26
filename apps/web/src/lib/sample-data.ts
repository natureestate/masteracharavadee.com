export interface SamplePost {
  slug: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  excerpt: string;
  body: string;
  categories: Array<{ title: string; slug: { current: string } }>;
  tags: Array<{ title: string; slug: { current: string } }>;
  author: { name: string; slug: { current: string } };
}

export const sampleCategories = [
  { title: "Teaching", slug: { current: "teaching" }, description: "Dhamma teachings by Master Acharavadee" },
  { title: "Motion", slug: { current: "motion" }, description: "Activities and events" },
  { title: "News", slug: { current: "news" }, description: "Latest news and updates" },
  { title: "Books", slug: { current: "books" }, description: "Buddhist literature and publications" },
  { title: "Photography", slug: { current: "photography" }, description: "Photo collections" },
  { title: "Death", slug: { current: "death" }, description: "Teachings about death and impermanence" },
  { title: "Jealousy", slug: { current: "jealousy" }, description: "Teachings about jealousy" },
  { title: "Love", slug: { current: "love" }, description: "Teachings about love and compassion" },
  { title: "Rebirth", slug: { current: "rebirth" }, description: "Teachings about rebirth" },
];

export const sampleTags = [
  "Arahant", "Buddha", "consciousness", "death", "destiny",
  "dhamma", "friend", "heaven", "jealousy", "love",
  "mindfulness", "mother", "Nirvana", "rebirth",
].map((t) => ({ title: t, slug: { current: t.toLowerCase() } }));

export const samplePosts: SamplePost[] = [
  {
    slug: "meditating-for-a-country",
    title: "Meditating for a country",
    publishedAt: "2025-12-21",
    imageUrl: "/images/blog/meditating-for-a-country.jpg",
    excerpt: "All problems stem from the same root — the mind. A mind filled with greed, ignorance, and delusion, can lead people to act without regard for morality.",
    body: "All problems stem from the same root — the mind.\n\nA mind filled with greed, ignorance, and delusion, can lead people to act without regard for morality or what is right.\n\nTherefore, the first step in healing is always to purify the mind.\n\nWhen the mind becomes clearer, actions naturally improve.\n\nMeditation for the Country is a gathering of clear, peaceful, and resolute minds to support our country.\n\nMeditation is not merely closing our eyes in stillness. It is a collective practice of uplifting the country with pure hearts, chanting with faith, and offering the power of merit to our homeland.\n\nJust as people need merit, so does the country.",
    categories: [
      { title: "Motion", slug: { current: "motion" } },
      { title: "News", slug: { current: "news" } },
    ],
    tags: [{ title: "mindfulness", slug: { current: "mindfulness" } }],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "international-world-intangible-cultural-heritage-and-healthy-lifestyle-event",
    title: "International World Intangible Cultural Heritage and Healthy Lifestyle event",
    publishedAt: "2025-07-28",
    imageUrl: "/images/blog/intangible-cultural-heritage.jpg",
    excerpt: "Please join us in expressing our delight in the merit of Ms.YANG LIN, the Chinese student of Bodhidhammayan Retreat.",
    body: "Please join us in expressing our delight in the merit of Ms.YANG LIN, the Chinese student of Bodhidhammayan Retreat, for her International World Intangible Cultural Heritage and Healthy Lifestyle event organized from July 23 to 26, 2025.\n\nMaster Acharavadee Wongsakon once said, \"One good person can extend goodness to others to a great degree.\"\n\nMs.YANG LIN, or \"Ms. Vera,\" as called by her Thai friends, organized an important meditation course for a group of Chinese enthusiasts. After attending a Vipassana meditation course, she has discovered changes in herself. So, she decided to learn from Master Acharavadee to teach meditation for beginners.\n\nThis is the sharing of goodness sparked by an individual who has strong determination — a person who dedicated her utmost effort to create the ripple effect of goodness.",
    categories: [
      { title: "Motion", slug: { current: "motion" } },
      { title: "News", slug: { current: "news" } },
    ],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "why-meditation-can-cure-depression",
    title: "Why Meditation Can Cure Depression?",
    publishedAt: "2025-06-08",
    imageUrl: "/images/blog/meditation-cure-depression.jpg",
    excerpt: "Depressed people suffer because their mind is damaged. And Meditation is the Answer because It helps Boost Mind Power to be Firm and Stable.",
    body: "Depressed people suffer because their mind is damaged And Meditation is the Answer because It helps Boost Mind Power to be Firm and Stable.\n\nAnapanasati Meditation or Concentration Meditation is one way to train Mindfulness. The method is to sit and Focus at the Nostril to observe Air we breath in and out Naturally. It is to use the Air which is Subtle Energy to be the tool to train the Mind to be firm and Stable.\n\nMind Energy is Core to Life. Depressed people suffer because their mind is damaged from Negative Energy such as Hate Speech and Bullying and Hardship in Life. To Heal at the Core is to heal at the Mind Energy Level.\n\nThe Result of Practice is to help to have a firm mind, to elevate Mindfulness, consciousness, and to help to Boost Memory because you can Focus in the present moment with firmness of the mind.\n\nOn the other hand, practicing Meditation is the way to Gain \"Mind Power\". Depressed people lack mind power and are so vulnerable. Meditation is a direct way to increase Power of the Mind.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [
      { title: "mindfulness", slug: { current: "mindfulness" } },
      { title: "consciousness", slug: { current: "consciousness" } },
    ],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "who-is-the-buddha",
    title: "Who is the Buddha?",
    publishedAt: "2025-06-02",
    imageUrl: "/images/blog/who-is-the-buddha.jpg",
    excerpt: "Before the Buddha reached Enlightenment and established Buddhism, he was a prince named Siddhartha of Kapilavastu City in India.",
    body: "Before the Buddha reached Enlightenment and established Buddhism, he was a prince named Siddhartha of Kapilavastu City in India.\n\nDuring the celebration of his birth, Brahmin Kondanna predicted that Siddhartha would be an ascetic and become a Buddha. The prophecy troubled his father, King Suddhodana who wished for the prince to be a great King.\n\nWhen Prince Siddhartha was 16 years old, he got married to Princess Yasodhara. It was when he reached 29 years old that he finally managed to go outside the palace. There, he saw an old man with gloomy face, a diseased man, a dead person surrounded by his grieving family, and then an ascetic.\n\nWith strong determination, he left the palace to lead an ascetic life in search of the path to liberation.\n\nOn the full moon night of the sixth lunar month, Siddhartha was sitting under the Bodhi tree and began the Anapanasati meditation, then lifted his sharp meditative focus to absolute mindfulness in Vipassana meditation. The Prince finally reached Enlightenment and attained Buddhahood as Gautama Buddha before dawn.\n\nLater the Buddha began traveling to places to teach people about the Noble Path. This lasted for 45 years until his final day at the age of 80.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [
      { title: "Buddha", slug: { current: "buddha" } },
      { title: "dhamma", slug: { current: "dhamma" } },
    ],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "the-gift-of-anger",
    title: "THE GIFT of ANGER",
    publishedAt: "2025-05-16",
    imageUrl: "/images/blog/gift-of-anger.jpg",
    excerpt: "Understanding anger as a powerful force that can be transformed through meditation practice.",
    body: "Anger is one of the most destructive forces in the human mind. It burns everything in its path — relationships, health, and inner peace.\n\nBut what if anger could become a gift? When we understand the true nature of anger through meditation, we can transform this powerful energy into wisdom and compassion.\n\nThe practice of Vipassana meditation teaches us to observe anger as it arises, without reacting to it. Through this observation, we begin to see that anger is impermanent — it arises and passes away, just like everything else.\n\nMaster Acharavadee Wongsakon teaches that anger, when properly understood, becomes one of our greatest teachers. It shows us where our attachments lie and where we need to develop more equanimity.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [{ title: "mindfulness", slug: { current: "mindfulness" } }],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "beautiful-letter-from-a-vipassana-student",
    title: "Beautiful letter from a Vipassana Student",
    publishedAt: "2025-05-16",
    imageUrl: "/images/blog/beautiful-letter.jpg",
    excerpt: "A touching letter from a student sharing their transformative experience with Vipassana meditation.",
    body: "We received a beautiful letter from one of our Vipassana meditation students, sharing their profound experience during the retreat at Bodhidhammayan.\n\nThe student describes how the intensive meditation practice transformed their understanding of life and brought them genuine inner peace for the first time.\n\nThis letter reminds us why we continue to share the teachings of the Buddha — because the transformation that meditation brings is real and life-changing.",
    categories: [{ title: "Motion", slug: { current: "motion" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "dhammanature",
    title: "Dhamma\u2026Nature",
    publishedAt: "2025-05-16",
    imageUrl: "/images/blog/dhamma-nature.jpg",
    excerpt: "Dhamma is directly translated as nature or normality. In Buddhism, it has a meaning associated to goodness, righteousness, and appropriateness.",
    body: "Dhamma is directly translated as nature or normality. In Buddhism, Dhamma has a meaning associated to goodness, righteousness, and appropriateness. It is timeless.\n\nAll three factors must be met. A person practicing Dhamma is said to practice on the path of virtue.\n\nNature itself teaches us Dhamma in every moment. The rising and setting of the sun, the changing of seasons, the cycle of birth and death — all of these are expressions of Dhamma.\n\nWhen we align ourselves with Dhamma, we live in harmony with nature and find true peace.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "heavy-mind-light-mind",
    title: "Heavy Mind, Light Mind",
    publishedAt: "2025-04-27",
    imageUrl: "/images/blog/heavy-mind-light-mind.jpg",
    excerpt: "Understanding the weight of our mental states and how meditation lightens the burden of the mind.",
    body: "Our mind carries weight — the weight of worries, attachments, anger, and delusion. This heavy mind makes life feel burdensome and exhausting.\n\nThrough meditation practice, we learn to let go of these mental burdens one by one. As the impurities are burned away through Techo Vipassana, the mind becomes lighter and clearer.\n\nA light mind sees things as they truly are. It is free from the distortions of greed, hatred, and delusion. This lightness of mind is the beginning of true happiness.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [
      { title: "mindfulness", slug: { current: "mindfulness" } },
      { title: "consciousness", slug: { current: "consciousness" } },
    ],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
  {
    slug: "chayanis-hannarong-elsa",
    title: "Chayanis Hannarong (Elsa)",
    publishedAt: "2025-04-17",
    imageUrl: "/images/blog/chayanis-hannarong.jpg",
    excerpt: "The inspiring story of Chayanis Hannarong and her journey with Vipassana meditation.",
    body: "Chayanis Hannarong, known as Elsa, shares her inspiring journey with Vipassana meditation and how it has transformed her life.\n\nHer dedication to the practice and her commitment to spreading the teachings of the Buddha serve as an inspiration to all who seek inner peace and true happiness.\n\nThrough the guidance of Master Acharavadee Wongsakon, Elsa discovered the power of meditation to heal and transform the mind.",
    categories: [
      { title: "Motion", slug: { current: "motion" } },
      { title: "News", slug: { current: "news" } },
    ],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  },
];

export function getPostBySlug(slug: string): SamplePost | undefined {
  return samplePosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): SamplePost[] {
  return samplePosts.filter((p) =>
    p.categories.some((c) => c.slug.current === categorySlug)
  );
}

export function getRelatedPosts(currentSlug: string, limit = 3): SamplePost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return samplePosts.slice(0, limit);
  const categoryIds = current.categories.map((c) => c.slug.current);
  return samplePosts
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        p.categories.some((c) => categoryIds.includes(c.slug.current))
    )
    .slice(0, limit);
}
