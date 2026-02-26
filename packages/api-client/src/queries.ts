import { groq } from "next-sanity";

const postFields = `
  _id,
  _type,
  title,
  slug,
  publishedAt,
  mainImage,
  excerpt,
  "categories": categories[]->{ _id, _type, title, slug },
  "tags": tags[]->{ _id, _type, title, slug },
  "author": author->{ _id, _type, name, slug, image, bio },
  seo
`;

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...$limit] {
    ${postFields}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields},
    body
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc)[0...$limit] {
    ${postFields}
  }
`;

export const postsByTagQuery = groq`
  *[_type == "post" && $tagSlug in tags[]->slug.current] | order(publishedAt desc)[0...$limit] {
    ${postFields}
  }
`;

export const paginatedPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[$start...$end] {
    ${postFields}
  }
`;

export const totalPostsCountQuery = groq`
  count(*[_type == "post"])
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    _type,
    title,
    slug,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;

export const allTagsQuery = groq`
  *[_type == "tag"] | order(title asc) {
    _id,
    _type,
    title,
    slug
  }
`;

export const allAuthorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    _type,
    name,
    slug,
    image,
    bio
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    title,
    description,
    logo,
    contactEmail,
    contactPhone,
    facebookUrl,
    youtubeUrl
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post"].slug.current
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $currentSlug && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc)[0...3] {
    ${postFields}
  }
`;
