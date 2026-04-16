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

/** Google reviews (5★): text and reviewer lines match the listing as provided. Owner replies omitted. */
export const testimonials: Testimonial[] = [
  {
    id: 't-d-sheffield',
    name: 'T. D. Sheffield',
    service: 'Local Guide · 19 reviews · 16 photos',
    rating: 5,
    comment:
      'Such a good energy in this place.. I found Ida and her daughter to be kind souls.   They took their time with my hair and it looks fabulous… no complaints!! Small shop, and I can appreciate the coziness… with that said, call first to check their availability. I will be returning for more braids in the future!!',
    date: '2023-04-12',
  },
  {
    id: 'koenyda-washington',
    name: 'Koenyda Washington',
    service: '2 reviews',
    rating: 5,
    comment:
      "Hello my name is Ms. Washington. I'm from Atlanta, Georgia. Me and my mother came in to get our hair done today. Maya always does an outstanding job the price is right and the time is convenient for the costumer. Please come out to get your hair done at Maya's African Hair Braiding on Campbellton Road in Atlanta.",
    date: '2025-07-18',
  },
  {
    id: 'sanquesha-cole',
    name: 'Sanquesha Cole',
    service: '3 reviews · 1 photo',
    rating: 5,
    comment:
      'I have had a great experience going to Maya! She does great work and is very sweet! Very nice place and very fast braiding!!',
    date: '2025-08-14',
  },
  {
    id: 'binta-sonko',
    name: 'Binta Sonko',
    service: '2 reviews · 3 photos',
    rating: 5,
    comment:
      "Maya has been my hair magician since I was a kid! Every time she works her magic, my hair looks absolutely amazing, and I constantly get compliments. It's like having my own personal stylist who never fails to impress!",
    date: '2025-03-22',
  },
  {
    id: 'penda-guisse',
    name: 'Penda Guisse',
    service: '1 review',
    rating: 5,
    comment:
      'I love Maya she’s my favorite, she always hooks me up with late appointments I came here two weeks ago to get my hair done some long knotless and she finished it in 4 hours. Her shop is very clean and cozy. I 100% recommend',
    date: '2025-02-10',
  },
  {
    id: 'christine-w',
    name: 'Christine W (WealthyPlaceTraveler)',
    service: '8 reviews · 3 photos',
    rating: 5,
    comment:
      'I came to Maya in Atlanta from Texas and these ladies did an amazing job on my hair.',
    date: '2024-04-08',
  },
  {
    id: 'nia-pia',
    name: 'Nia Pia',
    service: '2 reviews · 1 photo',
    rating: 5,
    comment:
      'I had a great experience getting my hair braided here. I have alot of hair and they only took about 6 hours to complete my box braids. Treated with mousse and oil all for about $200. Definitely worth it and I would recommend.',
    date: '2025-01-25',
  },
  {
    id: 'mya-c',
    name: 'Mya C',
    service: 'Local Guide · 41 reviews · 13 photos',
    rating: 5,
    comment:
      "My 2nd time coming here to get my hair braided. Wonderful both times.  I went to get 2 braids and was in and out withing 30mins. And I wasn't up charged for having thick hair 👍🏽 Also my braider made sure I was very satisfied with my hair before I left.",
    date: '2025-05-30',
  },
  {
    id: 'anyia-perez',
    name: 'Anyia Perez',
    service: '3 reviews · 2 photos',
    rating: 5,
    comment:
      "Very professional, friendly and fast. Very tight neat work. Treated my hair, condition,  and it grows since coming to her . Highly recommended her. Really recommend her to anyone trying to get hair slayed. Rate her a 10 out of 10 you will not be disappointed she's great.",
    date: '2024-06-20',
  },
  {
    id: 'luciana-greer',
    name: 'Luciana Greer',
    service: 'Local Guide · 14 reviews',
    rating: 5,
    comment:
      "These ladies are professional and quick. I get microbraids. I always get compliments on my hair even, after having it for nearly 2 months. While getting my hair done, I see several other styles being done on other customers. They always look good!! I won't go to anyone else in the Atlanta area for my braids!",
    date: '2024-03-15',
  },
  {
    id: 'deasia-anderson',
    name: 'DeAsia Anderson',
    service: '5 reviews · 2 photos',
    rating: 5,
    comment:
      'this salon provides exceptional service . i felt totally pampered . Ida and her sisters does amazing hair . the salon is so nice , all the staff are really friendly and professional . i will definitely be returning in the future , and high recommend this location .',
    date: '2024-05-02',
  },
  {
    id: 'ty-shaw',
    name: 'Ty Shaw',
    service: '5 reviews',
    rating: 5,
    comment:
      'The ladies were nice and super fast. They did my waist length small twists in just about 3 hours. Will definitely go back again.',
    date: '2024-04-28',
  },
  {
    id: 'tauralinda',
    name: 'Tauralinda',
    service: 'Local Guide · 129 reviews · 2 photos',
    rating: 5,
    comment:
      'Very quick and neat work. She did a good job on my hair today. She is open 7 days a week too, so stop by and get your hair done!',
    date: '2024-02-14',
  },
  {
    id: 'nakeisha-mack',
    name: 'nakeisha mack',
    service: '3 reviews',
    rating: 5,
    comment: 'Maya and her staff has did my hair for 12 years and counting they do great work',
    date: '2024-03-30',
  },
  {
    id: 'kalina-francois',
    name: 'Kalina Francois',
    service: '7 reviews · 1 photo',
    rating: 5,
    comment: 'Hair is very sleek and super fast! Maya is that girl! 10/10! I went from tore up, to glow up!',
    date: '2024-01-18',
  },
  {
    id: 'monica-mccowen',
    name: 'Monica McCowen',
    service: 'Local Guide · 169 reviews · 1,897 photos',
    rating: 5,
    comment:
      'OMG MY GIRLS BEEN GOING HERE FOR YEARS!!! THEY JUST DID MY 17 YEAR OLD BRAIDS & I KEEP TELLING HER YOUR HAIR IS SO BEAUTIFUL AFTER 4 DAYS LATER!! AWESOME JOB LADIES!!!',
    date: '2023-05-05',
  },
  {
    id: 'april-finch',
    name: 'April Finch',
    service: '3 reviews',
    rating: 5,
    comment:
      'Maya shop on Campbellton have been very good nice, respectful and very fast everybody need to come here cause it is very worth your money thanks to everybody work in maya hair braiding shop',
    date: '2023-04-28',
  },
  {
    id: 'somika-weathers',
    name: 'Somika weathers',
    service: 'Local Guide · 12 reviews',
    rating: 5,
    comment: 'Excellent African hair braided, she is fast, very neat & makes sure she does it right',
    date: '2025-04-05',
  },
  {
    id: 'nyja-webb',
    name: 'Nyja Webb',
    service: '5 reviews · 8 photos',
    rating: 5,
    comment:
      'Wonderful communication fast  braiding neat braiding  and affordable awesome service haven’t seen this type genuine in professional establishment in years',
    date: '2025-03-12',
  },
  {
    id: 'eshante-vincent',
    name: 'Eshante Vincent',
    service: '2 reviews',
    rating: 5,
    comment:
      'Got a simple cornrow style went by so fast and the work is great. Both ladies are very polite and patient',
    date: '2023-06-08',
  },
  {
    id: 'iemah-chavies',
    name: 'Iemah chavies',
    service: '4 reviews',
    rating: 5,
    comment:
      'I love them and they are the only shop I let do my hair. Very convenient since I stay 5mins away.',
    date: '2022-04-20',
  },
  {
    id: 'timika-clemons',
    name: 'Timika Clemons',
    service: '3 reviews',
    rating: 5,
    comment:
      'I’ve been coming to see Maya for years and I always leave satisfied 😊 she always understands the assignment. Very professional and excellent customer service!',
    date: '2022-05-14',
  },
  {
    id: 'tonia-cullins',
    name: 'Tonia Cullins',
    service: '3 reviews',
    rating: 5,
    comment:
      'Very nice they do braids good and the prices are good I love them been going to them for 3 to 4 years I would truly recommend  them.',
    date: '2022-03-30',
  },
  {
    id: 'toya-jotw',
    name: 'Toya JOTW',
    service: '1 review',
    rating: 5,
    comment:
      'First time here, and I will b returning. My hair was neat and braided exactly how I asked. Thanks Maya, I loveeeee my hair',
    date: '2023-05-20',
  },
  {
    id: 'somika-weathers-2',
    name: 'Somika Weathers',
    service: '2 reviews',
    rating: 5,
    comment: 'Maya is very quick & very neat, she makes sure that you are satisfied.',
    date: '2025-06-01',
  },
  {
    id: 'niecy-walker',
    name: 'Niecy Walker',
    service: '11 reviews',
    rating: 5,
    comment:
      'Need my hair done after work and for my birthday. Got me in after work and done neat, fast. Will be coming back to get  my hair down this will be my second place to go',
    date: '2023-07-02',
  },
  {
    id: 'tori-hill',
    name: 'Tori Hill',
    service: '2 reviews · 1 photo',
    rating: 5,
    comment: 'Great work on my hair I love it',
    date: '2024-02-28',
  },
  {
    id: 'jayla-thurman',
    name: 'Jayla Thurman',
    service: '9 reviews · 1 photo',
    rating: 5,
    comment: 'Called them at 4:30 they took me at 4:45 and I was out by 6! They did great thank you so much!',
    date: '2024-05-18',
  },
  {
    id: 'makilia-moore',
    name: 'Makilia Moore',
    service: '2 reviews',
    rating: 5,
    comment:
      'Very pretty braiding and very nice hood customer service and prices are nice 👍🏾 Been coming here for a long time now',
    date: '2022-06-02',
  },
  {
    id: 'jermelle-white',
    name: 'Jermelle White',
    service: '1 review',
    rating: 5,
    comment:
      'I loves these ladies they get my right every time, their clean neat nice and always in perfect timing🙏❤️❤️',
    date: '2022-04-12',
  },
  {
    id: 'matishia-stegall',
    name: 'Matishia Stegall',
    service: 'Local Guide · 169 reviews · 1 photo',
    rating: 5,
    comment: 'She did a Wonderful job on branding my hair thank you Maya   matishia',
    date: '2023-06-25',
  },
  {
    id: 'keanu-watts',
    name: 'Keanu Watts',
    service: '1 review',
    rating: 5,
    comment:
      'Great and fast service I got individuals and was done in 3 hours super nice and friendly definitely coming back',
    date: '2022-05-22',
  },
  {
    id: 'latoya-andrews',
    name: 'Latoya Andrews',
    service: '7 reviews · 7 photos',
    rating: 5,
    comment:
      'They are very friendly people and will get your hair done the way you want it at the right price',
    date: '2022-04-08',
  },
  {
    id: 'zhariah-sirmons',
    name: 'Zhariah Sirmons',
    service: '1 review',
    rating: 5,
    comment: 'Very good customer service very nice very fast service and caring please go check them out ♥️',
    date: '2024-01-12',
  },
  {
    id: 'venise-raton',
    name: 'venise Raton',
    service: '1 review',
    rating: 5,
    comment: 'Maya braided my hair yesterday and I love it . I will be coming back.',
    date: '2023-08-14',
  },
  {
    id: 'sadio-guisse',
    name: 'Sadio Guisse',
    service: '1 review',
    rating: 5,
    comment: 'Maya did a amazing job on my hair definitely coming back.',
    date: '2022-03-18',
  },
  {
    id: 'babygirl-dennis',
    name: 'BabyGirl Dennis',
    service: 'Local Guide · 165 reviews · 33 photos',
    rating: 5,
    comment: 'She was Able to get me in and out cute knotless braids clean parts',
    date: '2023-09-01',
  },
  {
    id: 'shawns-alittle-everything',
    name: "Shawn's Alittle Of Everything",
    service: '12 reviews',
    rating: 5,
    comment: 'Great  neat fast service I was in and out within 3 hours',
    date: '2023-07-28',
  },
  {
    id: 'raviance-bigsby',
    name: 'Raviance Bigsby',
    service: '8 reviews',
    rating: 5,
    comment: 'Love this place! Reasonable, No wait & I’m always satisfied.',
    date: '2023-05-08',
  },
  {
    id: 'eric-dawkins',
    name: 'Eric Dawkins',
    service: '1 review',
    rating: 5,
    comment: 'Absolutely love the service\nPrice\n$160–180',
    date: '2025-08-20',
  },
  {
    id: 'mamadou-ndiaye',
    name: 'Mamadou Ndiaye',
    service: '1 review',
    rating: 5,
    comment: 'Great customer service',
    date: '2022-05-30',
  },
  {
    id: 'tanishia-williams',
    name: 'Tanishia Williams',
    service: 'Local Guide · 80 reviews · 7 photos',
    rating: 5,
    comment: 'Loved them',
    date: '2024-03-05',
  },
];

export const galleryImages: GalleryImage[] = [];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '10:30 AM', close: '8:00 PM' },
  { day: 'Tuesday', open: '8:30 AM', close: '8:00 PM' },
  { day: 'Wednesday', open: '10:30 AM', close: '8:00 PM' },
  { day: 'Thursday', open: '8:30 AM', close: '8:00 PM' },
  { day: 'Friday', open: '8:30 AM', close: '8:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '8:00 PM' },
  { day: 'Sunday', open: '10:30 AM', close: '8:00 PM' },
];

/** Add Instagram, Facebook, etc. when you have official links. */
export const socialLinks: SocialLink[] = [];

export const contactInfo = {
  phone: '+14049482969',
  email: 'info@mayaafricanhairbraiding.com',
  address: '2221 Campbellton Rd SW, Atlanta, GA 30311',
  location: 'Hair salon on Campbellton Rd, Atlanta, Georgia',
  hours: businessHours,
};

/** Update with your PayPal.Me or deposit link before taking paid bookings. */
export const PAYPAL_DEPOSIT_LINK = 'https://paypal.me/kine05/20';
