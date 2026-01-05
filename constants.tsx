
import React from 'react';
import { Service, Project } from './types';

export const COLORS = {
  primary: '#1F1F1F',
  secondary: '#D6C4A1',
  accent: '#C9A24D',
  cta: '#1E7F63', // Indian Green for trust and WhatsApp
  background: '#FAFAFA',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'House Construction',
    description: 'A-Grade construction for independent houses and villas with 100% material transparency.',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Flat & Villa Interiors',
    description: 'Smart, space-saving, and luxury interior designs tailored for Indian families.',
    icon: '🛋️',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Commercial Projects',
    description: 'High-end retail and office interiors that enhance business value and employee comfort.',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Turnkey Home Projects',
    description: 'We handle everything from plan approval to the final housewarming ceremony.',
    icon: '🗝️',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'The Heritage Villa',
    category: 'Hyderabad, TS',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'p2',
    title: 'Modern 3BHK Apartment',
    category: 'Bangalore, KA',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'p3',
    title: 'Royal Independent House',
    category: 'Chennai, TN',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'p4',
    title: 'Corporate HQ Design',
    category: 'Pune, MH',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200',
  },
];
