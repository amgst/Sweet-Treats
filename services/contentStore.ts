import { Service, Package, Testimonial, ServiceCategory } from '../types';
import { SERVICES, PACKAGES, TESTIMONIALS } from '../constants';

// Extended content types for page-specific content
export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    backgroundImage: string;
  };
  featuredServicesTitle: string;
  featuredServicesDescription: string;
  whyChooseUs: {
    title: string;
    subtitle: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    image: string;
    quote: string;
    quoteAuthor: string;
  };
  testimonialsTitle: string;
}

export interface AboutContent {
  hero: {
    title: string;
    subtitle: string;
  };
  story: {
    title: string;
    paragraphs: string[];
    image: string;
  };
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface ContactContent {
  title: string;
  description: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}

export interface FooterContent {
  description: string;
  phone: string;
  email: string;
  socialLinks: {
    instagram: string;
    facebook: string;
  };
}

export interface SiteContent {
  services: Service[];
  packages: Package[];
  testimonials: Testimonial[];
  home: HomeContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
}

// Default content
const defaultContent: SiteContent = {
  services: SERVICES,
  packages: PACKAGES,
  testimonials: TESTIMONIALS,
  home: {
    hero: {
      title: 'Delicious Gelato, Desserts &',
      subtitle: 'Event Services',
      description: 'Book everything from premium gelato carts to full party planning in one place. We make your celebration sweet and stress-free.',
      primaryButtonText: 'Browse Services',
      secondaryButtonText: 'Get a Quote',
      backgroundImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop&q=80'
    },
    featuredServicesTitle: 'Popular Services',
    featuredServicesDescription: 'Our most requested additions to make your party pop.',
    whyChooseUs: {
      title: 'Why Party with SweetTreats?',
      subtitle: '',
      features: [
        {
          icon: 'Heart',
          title: 'Quality Ingredients',
          description: 'We use locally sourced dairy and real fruit for our gelatos, and premium ingredients for all catering.'
        },
        {
          icon: 'CheckCircle',
          title: 'Dietary Friendly',
          description: 'Vegan, gluten-free, halal, and nut-free options available for almost every service.'
        },
        {
          icon: 'DollarSign',
          title: 'Flexible Packages',
          description: 'From intimate gatherings to corporate galas, we have pricing tiers to fit your budget.'
        },
        {
          icon: 'Calendar',
          title: 'Easy Booking',
          description: 'Browse, compare, and book online. Or use our AI assistant to plan your event instantly.'
        }
      ],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop&q=80',
      quote: '"Sweet Perfection!"',
      quoteAuthor: 'Making memories one scoop at a time.'
    },
    testimonialsTitle: 'Sweet Words from Clients'
  },
  about: {
    hero: {
      title: 'Our Story',
      subtitle: 'Bringing the sweetest moments to life since 2018.'
    },
    story: {
      title: 'More than just Gelato',
      paragraphs: [
        'SweetTreats began as a single vintage gelato cart named "Bella" rolling through local farmers markets. Our founder, Maria, noticed that while people loved the ice cream, they were really looking for an experience—a moment of joy to share with loved ones.',
        'Today, we have grown into a full-service event hub. We realized that our clients wanted the same quality and care we put into our desserts applied to their entire event. That\'s why we launched our Marketplace, connecting you with trusted décor, photography, and planning services.'
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop&q=80'
    },
    values: [
      {
        icon: 'Heart',
        title: 'Our Mission',
        description: 'To remove the stress from event planning so you can focus on making memories.'
      },
      {
        icon: 'Smile',
        title: 'Our Values',
        description: 'Authenticity, inclusivity (dietary & cultural), and delivering pure joy.'
      },
      {
        icon: 'Sun',
        title: 'Our Promise',
        description: 'We show up early, we serve with a smile, and we clean up before we leave.'
      }
    ]
  },
  contact: {
    title: 'Let\'s Plan Your Party!',
    description: 'Fill out the form below or use our AI assistant to get started.',
    contactInfo: {
      phone: '(555) 123-4567',
      email: 'hello@sweettreats.com',
      address: '123 Sugar Lane, Sweet City'
    }
  },
  footer: {
    description: 'Bringing joy, sweetness, and seamless planning to your special events.',
    phone: '(555) 123-4567',
    email: 'hello@sweettreats.com',
    socialLinks: {
      instagram: '#',
      facebook: '#'
    }
  }
};

const STORAGE_KEY = 'sweettreats_content';
const ADMIN_KEY = 'sweettreats_admin_auth';

// Content Store Service
class ContentStore {
  private content: SiteContent;

  constructor() {
    this.content = this.loadContent();
  }

  private loadContent(): SiteContent {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading content from storage:', error);
    }
    return defaultContent;
  }

  private saveContent(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.content));
    } catch (error) {
      console.error('Error saving content to storage:', error);
    }
  }

  // Getters
  getContent(): SiteContent {
    return this.content;
  }

  getServices(): Service[] {
    return this.content.services;
  }

  getPackages(): Package[] {
    return this.content.packages;
  }

  getTestimonials(): Testimonial[] {
    return this.content.testimonials;
  }

  getHomeContent(): HomeContent {
    return this.content.home;
  }

  getAboutContent(): AboutContent {
    return this.content.about;
  }

  getContactContent(): ContactContent {
    return this.content.contact;
  }

  getFooterContent(): FooterContent {
    return this.content.footer;
  }

  // Setters
  setServices(services: Service[]): void {
    this.content.services = services;
    this.saveContent();
  }

  setPackages(packages: Package[]): void {
    this.content.packages = packages;
    this.saveContent();
  }

  setTestimonials(testimonials: Testimonial[]): void {
    this.content.testimonials = testimonials;
    this.saveContent();
  }

  setHomeContent(home: HomeContent): void {
    this.content.home = home;
    this.saveContent();
  }

  setAboutContent(about: AboutContent): void {
    this.content.about = about;
    this.saveContent();
  }

  setContactContent(contact: ContactContent): void {
    this.content.contact = contact;
    this.saveContent();
  }

  setFooterContent(footer: FooterContent): void {
    this.content.footer = footer;
    this.saveContent();
  }

  // Reset to defaults
  resetToDefaults(): void {
    this.content = defaultContent;
    this.saveContent();
  }

  // Admin authentication
  isAuthenticated(): boolean {
    return localStorage.getItem(ADMIN_KEY) === 'authenticated';
  }

  login(password: string): boolean {
    // Default password is "admin" - in production, use proper authentication
    if (password === 'admin') {
      localStorage.setItem(ADMIN_KEY, 'authenticated');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(ADMIN_KEY);
  }
}

export const contentStore = new ContentStore();

