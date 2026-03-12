/**
 * GROQ queries for fetching data from Sanity CMS.
 * These are used when Sanity is configured; otherwise static data is used.
 */

/** Fetch all services */
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  name,
  description,
  icon,
  price,
  duration,
  "imageUrl": image.asset->url
}`;

/** Fetch all gallery items, optionally filtered by category */
export const galleryQuery = `*[_type == "galleryItem"] | order(order asc) {
  _id,
  title,
  description,
  category,
  "imageUrl": image.asset->url,
  "blurDataUrl": image.asset->metadata.lqip,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  featured,
  _createdAt
}`;

/** Fetch gallery items by category */
export const galleryByCategoryQuery = `*[_type == "galleryItem" && category == $category] | order(order asc) {
  _id,
  title,
  description,
  category,
  "imageUrl": image.asset->url,
  "blurDataUrl": image.asset->metadata.lqip,
  "width": image.asset->metadata.dimensions.width,
  "height": image.asset->metadata.dimensions.height,
  featured,
  _createdAt
}`;

/** Fetch all testimonials */
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  name,
  role,
  content,
  rating,
  "avatarUrl": avatar.asset->url
}`;

/** Fetch all products */
export const productsQuery = `*[_type == "product" && inStock == true] | order(_createdAt desc) {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  compareAtPrice,
  "imageUrl": image.asset->url,
  "blurDataUrl": image.asset->metadata.lqip,
  category,
  stripeProductId,
  stripePriceId
}`;

/** Fetch a single product by slug */
export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  compareAtPrice,
  "imageUrl": image.asset->url,
  "gallery": gallery[].asset->url,
  category,
  inStock,
  stripeProductId,
  stripePriceId
}`;

/** Fetch a page by slug */
export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  sections[]{
    _type,
    _key,
    sectionType,
    title,
    subtitle,
    content,
    "imageUrl": image.asset->url,
    items[]->
  },
  seo
}`;
