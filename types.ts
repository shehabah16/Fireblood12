// Define types for the data models

export interface Ingredient {
  name: string;
  description: string;
  image: string;
  feature: string;
}

export interface Testimonial {
  name: string;
  title: string;
  review: string;
  image: string;
  stars: number;
}

export interface Plan {
  name: string;
  description: string;
  price: number;
  unit: string;
  discount?: string;
  features: string[];
  ctaText: string;
  ctaType: 'primary' | 'secondary';
  popular: boolean;
}

export interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}
