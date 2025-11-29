import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  CATERING = 'Catering & Desserts',
  EVENTS = 'Event & Party Services',
  RENTALS = 'Rentals & Add-ons',
  DIGITAL = 'Digital & Marketing',
}

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  priceStart: number;
  image: string;
  features: string[];
  icon?: LucideIcon;
}

export interface Package {
  id: string;
  title: string;
  guestCount: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}
