import { Service, ServiceCategory, Package, Testimonial } from './types';
import { 
  IceCream, 
  Cake, 
  PartyPopper, 
  Camera, 
  Music, 
  Utensils, 
  Truck, 
  Palette, 
  Video 
} from 'lucide-react';

export const SERVICES: Service[] = [
  // Catering
  {
    id: 'gelato-cart',
    title: 'Gelato Cart Hire',
    category: ServiceCategory.CATERING,
    shortDescription: 'Premium Italian gelato served from our vintage carts.',
    fullDescription: 'Our signature service! We bring the joy of authentic Italian gelato to your event. Includes a uniformed server, premium waffle cones, cups, and your choice of 6 flavors from our menu of over 30 options. Dairy-free sorbet options available.',
    priceStart: 350,
    image: 'https://picsum.photos/800/600?random=1',
    features: ['2 Hours Service', 'Unlimited Servings', '6 Flavors', 'Uniformed Staff'],
    icon: IceCream
  },
  {
    id: 'custom-cakes',
    title: 'Custom Celebration Cakes',
    category: ServiceCategory.CATERING,
    shortDescription: 'Bespoke cakes for weddings, birthdays, and anniversaries.',
    fullDescription: 'From towering wedding tiers to fun character birthday cakes, our pastry chefs create edible masterpieces. We offer gluten-free, vegan, and nut-free options upon request.',
    priceStart: 80,
    image: 'https://picsum.photos/800/600?random=2',
    features: ['Custom Design Consultation', 'Premium Ingredients', 'Delivery Included'],
    icon: Cake
  },
  {
    id: 'ice-cream-truck',
    title: 'Vintage Ice Cream Truck',
    category: ServiceCategory.CATERING,
    shortDescription: 'A nostalgic touch for large outdoor events.',
    fullDescription: 'Our fully restored vintage truck serves soft serve, popsicles, and slushies. Perfect for festivals, corporate fun days, and large weddings.',
    priceStart: 500,
    image: 'https://picsum.photos/800/600?random=3',
    features: ['3 Hours Service', 'Music System', 'Full Menu Available'],
    icon: Truck
  },
  
  // Events
  {
    id: 'event-planning',
    title: 'Full Event Planning',
    category: ServiceCategory.EVENTS,
    shortDescription: 'Stress-free coordination for your special day.',
    fullDescription: 'Let us handle the logistics. From venue sourcing to vendor management and day-of coordination, we ensure your event runs smoothly so you can enjoy the party.',
    priceStart: 1000,
    image: 'https://picsum.photos/800/600?random=4',
    features: ['Vendor Management', 'Timeline Creation', 'On-site Coordination'],
    icon: PartyPopper
  },
  {
    id: 'photobooth',
    title: 'Photo Booth Rental',
    category: ServiceCategory.EVENTS,
    shortDescription: 'Capture the fun with instant prints and digital props.',
    fullDescription: 'Modern open-air photo booths with custom backdrops and fun props. Guests get instant prints and can share directly to social media.',
    priceStart: 250,
    image: 'https://picsum.photos/800/600?random=5',
    features: ['Unlimited Prints', 'Custom Props', 'Digital Gallery'],
    icon: Camera
  },
  {
    id: 'entertainment',
    title: 'Entertainment & DJs',
    category: ServiceCategory.EVENTS,
    shortDescription: 'Music, magicians, and games for all ages.',
    fullDescription: 'Keep the energy high with our professional DJs or keep the kids entertained with balloon artists and face painters.',
    priceStart: 150,
    image: 'https://picsum.photos/800/600?random=6',
    features: ['Professional Equipment', 'Custom Playlists', 'Interactive Acts'],
    icon: Music
  },

  // Rentals
  {
    id: 'serving-equipment',
    title: 'Serving Equipment Rental',
    category: ServiceCategory.RENTALS,
    shortDescription: 'Chafing dishes, platters, and elegant utensil sets.',
    fullDescription: 'High-quality serving ware for buffet-style events. We deliver clean equipment and handle the cleaning after pick-up.',
    priceStart: 50,
    image: 'https://picsum.photos/800/600?random=7',
    features: ['Delivery & Pickup', 'Cleaning Included', 'Elegant Designs'],
    icon: Utensils
  },

  // Digital
  {
    id: 'invitations',
    title: 'E-Cards & Invitations',
    category: ServiceCategory.DIGITAL,
    shortDescription: 'Beautifully designed digital or print-ready invites.',
    fullDescription: 'Set the tone for your event with custom graphic design. specific to your theme.',
    priceStart: 30,
    image: 'https://picsum.photos/800/600?random=8',
    features: ['Custom Design', 'RSVP Tracking Support', 'Fast Turnaround'],
    icon: Palette
  },
  {
    id: 'video-editing',
    title: 'Event Video Editing',
    category: ServiceCategory.DIGITAL,
    shortDescription: 'Turn your raw footage into a cinematic highlight reel.',
    fullDescription: 'Send us your phone clips or professional footage, and we will edit them into a beautiful memory with music and effects.',
    priceStart: 100,
    image: 'https://picsum.photos/800/600?random=9',
    features: ['Color Grading', 'Music Sync', 'Social Media Format'],
    icon: Video
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'mini',
    title: 'Mini Party Pack',
    guestCount: 'Up to 40 Guests',
    price: 450,
    features: [
      '2 Hour Gelato Cart Service',
      '3 Flavors',
      'Standard Cones & Cups',
      '1 Server',
      'Setup & Cleanup'
    ]
  },
  {
    id: 'family',
    title: 'Family Celebration',
    guestCount: 'Up to 100 Guests',
    price: 850,
    recommended: true,
    features: [
      '3 Hour Gelato Cart Service',
      '6 Flavors',
      'Premium Waffle Cones',
      'Custom Cake (Small Tier)',
      'Digital E-Invites Design',
      '2 Servers'
    ]
  },
  {
    id: 'grand',
    title: 'Grand Event Gala',
    guestCount: 'Up to 200 Guests',
    price: 1800,
    features: [
      '4 Hour Gelato Service',
      'Full Dessert Table Setup',
      'Photo Booth (3 Hours)',
      'Event Coordinator (Day-of)',
      'Custom Toppings Bar',
      '3 Servers'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Bride",
    content: "The gelato cart was the highlight of our wedding reception! The guests absolutely loved the Salted Caramel flavor.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Ross",
    role: "Corporate Event Manager",
    content: "SweetTreats handled our annual gala perfectly. The booking process was seamless, and the staff was incredibly professional.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Birthday Party Host",
    content: "I used their package deal for my daughter's sweet 16. Having the cake and photo booth in one booking saved me so much stress!",
    rating: 4
  }
];
