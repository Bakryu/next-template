import type { SiteConfig } from '@/types/site.types';

export const siteConfig: SiteConfig = {
  business: {
    name: 'Fleur & Co',
    type: 'florist',
    description: 'Artisanal flower arrangements for every occasion in the heart of Nice.',
    location: 'Nice, France',
    address: '12 Rue de la Fleur, 06000 Nice, France',
    phone: '+33 1 23 45 67 89',
    email: 'hello@fleurandco.fr',
    socials: {
      instagram: '@fleurandco',
      facebook: 'fleurandco',
    },
    openingHours: [
      { day: 'Monday', open: '09:00', close: '18:00' },
      { day: 'Tuesday', open: '09:00', close: '18:00' },
      { day: 'Wednesday', open: '09:00', close: '18:00' },
      { day: 'Thursday', open: '09:00', close: '18:00' },
      { day: 'Friday', open: '09:00', close: '19:00' },
      { day: 'Saturday', open: '10:00', close: '17:00' },
      { day: 'Sunday', open: '10:00', close: '13:00', closed: true },
    ],
  },

  hero: {
    headline: 'Beautiful Flowers, Crafted with Love',
    subheadline: 'Handcrafted arrangements for weddings, events, and everyday joy.',
    cta: { text: 'Browse Collection', href: '/gallery' },
    secondaryCta: { text: 'Contact Us', href: '#contact' },
    backgroundImage: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80',
  },

  services: [
    {
      name: 'Wedding Bouquets',
      description: 'Custom-designed bouquets that match your wedding theme perfectly.',
      icon: 'heart',
      price: 'From €120',
    },
    {
      name: 'Event Decoration',
      description: 'Full floral decoration for corporate events and private parties.',
      icon: 'sparkles',
      price: 'From €350',
    },
    {
      name: 'Weekly Subscriptions',
      description: 'Fresh flowers delivered to your door every week.',
      icon: 'calendar',
      price: '€45/week',
    },
    {
      name: 'Gift Arrangements',
      description: 'Surprise someone special with our curated gift arrangements.',
      icon: 'gift',
      price: 'From €55',
    },
  ],

  about: {
    title: 'Our Story',
    subtitle: 'Passion for Flowers, Commitment to Quality',
    paragraphs: [
      'Founded in 2018, Fleur & Co brings the beauty of artisanal floristry to the French Riviera. Every arrangement is handcrafted with locally-sourced, seasonal flowers.',
      'Our team of experienced florists combines traditional techniques with modern design to create stunning arrangements that tell a story.',
    ],
    mission:
      'We believe that flowers have the power to transform spaces and uplift spirits. Our mission is to bring the beauty of nature into everyday life through thoughtfully crafted, sustainable floral arrangements that celebrate every occasion.',
    values: [
      {
        title: 'Quality First',
        description:
          'We source only the freshest, highest-quality flowers from trusted local and international growers.',
      },
      {
        title: 'Sustainable Practices',
        description:
          'We are committed to eco-friendly practices, from biodegradable packaging to seasonal sourcing.',
      },
      {
        title: 'Personal Touch',
        description:
          'Every arrangement is handcrafted with care and customized to reflect your unique style and occasion.',
      },
    ],
    stats: [
      { label: 'Years of Experience', value: '8+' },
      { label: 'Happy Customers', value: '2,500+' },
      { label: 'Events Decorated', value: '400+' },
      { label: 'Flower Varieties', value: '150+' },
    ],
  },

  gallery: {
    title: 'Our Work',
    subtitle: 'Browse our latest floral arrangements and event decorations.',
    categories: ['All', 'Weddings', 'Events', 'Bouquets', 'Seasonal'],
  },

  testimonials: [
    {
      name: 'Sophie Martin',
      role: 'Bride',
      content:
        'Fleur & Co made our wedding absolutely magical. The floral arrangements were beyond our wildest dreams.',
      rating: 5,
    },
    {
      name: 'Jean-Pierre Dubois',
      role: 'Event Planner',
      content:
        'Professional, creative, and always on time. They are our go-to florists for every corporate event.',
      rating: 5,
    },
    {
      name: 'Marie Leclerc',
      content:
        'I have been a weekly subscription customer for over a year. The flowers are always fresh and beautifully arranged.',
      rating: 5,
    },
  ],

  faq: [
    {
      question: 'How far in advance should I order for a wedding?',
      answer:
        'We recommend booking at least 3 months in advance for weddings and large events to ensure availability of your preferred flowers.',
    },
    {
      question: 'Do you deliver?',
      answer:
        'Yes! We offer delivery throughout the Nice metropolitan area. Same-day delivery is available for orders placed before 11am.',
    },
    {
      question: 'Can I customize my subscription?',
      answer:
        'Absolutely. You can choose your preferred flowers, colors, and delivery schedule when setting up your subscription.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'If you are not satisfied with your arrangement, please contact us within 24 hours and we will make it right or provide a full refund.',
    },
  ],

  cta: {
    title: 'Ready to Brighten Your Space?',
    subtitle: 'Order your custom arrangement today or start a weekly subscription.',
    buttonText: 'Get Started',
    buttonHref: '#contact',
  },

  contact: {
    title: 'Get in Touch',
    subtitle: "We'd love to hear from you. Send us a message or visit our shop.",
    showMap: true,
    showForm: true,
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.123!2d7.262!3d43.710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzM2LjAiTiA3wrAxNSc0My4yIkU!5e0!3m2!1sen!2sfr!4v1234567890',
  },

  team: [
    {
      name: 'Camille Rousseau',
      role: 'Founder & Lead Florist',
      bio: 'With 15 years of experience in floral design, Camille brings classical French technique with a modern artistic eye.',
    },
    {
      name: 'Luc Moreau',
      role: 'Event Director',
      bio: 'Luc manages our event services and has coordinated floral design for over 200 weddings and corporate events.',
    },
    {
      name: 'Elise Bernard',
      role: 'Creative Designer',
      bio: 'Elise creates our seasonal collections and stays ahead of the latest trends in floral artistry.',
    },
    {
      name: 'Marc Dupont',
      role: 'Operations Manager',
      bio: 'Marc ensures that every order is prepared and delivered on time with the freshest flowers available.',
    },
  ],

  pricing: [
    {
      name: 'Bouquet Simple',
      description: 'Perfect for everyday occasions',
      price: '€45',
      features: [
        'Seasonal flower selection',
        'Hand-tied arrangement',
        'Complimentary wrapping',
        'Care instructions included',
      ],
    },
    {
      name: 'Bouquet Premium',
      description: 'Our most popular choice',
      price: '€85',
      featured: true,
      features: [
        'Premium flower varieties',
        'Custom color palette',
        'Luxury gift wrapping',
        'Personal message card',
        'Same-day delivery available',
        '7-day freshness guarantee',
      ],
    },
    {
      name: 'Subscription',
      description: 'Fresh flowers every week',
      price: '€45',
      period: 'week',
      features: [
        'Weekly fresh arrangements',
        'Seasonal variety rotation',
        'Free delivery included',
        'Pause or cancel anytime',
        'Priority customer support',
      ],
    },
  ],

  features: [
    {
      name: 'Same-Day Delivery',
      description: 'Order before 11am and receive your fresh flowers the same day within Nice.',
      icon: 'truck',
    },
    {
      name: 'Freshness Guaranteed',
      description: 'We source daily from local growers and guarantee 7-day freshness on all arrangements.',
      icon: 'leaf',
    },
    {
      name: 'Custom Designs',
      description: 'Every arrangement is handcrafted to match your specific preferences and occasion.',
      icon: 'sparkles',
    },
    {
      name: 'Secure Payments',
      description: 'Shop with confidence using our encrypted, secure payment processing.',
      icon: 'lock',
    },
    {
      name: 'Expert Support',
      description: 'Our team of experienced florists is available to help you choose the perfect arrangement.',
      icon: 'headphones',
    },
    {
      name: 'Eco-Friendly',
      description: 'Sustainably sourced flowers with biodegradable packaging and minimal waste practices.',
      icon: 'heart',
    },
  ],

  partners: [
    { name: 'Hôtel Negresco' },
    { name: 'Palais de la Méditerranée' },
    { name: 'Maison Ladurée' },
    { name: 'Le Méridien Nice' },
    { name: 'Galeries Lafayette' },
    { name: 'Château de Bellet' },
  ],

  stats: [
    { value: '8+', label: 'Years of Experience' },
    { value: '2,500+', label: 'Happy Customers' },
    { value: '400+', label: 'Events Decorated' },
    { value: '150+', label: 'Flower Varieties' },
  ],

  sections: ['hero', 'features', 'services', 'stats', 'about', 'gallery', 'team', 'pricing', 'testimonials', 'partners', 'faq', 'cta', 'contact'],

  blog: [
    {
      id: '1',
      title: 'How to Choose the Perfect Wedding Bouquet',
      excerpt:
        'Your wedding bouquet is one of the most important floral elements of your big day. Here are our tips for choosing the perfect one.',
      date: '2026-03-01',
      category: 'Weddings',
      readTime: '5 min',
    },
    {
      id: '2',
      title: "Seasonal Flowers Guide: What's in Season Right Now",
      excerpt:
        'Discover which flowers are at their peak this season and how to incorporate them into your arrangements.',
      date: '2026-02-20',
      category: 'Tips',
      readTime: '4 min',
    },
    {
      id: '3',
      title: 'How to Make Fresh Flowers Last Longer',
      excerpt:
        'Simple tips and tricks to extend the life of your cut flowers and keep them looking beautiful for days.',
      date: '2026-02-10',
      category: 'Tips',
      readTime: '3 min',
    },
    {
      id: '4',
      title: 'Event Decoration Trends for 2026',
      excerpt:
        'From minimalist elegance to bold color palettes — explore the top floral decoration trends this year.',
      date: '2026-01-28',
      category: 'Events',
      readTime: '6 min',
    },
    {
      id: '5',
      title: 'The Language of Flowers: What Each Flower Means',
      excerpt:
        'Every flower carries a meaning. Learn the symbolism behind popular blooms and choose arrangements that tell a story.',
      date: '2026-01-15',
      category: 'Education',
      readTime: '7 min',
    },
    {
      id: '6',
      title: 'Behind the Scenes: A Day at Our Flower Shop',
      excerpt:
        'Take a peek behind the curtain and see what goes into creating our signature arrangements every day.',
      date: '2026-01-05',
      category: 'About Us',
      readTime: '4 min',
    },
  ],

  legal: {
    lastUpdated: 'March 1, 2026',
  },

  defaultLocale: 'en',
  availableLocales: ['en', 'fr', 'de', 'ru'],
};
