import { Service, Testimonial, GalleryImage, BusinessHours, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic African box braids with premium synthetic or human hair extensions. Perfect for protective styling and low maintenance.',
    price: 120,
    duration: '4-6 hours',
    category: 'braids',
    features: [
      'Premium hair extensions included',
      'Scalp protection treatment',
      'Styling tips included',
      '2-week follow-up consultation'
    ],
    popular: true,
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Trendy boho-style braids with loose, natural waves and effortless beauty for a free-spirited look.',
    price: 140,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Boho hair extensions included',
      'Custom wave pattern',
      'Natural styling techniques',
      'Maintenance guide included'
    ],
    popular: true,
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Traditional African cornrow braids in various patterns and designs for a timeless, cultural look.',
    price: 80,
    duration: '2-3 hours',
    category: 'braids',
    features: [
      'Custom pattern design',
      'Scalp massage included',
      'Protective styling tips',
      'Touch-up recommendations'
    ],
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Elegant goddess braids with added curls and waves for a stunning, versatile look.',
    price: 150,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Premium curly hair extensions',
      'Custom curl pattern',
      'Heat protection treatment',
      'Maintenance guide included'
    ],
  },
  {
    id: 'faux-locs',
    name: 'Faux Locs',
    description: 'Beautiful faux locs that mimic natural dreadlocks without the commitment.',
    price: 180,
    duration: '6-8 hours',
    category: 'braids',
    features: [
      'Premium loc hair included',
      'Custom length and thickness',
      'Installation care guide',
      '3-week follow-up included'
    ],
  },
  {
    id: 'braid-maintenance',
    name: 'Braid Maintenance',
    description: 'Professional maintenance service to keep your braids looking fresh and healthy.',
    price: 60,
    duration: '2-3 hours',
    category: 'maintenance',
    features: [
      'Scalp cleansing and conditioning',
      'Loose braid repair',
      'Edge touch-ups',
      'Styling refresh'
    ],
  },
  {
    id: 'consultation',
    name: 'Hair Consultation',
    description: 'Personalized consultation to determine the best braiding style for your hair type and lifestyle.',
    price: 25,
    duration: '30 minutes',
    category: 'consultation',
    features: [
      'Hair health assessment',
      'Style recommendations',
      'Maintenance planning',
      'Product recommendations'
    ],
  },
];

/** Excerpts from Google reviews (5★). Negative or non-substantive entries omitted. */
export const testimonials: Testimonial[] = [
  {
    id: 'chrishuna-craft',
    name: 'Chrishuna Craft',
    service: 'French curl braids',
    rating: 5,
    comment:
      'She did an amazing job on my French curl braids! At an affordable price too—she is my new regular hair stylist.',
    date: '2025-12-15',
  },
  {
    id: 'carmen-johnson',
    name: 'Carmen Johnson',
    service: 'Braids',
    rating: 5,
    comment:
      'Excellent place to get your hair braided. I did not want my hair too tight like at another shop—as she braided she checked in to be sure I was comfortable.',
    date: '2023-04-10',
  },
  {
    id: 'nadiyah-eddington',
    name: 'NaDiyah Eddington',
    service: 'Braids',
    rating: 5,
    comment:
      'Mariam is so sweet and accommodating. I love her hours because they work around my schedule. My hair looks absolutely beautiful—I am definitely coming back with my two little ones.',
    date: '2025-05-08',
  },
  {
    id: 'amber-brown',
    name: 'Amber Brown',
    service: 'Braids',
    rating: 5,
    comment:
      'My first time getting my hair done here and my visit was awesome. Great customer service and mutual communication. I will be back.',
    date: '2024-04-20',
  },
  {
    id: 'crystal-poe',
    name: 'Crystal Poe',
    service: 'Braids',
    rating: 5,
    comment:
      'I love my hair—and I am not even a braid girl—but I found my person. Miriam is the best braider ever.',
    date: '2024-03-12',
  },
  {
    id: 'nikki-nikki',
    name: 'Nikki Nikki',
    service: 'Braids',
    rating: 5,
    comment:
      'VERY professional, fast, neat, and good conversation. The space is super clean and set up like a real salon. She made sure I was comfortable—water and snacks for clients.',
    date: '2025-03-22',
  },
  {
    id: 'senia-bychoice',
    name: 'Senia ByChoice',
    service: 'Braids',
    rating: 5,
    comment:
      'Nothing but the best experiences here. Miriam is very professional and amazing at what she does. My braids are always super neat and last a long time—money well spent.',
    date: '2024-02-14',
  },
  {
    id: 'alyssa-jones',
    name: 'Alyssa Jones',
    service: 'Braids',
    rating: 5,
    comment:
      'Miriam is punctual, professional, and efficient. She squeezed me in the same day and did an amazing job. I left feeling so confident—you have a loyal customer in me.',
    date: '2024-05-30',
  },
  {
    id: 'ms-a',
    name: 'Ms. A',
    service: 'Braids',
    rating: 5,
    comment:
      'Miriam is a hidden diamond—truly an artist. The quality is exceptional and very neat, and she has a sweet, kind attitude toward customers.',
    date: '2022-06-18',
  },
  {
    id: 'patricia-cook',
    name: 'Patricia Cook',
    service: 'Bora braids',
    rating: 5,
    comment:
      'They took me last minute and were so professional. I felt relaxed and welcomed. I love love love my Bora braids!',
    date: '2025-06-20',
  },
  {
    id: 'precious-obukwelu',
    name: 'Precious Obukwelu',
    service: 'Boho knotless braids',
    rating: 5,
    comment:
      'The stylist did a beautiful job on my boho knotless braids. 10/10 would recommend—their work is very neat and you get what you pay for. Worth it!',
    date: '2024-01-08',
  },
  {
    id: 'courtney-reed',
    name: 'Courtney Reed',
    service: 'Braids',
    rating: 5,
    comment:
      'I have been going to Mariam for 12 years and I always leave happy. She does my hair neat and beautiful—I only trust her with my braids.',
    date: '2025-02-02',
  },
  {
    id: 'canice-allen',
    name: 'Canice Allen',
    service: 'Braids',
    rating: 5,
    comment:
      'Broadway Hair Braiding is so awesome! Reasonable prices and immaculate service. She is fast and great with kids—including very patient with special needs kids.',
    date: '2020-08-14',
  },
  {
    id: 'chris-reviews',
    name: 'Chris',
    service: 'Knotless braids',
    rating: 5,
    comment:
      'I was blown away! I got exactly what I was promised—neat braids, perfect parts, perfect length. Sweet, friendly, and personable.',
    date: '2022-09-05',
  },
  {
    id: 'popit4ash',
    name: 'Popit4ash',
    service: 'Braids',
    rating: 5,
    comment:
      'Trying someone new is scary—do not be afraid. Terrific results and you will leave very happy. Impeccable work; no fear of losing edges or braids slipping out.',
    date: '2023-07-11',
  },
  {
    id: 'princess-gbadamosi',
    name: 'Princess Gbadamosi',
    service: 'Braids',
    rating: 5,
    comment:
      'Highly recommend Broadway Hair Braiding! My braids are beautiful and neat, prices are great—book your appointment ASAP.',
    date: '2024-03-28',
  },
  {
    id: 'quai-burnside',
    name: 'Quai Burnside',
    service: 'Small box braids',
    rating: 5,
    comment:
      'I LOVE my hair! I called yesterday and got an appointment today at 7am for small box braids. Best braider ever—so nice and neat. Super satisfied.',
    date: '2022-04-25',
  },
  {
    id: 'terra-shaw',
    name: 'Terra Shaw',
    service: 'Braids',
    rating: 5,
    comment:
      'The best braider in Katy, Texas, hands down. After my big chop she has been the only braider in my head—I do not regret it one bit.',
    date: '2022-11-03',
  },
  {
    id: 'nadine-smith',
    name: 'Nadine Smith',
    service: 'Braids',
    rating: 5,
    comment:
      'I love coming to Mariam—my hair always comes out beautiful and I enjoy the warm hospitality. It feels like going to your auntie’s house.',
    date: '2022-07-19',
  },
  {
    id: 'hugo-perez',
    name: 'Hugo Perez',
    service: 'Braids',
    rating: 5,
    comment:
      'I highly recommend this place. I called several places before and the service was not satisfying—Broadway gave great customer service and the ladies are magnificent.',
    date: '2023-05-16',
  },
];

export const galleryImages: GalleryImage[] = [];

const openClose = { open: '7:00 AM', close: '10:00 PM' };

export const businessHours: BusinessHours[] = [
  { day: 'Monday', ...openClose },
  { day: 'Tuesday', ...openClose },
  { day: 'Wednesday', ...openClose },
  { day: 'Thursday', ...openClose },
  { day: 'Friday', ...openClose },
  { day: 'Saturday', ...openClose },
  { day: 'Sunday', ...openClose },
];

/** Add Instagram, Facebook, etc. when you have official links. */
export const socialLinks: SocialLink[] = [];

export const contactInfo = {
  phone: '+17134830211',
  email: 'info@broadwayhairbraiding.com',
  address: '18831 Brescia Ln, Katy, TX 77449',
  location: 'Professional hair braiding in Katy, Texas',
  hours: businessHours,
};

/** Update with your PayPal.Me or deposit link before taking paid bookings. */
export const PAYPAL_DEPOSIT_LINK = 'https://paypal.me/kine05/20';
