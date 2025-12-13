import type { Category, ServiceProvider } from '@/lib/types';
import { Construction, Scissors, Wrench } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Carpenters',
    slug: 'carpenters',
    icon: Wrench,
    image: getImage('carpenter-category'),
  },
  {
    id: '2',
    name: 'Masons',
    slug: 'masons',
    icon: Construction,
    image: getImage('mason-category'),
  },
  {
    id: '3',
    name: 'Salons',
    slug: 'salons',
    icon: Scissors,
    image: getImage('salon-category'),
  },
];

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Nimal Fernando',
    category: 'Carpenters',
    location: 'Colombo',
    rating: 4.8,
    reviewCount: 34,
    image: getImage('avatar1'),
    description: 'Experienced carpenter with over 15 years in the field. Specializing in custom furniture and home renovations. Quality craftsmanship guaranteed.',
    yearsOfExperience: 15,
    skills: ['Custom Furniture', 'Wood Finishing', 'Cabinetry', 'Renovations'],
    availability: 'Weekdays, 9am - 5pm',
    hourlyRate: 25,
    services: [
      { name: 'Custom Table', price: 'Starts from LKR 20,000' },
      { name: 'Wardrobe Building', price: 'Starts from LKR 50,000' },
      { name: 'Door Repair', price: 'LKR 5,000 per hour' },
    ],
    reviews: [
      { id: 'r1', clientName: 'Saman Perera', rating: 5, comment: 'Excellent work! Very professional and finished on time.', date: '2023-05-20' },
      { id: 'r2', clientName: 'Kasun Jayasuriya', rating: 4, comment: 'Good quality furniture. A bit expensive but worth it.', date: '2023-04-12' },
    ],
  },
  {
    id: '2',
    name: 'Sunil Masonry Works',
    category: 'Masons',
    location: 'Kandy',
    rating: 4.5,
    reviewCount: 21,
    image: getImage('avatar2'),
    description: 'Your trusted partner for all masonry and construction work. We handle projects of all sizes, from small repairs to full house construction.',
    yearsOfExperience: 20,
    skills: ['Bricklaying', 'Plastering', 'Tiling', 'Concrete Work'],
    availability: 'Monday - Saturday',
    services: [
      { name: 'Wall Plastering', price: 'LKR 80 per sq. ft.' },
      { name: 'Floor Tiling', price: 'LKR 120 per sq. ft.' },
      { name: 'Foundation Work', price: 'Project-based' },
    ],
    reviews: [
      { id: 'r3', clientName: 'Anura Bandara', rating: 5, comment: 'Very reliable team. They completed my house extension project perfectly.', date: '2023-06-15' },
    ],
  },
  {
    id: '3',
    name: 'The Style Lounge',
    category: 'Salons',
    location: 'Galle',
    rating: 4.9,
    reviewCount: 152,
    image: getImage('avatar3'),
    description: 'A premium salon experience in the heart of Galle. We offer a wide range of hair and beauty services with a focus on customer satisfaction.',
    yearsOfExperience: 10,
    skills: ['Hair Cutting & Styling', 'Coloring', 'Facials', 'Manicures & Pedicures'],
    availability: 'Tuesday - Sunday, 10am - 7pm',
    services: [
      { name: 'Gent\'s Haircut', price: 'LKR 1,500' },
      { name: 'Ladies\' Haircut & Blowdry', price: 'Starts from LKR 3,000' },
      { name: 'Full Hair Color', price: 'Starts from LKR 8,000' },
    ],
    reviews: [
      { id: 'r4', clientName: 'Jessica', rating: 5, comment: 'Best haircut I\'ve had in years! The stylists are amazing.', date: '2023-07-01' },
      { id: 'r5', clientName: 'Roshini Silva', rating: 5, comment: 'Beautiful salon and very friendly staff. Loved my facial.', date: '2023-06-25' },
    ],
  },
];
