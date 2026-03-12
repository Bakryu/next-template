/**
 * Sanity Studio schema definitions.
 * These are ready to use with Sanity Studio v3.
 */

export const serviceSchema = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'icon', title: 'Icon', type: 'string', description: 'Lucide icon name (e.g., heart, scissors)' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'duration', title: 'Duration', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
};

export const galleryItemSchema = {
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 2 },
    { name: 'category', title: 'Category', type: 'string', validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
};

export const testimonialSchema = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'role', title: 'Role / Title', type: 'string' },
    { name: 'content', title: 'Content', type: 'text', rows: 4, validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'rating', title: 'Rating', type: 'number', validation: (rule: { min: (n: number) => { max: (n: number) => unknown } }) => rule.min(1).max(5), initialValue: 5 },
    { name: 'avatar', title: 'Avatar', type: 'image' },
    { name: 'order', title: 'Order', type: 'number', initialValue: 0 },
  ],
};

export const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'price', title: 'Price (EUR)', type: 'number', validation: (rule: { required: () => { min: (n: number) => unknown } }) => rule.required().min(0) },
    { name: 'compareAtPrice', title: 'Compare at Price', type: 'number' },
    { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'inStock', title: 'In Stock', type: 'boolean', initialValue: true },
    { name: 'stripeProductId', title: 'Stripe Product ID', type: 'string' },
    { name: 'stripePriceId', title: 'Stripe Price ID', type: 'string' },
  ],
};

export const pageSchema = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (rule: { required: () => unknown }) => rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{ type: 'section' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'OG Image', type: 'image' },
      ],
    },
  ],
};

export const sectionSchema = {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Services', value: 'services' },
          { title: 'About', value: 'about' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Contact', value: 'contact' },
          { title: 'FAQ', value: 'faq' },
          { title: 'CTA', value: 'cta' },
          { title: 'Map', value: 'map' },
        ],
      },
    },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
};

/** All schemas for Sanity Studio */
export const schemas = [
  serviceSchema,
  galleryItemSchema,
  testimonialSchema,
  productSchema,
  pageSchema,
  sectionSchema,
];
