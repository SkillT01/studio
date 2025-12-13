import type { LucideIcon } from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  image: string;
};

export type Service = {
  name: string;
  price: string;
};

export type Review = {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
};

export type ServiceProvider = {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  yearsOfExperience: number;
  skills: string[];
  availability: string;
  hourlyRate?: number;
  services: Service[];
  reviews: Review[];
};
