export function HomeJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://masteracharavadee.com/#website",
        url: "https://masteracharavadee.com",
        name: "Master Acharavadee",
        description:
          "Acharavadee Wongsakon is a Thai lay Buddhist teacher teaching Techo Vipassana meditation at Bodhidhammayan retreat centers throughout Thailand.",
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": "https://masteracharavadee.com/#person",
        name: "Acharavadee Wongsakon",
        alternateName: "Master Acharavadee",
        description:
          "Thai lay Buddhist teacher and former entrepreneur, founder of Bodhidhammayan retreat and Knowing Buddha Organization.",
        url: "https://masteracharavadee.com",
        image:
          "https://masteracharavadee.com/images/master-portrait.jpg",
        sameAs: [
          "https://www.facebook.com/profile.php?id=61553446727150",
          "https://www.youtube.com/watch?v=55vd5-S6h0k",
        ],
        jobTitle: "Meditation Teacher",
        worksFor: {
          "@type": "Organization",
          name: "Bodhidhammayan Retreat",
          url: "https://www.bodhidhammayan.org/",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://masteracharavadee.com/#organization",
        name: "Bodhidhammayan Retreat",
        url: "https://www.bodhidhammayan.org/",
        founder: {
          "@id": "https://masteracharavadee.com/#person",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "masteracharavadee@Techovipassana.org",
          telephone: "+66851751411",
          contactType: "General Inquiry",
          availableLanguage: "English",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
