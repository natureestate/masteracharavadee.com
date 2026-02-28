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
  { title: "Testimonial", slug: { current: "testimonial" }, description: "Student testimonials" },
  { title: "Photography", slug: { current: "photography" }, description: "Photo collections" },
];

export const sampleTags = [
  "Arahant", "Buddha", "consciousness", "death", "destiny",
  "dhamma", "friend", "heaven", "jealousy", "love",
  "mindfulness", "mother", "Nirvana", "rebirth",
].map((t) => ({ title: t, slug: { current: t.toLowerCase() } }));

const authors = {
  master: { name: "Master Acharavadee Wongsakon", slug: { current: "masteracharavadee" } },
  bond: { name: "Bond Island", slug: { current: "baronsotheby" } },
  tussarat: { name: "Tussarat Yawichai", slug: { current: "skynovice" } },
  rwongkarnwan: { name: "rwongkarnwan", slug: { current: "rwongkarnwan" } },
};

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
    author: authors.master,
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
    author: authors.master,
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
    author: authors.master,
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
    author: authors.master,
  },
  {
    slug: "the-gift-of-anger",
    title: "THE GIFT of ANGER",
    publishedAt: "2025-05-16",
    imageUrl: "/images/blog/gift-of-anger.jpg",
    excerpt: "There was a Brahmin who dismissed the Buddha's teachings. The Buddha taught him a powerful lesson about the gift of anger.",
    body: "There was a Brahmin who dismissed the Buddha's teachings as he had faith in different practice. When his seven sons and daughters-in-law converted to Buddhism and practiced meditation, he became very mad and believed the Buddha was the reason why they changed from the old belief.\n\nThe Brahmin stormed into the temple where the Buddha was staying at that time and lashed out at him, calling him offensive names. The Buddha, however, remained peaceful and happy, unruffled by his insults. When he saw the Brahmin began to get tired, the Buddha asked him a question.\n\n\"Brahmin, what's your purpose of the visit?\" The Brahmin repeated his cursing at the Buddha until he was tired again.\n\n\"Well, Brahmin, let me ask you a question. Have you ever had a visitor at your house?\" the Buddha asked. \"Yes, but what's your business?\" was his reply.\n\nThe Buddha continued, \"Have your guests brought you snacks, foods, or gifts?\" \"Yes, certainly.\" \"But if you don't want those gifts, who will have them?\" \"Obviously, the person who brought them.\"\n\nThe Venerable One said, \"Now then, you're my guest and you're bringing me the gift of anger. I won't take it. Therefore, those rude words belong to you.\"\n\nThe Brahmin was intrigued at the Buddha's words and wisdom. \"Buddha, where have you learned to not accept the gift of anger?\" With compassion, the Perfected One began teaching him about Dhamma. The Brahmin then accepted the Buddha as his teacher and eventually became a Buddhist.\n\n— Master Acharavadee Wongsakon",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [{ title: "mindfulness", slug: { current: "mindfulness" } }],
    author: authors.master,
  },
  {
    slug: "beautiful-letter-from-a-vipassana-student",
    title: "Beautiful letter from a Vipassana Student",
    publishedAt: "2025-05-16",
    imageUrl: "/images/blog/beautiful-letter.jpg",
    excerpt: "I received a beautiful letter from a Vipassana Student who felt awakened after practicing the 1st course of Vipassana Advance Meditation.",
    body: "I received a beautiful letter from a Vipassana Student who felt awakened the same way other students felt, after practicing the 1st course of Vipassana Advance Meditation. Vipassana is Truly life Changing. It can awaken you from bad dreams to see the new path toward true Happiness.\n\nI wish to share Ulyana letter and together with my hand writing reply, in order to bring gentleness among the roughness we are all facing every day, and every hour in this period of time.\n\nMaster's Reply to Ulyana:\n\n\"Your words of wisdom and gratitude have brought me Joy.\nI wish you can keep firmly on the Noble Path.\nDo not let the heavy stream of the Illusion rip you away from the Truth.\nYou finally found your true self and the way to live in Happiness.\nMake your dream. Reach your Goal. End your Misery. and Share your Goodness to Others.\nRemember to always keep life in Balance.\nThe more you practice, the answer will be clear to you.\nI had thousands of Vipassana Students. Many of them take this precious path for granted.\nStill I'm here. To shine the light among the darkness.\nTo Stand up to preserve Dhamma. To save many lost souls and watch them grow in the path of Liberation.\nUlayna, in the Ocean of Madness, always be saved and always Shine.\nThis is my Blessing to you.\nMaster Achravadee — May 12, 2025\"",
    categories: [{ title: "Motion", slug: { current: "motion" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.master,
  },
  {
    slug: "dhammanature",
    title: "Dhamma\u2026Nature",
    publishedAt: "2025-05-16",
    imageUrl: "/images/blog/dhamma-nature.jpg",
    excerpt: "The word \"Dhamma,\" when translated literally, is Nature. Practicing Dhamma is the practice to realize the truth of nature.",
    body: "The word \"Dhamma,\" when translated literally, is Nature.\n\nPracticing Dhamma is the practice to realize the truth of nature. It is the path to goodness, righteousness, and appropriateness.\n\nA noble human being is one who possesses humanity and virtue—a person who preserves the Five Precepts (S\u012Bla).\n\nS\u012Bla means normality which is a way of conduct that is natural for a noble person.\n\nThe reason that followers of Buddhism struggle to uphold the Five Precepts is because their minds lack strength and firmness in overcoming their inner Impurities.\n\nWhat are Impurities (Kilesa)? They are greed, anger, and delusion—the dark forces within the mind that lead to mental distress.\n\nA mind that lacks strength becomes easily swayed by cravings and desires, unable to resist the deeply imprinted Impurities and become enslaved by them.\n\nGiving alms or reading Dhamma books brings temporary joy, but when faced with real challenges, one may still waver and commit sin.\n\nHow can we strengthen the mind? It can be done by practicing meditation.\n\nMeditation follows the Buddha's teachings and cultivates the power of the mind, making the mind strong so that it can resist wrongdoing and drive one toward true success, built upon virtue. This is sustainable success that brings lasting peace.\n\nMoreover, meditation has the power to help relieve depression, a prevalent issue in today's world.\n\nBeyond that, meditation serves as an intermediate level of Dhamma practice, laying the foundation for advanced practice, Vipassana (Insight Meditation). This profound practice can liberate the mind from the cycle of birth, aging, sickness, and death, known as Samsara.\n\n— Master Acharavadee Wongsakon",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.master,
  },
  {
    slug: "heavy-mind-light-mind",
    title: "Heavy Mind, Light Mind",
    publishedAt: "2025-04-27",
    imageUrl: "/images/blog/heavy-mind-light-mind.jpg",
    excerpt: "\"This person has a kind heart. That person is so mean.\" Have you ever wondered what the mind is and where is it?",
    body: "\"This person has a kind heart. That person is so mean.\" Have you ever wondered what the mind is and where is it? Is it in the heart?\n\nWhat is the mind? The Buddha taught that humans are composed of the five aggregates:\n\nThe first aggregate is the body.\nThe second is the consciousness, which functions to perceive. When consciousness is pure, it is called \"Knowing mind.\"\nThe third is perception, which functions to recognize and remember things that have happened.\nThe fourth is feeling, which perceives sensations.\nThe fifth is mental formations (Sankhara), or mind formations, which accumulate cooked feelings and emotions—both positive and negative, attachment, craving, and delusion.\n\nThe Buddha discovered that all things are a stream of energy that is constantly changing. The mind is also an energy (mind energy), and it is very powerful. It can command the brain and send signals to different parts of the body, influencing thoughts, speech, and actions.\n\nWhere is the mind? The mind resides in the body from head to toe. Wherever there is a feeling, there is the mind. The body serves as a temporary home for the mind. When the mind leaves the body, the body becomes a corpse and cannot live anymore.\n\nAccording to the laws of physics, energy never disappears. It only changes form, so does the mind.\n\nIf a person only does good deeds, their mind will be light. When it leaves the body, it will rise to heaven or the divine realm.\n\nIf the mind accumulates bad deeds like greed, anger, delusion, envy, sadness, and various unwholesome deeds, it becomes heavy. When it leaves the body, a heavy mind will go down to the lower realms, to one of the four destinations of suffering: hell, hungry ghosts, animals, and demons.\n\nA heavy mind and a light mind have different origins, and their destinations are also different.\n\n— Master Acharavadee Wongsakon",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [
      { title: "mindfulness", slug: { current: "mindfulness" } },
      { title: "consciousness", slug: { current: "consciousness" } },
    ],
    author: authors.master,
  },
  {
    slug: "chayanis-hannarong-elsa",
    title: "Chayanis Hannarong (Elsa)",
    publishedAt: "2025-04-17",
    imageUrl: "/images/blog/chayanis-hannarong.jpg",
    excerpt: "Government officer at Thailand Convention & Exhibition Bureau (TCEB) shares her Vipassana meditation experience.",
    body: "Chayanis Hannarong (Elsa)\nGovernment officer at Thailand Convention & Exhibition Bureau (TCEB)\n\n\"I came here with no expectation or not knowing what to do. After practicing vipassana meditation, mindfulness peaceful to be lifted. When you're walking meditation every day, it seems like nothing. But it's like you're climbing the mountain eventually you reach up the top of mountain without realizing it just there, amazing.\n\nIt helps my outside world definitely. My work has so many things going on. To do multi tasks, it's good to get thing done. Be mindful like the walking that we feel every stone to press our feet. When I work and the work would be more efficient. So, I done faster because my mind is solely focus.\"\n\nCome and experience for yourself the life changing effects of Vipassana Meditation with Master Acharavadee Wongsakon, at Bodhidhammayan Retreat, Saraburi - Thailand",
    categories: [
      { title: "Testimonial", slug: { current: "testimonial" } },
    ],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.rwongkarnwan,
  },
  {
    slug: "real-vipassana-meditation-is-the-ultimate-journey-to-within",
    title: "Real Vipassana meditation is the ultimate journey to within",
    publishedAt: "2025-03-04",
    imageUrl: "/images/blog/real-vipassana.jpg",
    excerpt: "Real Vipassana meditation is the ultimate journey to within. It requires determination, dedicated and discipline.",
    body: "Real Vipassana meditation is the ultimate journey to within. It requires determination, dedicated and discipline.\n\nIt's the qualification of the warrior mind.\n\nReal People, Real practice and Real Awakening.\n\nVipassana Meditation Course February 16 - 23, 2025\nAt Bohidammayan Retreat, Saraburi, THAILAND",
    categories: [{ title: "Motion", slug: { current: "motion" } }],
    tags: [{ title: "mindfulness", slug: { current: "mindfulness" } }],
    author: authors.master,
  },
  {
    slug: "vo-my-khai-hoan-anna",
    title: "Vo My Khai Hoan (Anna)",
    publishedAt: "2025-03-04",
    imageUrl: "/images/blog/vo-my-khai-hoan.jpg",
    excerpt: "A testimonial from Vo My Khai Hoan (Anna) sharing her experience with Vipassana meditation at Bodhidhammayan Retreat.",
    body: "Vo My Khai Hoan (Anna) shares her transformative experience with Vipassana meditation at Bodhidhammayan Retreat.\n\nCome and experience for yourself the life changing effects of Vipassana Meditation with Master Acharavadee Wongsakon, at Bodhidhammayan Retreat, Saraburi - Thailand",
    categories: [{ title: "Testimonial", slug: { current: "testimonial" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.rwongkarnwan,
  },
  {
    slug: "stephanie-kuo",
    title: "Stephanie Kuo",
    publishedAt: "2025-02-21",
    imageUrl: "/images/blog/stephanie-kuo.jpg",
    excerpt: "Stephanie Kuo shares her inspiring journey with Vipassana meditation at Bodhidhammayan Retreat.",
    body: "Stephanie Kuo shares her inspiring journey with Vipassana meditation at Bodhidhammayan Retreat.\n\nCome and experience for yourself the life changing effects of Vipassana Meditation with Master Acharavadee Wongsakon, at Bodhidhammayan Retreat, Saraburi - Thailand",
    categories: [{ title: "Testimonial", slug: { current: "testimonial" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.rwongkarnwan,
  },
  {
    slug: "new-cover-for-the-book-awaken-from-madness",
    title: "New cover for the book \"AWAKEN FROM MADNESS\"",
    publishedAt: "2024-06-04",
    imageUrl: "/images/blog/awaken-new-cover.jpg",
    excerpt: "The book \"AWAKEN FROM MADNESS\" by Master Acharavadee Wongsakon now has a beautiful new cover design.",
    body: "The book \"AWAKEN FROM MADNESS\" by Master Acharavadee Wongsakon now has a beautiful new cover design.\n\nAvailable on Amazon: https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    categories: [{ title: "Books", slug: { current: "books" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.master,
  },
  {
    slug: "have-we-ever-realized-that",
    title: "Have we ever realized that",
    publishedAt: "2024-04-26",
    imageUrl: "/images/blog/have-we-ever-realized.jpg",
    excerpt: "A reflection on the nature of life and the importance of mindfulness in our daily existence.",
    body: "Have we ever realized that our time in this world is limited?\n\nEvery moment we spend in anger, jealousy, or delusion is a moment wasted. The Buddha taught us that life is precious and impermanent.\n\nThrough meditation practice, we can learn to make the most of every moment, living with awareness and compassion.\n\n— Master Acharavadee Wongsakon",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [{ title: "mindfulness", slug: { current: "mindfulness" } }],
    author: authors.master,
  },
  {
    slug: "jealousy",
    title: "Jealousy",
    publishedAt: "2022-08-30",
    imageUrl: "/images/blog/jealousy.jpg",
    excerpt: "Understanding jealousy as one of the impurities of the mind and how meditation can help overcome it.",
    body: "Jealousy is one of the most destructive impurities of the mind. It arises from comparison and attachment, creating suffering for both the jealous person and those around them.\n\nThe Buddha taught that jealousy stems from a fundamental misunderstanding of the nature of reality. When we truly understand that all things are impermanent and that each person's karma is their own, jealousy naturally dissolves.\n\nThrough Vipassana meditation, we can observe jealousy as it arises in the mind, understand its true nature, and gradually free ourselves from its grip.\n\n— Master Acharavadee Wongsakon",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [{ title: "jealousy", slug: { current: "jealousy" } }],
    author: authors.master,
  },
  {
    slug: "are-you-making-the-most-of-your-life",
    title: "Are you making the most of your life?",
    publishedAt: "2022-08-25",
    imageUrl: "/images/blog/making-the-most.jpg",
    excerpt: "Early in the morning I woke up with the thought that \"death is the destiny of us all\".",
    body: "Early in the morning I woke up with the thought that \"death is the destiny of us all\".\n\nThe thought of wanting to run away arose in my mind, moved by the feeling that our lives should not end up like this. Soon I realized that this was exactly what Prince Siddhartha (Lord Buddha) had discovered, the truth that we will all die one day and that was the reason why he sought a way out of this cycle of birth and death.\n\nWe have to earn our living, be responsible with our jobs and follow our dreams forgetting that \"in the end, we are all going to die\". So, if that is our destiny, what are we doing right now?\n\nSo what should we do to make the time we have left the most valuable? We live from the time we are children until our last breath, and in the end we will turn to ashes. So why do we remain attached to our emotions if in the end we can take nothing with us? The mind is also a current. It cannot take anything with it. Not a house, a car, money, treasures or even our loved ones. So why are people so obsessed with worldly pleasures, accumulating ego and living their lives for such fake happiness?\n\nThe path of Vipassana practice serves to escape the cycle of rebirth permanently. You don't escape by watching a movie, listening to music or traveling. The true escape is practicing your mind to get rid of the seed of rebirth. I have successfully escaped; I will take the faithful to escape with me.\n\nNow that I am still alive, I allocate my time to many kinds of work. I set priorities and deal with urgent matters first. In reality, I live with the present moment, with the now. If a problem needs to be fixed, I do it immediately. I will never wait for tomorrow or next week.\n\nIn our last moments, we must stay with our breath, not with anything else. Just breathe in the present moment, work in the present moment\u2026 Practice like this and it will make the mind powerful.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [
      { title: "death", slug: { current: "death" } },
      { title: "mindfulness", slug: { current: "mindfulness" } },
    ],
    author: authors.master,
  },
  {
    slug: "where-are-we-after-death",
    title: "Where are we after Death?",
    publishedAt: "2022-08-24",
    imageUrl: "/images/blog/where-after-death.jpg",
    excerpt: "\"Mind is in the body, and the body is the mind.\" This is a saying that people often misunderstand.",
    body: "\"Mind is in the body, and the body is the mind.\" This is a saying that people often misunderstand. The mind is wherever the feeling occurs; therefore, the mind is located throughout the body from the fingertips to the crown of our head. As the mind dwells in the body, and every part of the body is where the mind locates, the mind and body are connected and considered one.\n\nThe mind has the power to control the physical body to act, speak, or think. Accordingly, the consequences of the actions following the influence of the mind will result in the physical body as well. When the physical body naturally deteriorates until passing away, the mind has to leave the body, and the karmic fruit of past deeds will be the karmic code that determines which realm the mind will go to—heaven, hell, or middle earth.\n\nThe common answer to this simple question is: \"to be born in heaven or hell depending on the past deeds\". In fact, there is a more detailed principle about the place the mind will go to.\n\nFirst of all, the last state of mind at the moment of death will be the first state of mind determining the next rebirth. Although one may have done so many good deeds, he can still have bad deeds accumulated in the mind and so, he or she may be born directly to a lower realm. At the very last moment, the mind will become weak and weary, like one who does not sleep all night. If the bad karma accumulated from the past that is attached in one's mind has strong power, and that person happens to think and fear its consequences, their mind cannot resist the power of the negative energy current and will go straight to bear the consequences in the hell realm.\n\nTherefore, the way we should set the mind at the last moment of life is to think about good and holy things such as the Buddha, the Arahants (Enlightened beings), or Nirvana, which will increase the chance to firstly be born in the higher realm before it is time to receive the awaiting bad consequences.",
    categories: [{ title: "Teaching", slug: { current: "teaching" } }],
    tags: [
      { title: "death", slug: { current: "death" } },
      { title: "rebirth", slug: { current: "rebirth" } },
    ],
    author: authors.master,
  },
  {
    slug: "top-ideas-in-buddhism",
    title: "Top Ideas in Buddhism and Famous Stories in Buddha's Time",
    publishedAt: "2016-07-06",
    imageUrl: "/images/blog/top-ideas-buddhism.jpg",
    excerpt: "The concepts and ideas in Buddhism are well explained in simple language that is easy to understand.",
    body: "The concepts and ideas in Buddhism are well explained in simple language that is easy to understand. Exactly the way Dhamma is. Simple and natural. The book will help you find true inner peace which is missing in human's life.\n\nFor the past few decades, the interest in Buddhism among Westerners has grown steadily from \"the religion and philosophy of the East\" to \"the religion of truth and wisdom.\"\n\nHowever, although there are numerous books and elaborate explanations on its principles, readers still find Buddhism study to be confusing and complicated. While the key to spiritual freedom is in regular Vipassana meditation practice, not memorizing the Buddhist scriptures, and that a person can only gain genuine spiritual insight into the Buddha's teachings or \"see\" Dhamma through direct meditation experiences, understanding the basics is still essential as it helps establish the right view about Buddhism and its essence.\n\nBuy on Amazon: https://www.amazon.com/Ideas-Buddhism-Famous-Stories-Buddhas/dp/616812506X",
    categories: [{ title: "Books", slug: { current: "books" } }],
    tags: [
      { title: "Buddha", slug: { current: "buddha" } },
      { title: "dhamma", slug: { current: "dhamma" } },
    ],
    author: authors.master,
  },
  {
    slug: "awaken-from-madness",
    title: "Awaken from Madness",
    publishedAt: "2016-07-06",
    imageUrl: "/images/blog/awaken-from-madness.jpg",
    excerpt: "The remarkable life story of Master Acharavadee Wongsakon and her journey from entrepreneur to Vipassana meditation teacher.",
    body: "Awaken from Madness tells the remarkable life story of Master Acharavadee Wongsakon — from a successful entrepreneur at the pinnacle of Thailand's fashion industry to a dedicated Vipassana meditation teacher.\n\nThis book chronicles her transformation and the discovery of Techo Vipassana meditation, offering readers a profound look into the power of meditation to transform lives.\n\nBuy on Amazon: https://www.amazon.com/AWAKEN-MADNESS-Acharavadee-Wongsakon-ebook/dp/B0CNXT8BRT",
    categories: [{ title: "Books", slug: { current: "books" } }],
    tags: [{ title: "dhamma", slug: { current: "dhamma" } }],
    author: authors.master,
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
