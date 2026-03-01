import type { Metadata } from "next";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Master's Biography",
  description:
    "The life story of Master Acharavadee Wongsakon — from entrepreneur to Vipassana meditation teacher.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Master's Biography - Master Acharavadee",
    description:
      "The life story of Master Acharavadee Wongsakon — from entrepreneur to Vipassana meditation teacher.",
  },
};

const timeline = [
  {
    id: "early-life",
    title: "Early Life",
    quote:
      "How does this happen, when a person is at the pinnacle of her success making millions of dollars and instantly decides that nothing in the material world matters anymore? This epiphany happened in a flash.",
    paragraphs: [
      "Acharavadee Wongsakon grew up in a modest home in Bangkok, Thailand as her mother struggled to sell her Thai desserts in the local market. Acharavadee often saw her mother crying at night, seeing her mother not able to sell her desserts. Little Acharavadee wished and promised herself that one day she would be able to take care of her mother and buy her all the things she could not afford. As she grew older, Acharavadee worked hard in school and took various jobs to earn her tuition for University and eventually, graduated and found employment in Journalism, the music and marketing business to finally start her highly successful fashion jewelry design company, which took Asia by storm.",
      "On the way to the top, Acharavadee Wongsakon, like everyone on the road to success, faced her ups and downs. There were great achievements and disappointments, failures. Her personal life was full of regret and tragedy. During her mid-30s Acharavadee suffered from a long period of depression caused by the loss of her first child. Her first marriage had failed and even after climbing the ladder of success to the very top, she still faced a crisis where she almost lost all her wealth. Adding her strong personality and an unsolved episode of rage and strong anger issues, Acharavadee was carrying a big burden and suffering despite all the wealth and success she had accumulated. It was the fear of failure and the promise she had made to her mother that kept driving her up the ladder of success.",
    ],
  },
  {
    id: "discovering-vipassana",
    title: "Discovering Vipassana Meditation",
    paragraphs: [
      "Being wounded in the past from all the sorrows in her life, it wasn't the search for enlightenment the reason for her first Vipassana Meditation retreat, but instead, it was her fear that her accumulated good deed force of merit from her past would run out, and so, her life could be ruined again just like she had experienced before.",
      "Acharavadee discovered Vipassana meditation, at the invitation of a good friend that encouraged her to join a 10-day meditation retreat. During her first retreat she experienced many struggles, even thinking of running away or pretending to fall from the stairs just to be able to go back home. However, with her strong determination she finished her retreat and after, she experienced for the first time a genuine feeling of peace in her mind, a kind of inner peace that she had never felt before.",
      "Immerse in the middle of Thailand's high society, Vipassana meditation had triggered a light within Acharavadee, who now clearly saw how the empire she had built was a trap feeding her ego, unable to escape from the nonstop need for success and gain.",
    ],
  },
  {
    id: "techo-vipassana",
    title: "Techo Vipassana, the teachings of Venerable Som Dej Toh",
    image: "/images/biography-somdej.webp",
    imageAlt: "Venerable Som Dej Toh",
    paragraphs: [
      "After the many meditation retreats, the greed and the anger that Acharavadee had accumulated started dissipating and her faith grew stronger in the teachings of the Buddha. At the time, Acharavadee took her practice even more seriously and started to isolate herself at home and practice for long periods like an ascetic, meditating at least 12 hours a day. It was at that time when an unexpected twist happened to her that would change her meditation practice forever. During one day of solitude meditation, Venerable Som Dej Toh, came to teach her in the middle of her meditation practice and taught her the Vipassana technique on how to burn the impurities of the mind.",
      "By setting her mind into complete stillness and developing her practice into Vipassana Meditation, this technique was particularly outstanding and effective because it used the fire element of the body to burn the impurities, a practice that would accelerate the results drastically, gradually obtaining the direct knowledge of nature in such a way that she was able to explain in scientific terms.",
      "With her knowledge, a great sense of gratitude towards Lord Buddha and his teachings aroused in her, driving Acharavadee to open The School of Life. A center in Bangkok focused on teaching the youth the principal teachings and values of Dhamma, strengthening the morality of the future generations of Thailand, reaching more than 4000 kids over 3 years.",
      "After teaching dhamma to the young, Master Acharavadee officially retired from the business world selling her business to buy a piece of land under the hills of Phutabhat Noi in Saraburi province, where she established the meditation retreat of Techo Vipassana to teach the miraculous technique that her Master had taught. From that moment on, what started as a modest 35-student course in the year 2011 has now become the shelter and meditation retreat for over 10,000 students from all around the country and overseas.",
      "She has ever since dedicated every day of her life to spreading the Buddha's teaching to her students and to the world with a compassionate heart and working hard to lift the minds of the many. Consequently, in 2017 Master Acharavadee opened a new center in Hat Yai in the south of Thailand so that more students could have access to the Buddha's teachings and learn Vipassana Meditation.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-dark">
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark to-brand-dark/95" />
        <div className="relative z-10 max-w-4xl mx-auto section-padding text-center">
          <span className="inline-block w-12 h-0.5 bg-brand-gold-500 mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Master&apos;s Life
          </h1>
          <p className="text-brand-gold-400/80 text-sm tracking-widest uppercase">
            The journey of Acharavadee Wongsakon
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto section-padding">
          {timeline.map((section, idx) => (
            <div key={section.id} className="mb-16 last:mb-0">
              {/* Section header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="shrink-0 w-8 h-8 rounded-full gold-gradient text-white text-sm font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">
                    {section.title}
                  </h2>
                </div>
                <Separator className="ml-12" />
              </div>

              {/* Quote */}
              {section.quote && (
                <blockquote className="ml-12 mb-8 pl-6 border-l-2 border-brand-gold-400 font-serif text-lg text-brand-dark/70 italic leading-relaxed">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}

              {/* Image */}
              {section.image && (
                <div className="ml-12 mb-8 max-w-sm">
                  <div className="relative aspect-3/4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
              )}

              {/* Paragraphs */}
              <div className="ml-12 space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-brand-dark/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="/images/biography-full.webp"
          alt="Master Acharavadee with students"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
      </section>
    </>
  );
}
