
export interface Source {
  title: string;
  uri: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export type HouseType = 'Flat' | 'Villa' | 'Independent House' | 'Commercial';

export enum BudgetRange {
  BELOW_10 = 'Below ₹10 Lakhs',
  TEN_TO_TWENTY_FIVE = '₹10–25 Lakhs',
  TWENTY_FIVE_TO_FIFTY = '₹25–50 Lakhs',
  FIFTY_PLUS = '₹50 Lakhs+',
}
