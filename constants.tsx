
import React from 'react';
import { Service, Project } from './types';

export const COLORS = {
  primary: '#0A0A0A',
  secondary: '#F5F5F7',
  accent: '#D4AF37',
  cta: '#1B4332', // Emerald green for trust and growth
  white: '#FFFFFF',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Full Home Interiors',
    description: 'Complete end-to-end interior solutions with personalized 3D designs, modular kitchens, and premium wardrobe systems.',
    icon: '01',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Luxury Construction',
    description: 'High-performance independent house and villa construction using A+ materials and rigorous site supervision.',
    icon: '02',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Smart Kitchens',
    description: 'Ergonomic modular kitchens featuring Italian finishes, soft-close hardware, and integrated smart appliances.',
    icon: '03',
    image: 'https://images.unsplash.com/photo-1556912177-c54030639a4c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Turnkey Commercial',
    description: 'Redefining workspaces with high-efficiency layouts and aesthetic brilliance for showrooms, offices, and cafes.',
    icon: '04',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Villa 7, Jubilee Hills',
    category: 'Architecture & Full Interiors',
    image: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'p2',
    title: 'The Sky Loft, Bangalore',
    category: 'Premium Penthouse Interiors',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'p3',
    title: 'Modern Haven, Chennai',
    category: 'Luxury Independent House',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'p4',
    title: 'Opaline Residency, Hyderabad',
    category: 'Minimalist Flat Interiors',
    image: 'https://images.unsplash.com/photo-1600210491892-03d94ac25676?auto=format&fit=crop&q=80&w=1200',
  },
];
