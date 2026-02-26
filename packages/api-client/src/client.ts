import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "./zod-schemas.js";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET ?? "production";
const apiVersion = "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImage) {
  return builder.image(source);
}
