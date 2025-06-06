export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'appetizers' | 'main-dishes' | 'soups' | 'curries' | 'desserts' | 'drinks';
  spicyLevel?: 1 | 2 | 3;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'restaurant' | 'team';
}