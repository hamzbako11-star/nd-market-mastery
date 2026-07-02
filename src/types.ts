export type Theme = 'dark' | 'light';

export interface Service {
  id: string;
  name: string;
  price: number;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface SyllabusConcept {
  id: string;
  title: string;
  category: 'Fundamentals' | 'Structure' | 'Advanced' | 'Management';
  description: string;
  details: string;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  description: string;
  topics: string[];
}

export interface WhyChooseUsFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  profit: string;
  winrate: string;
  before: string;
  after: string;
  text: string;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Charts' | 'Setups' | 'Sessions' | 'Dashboard' | 'Lifestyle';
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
