import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Pad Thai',
    description: 'Stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts in a sweet and savory sauce.',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'main-dishes',
    spicyLevel: 1,
    isGlutenFree: true
  },
  {
    id: 2,
    name: 'Tom Yum Goong',
    description: 'Hot and sour soup with shrimp, lemongrass, galangal, and kaffir lime leaves.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'soups',
    spicyLevel: 3
  },
  {
    id: 3,
    name: 'Green Curry',
    description: 'Coconut milk based curry with green curry paste, bamboo shoots, Thai basil, and your choice of protein.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'curries',
    spicyLevel: 2
  },
  {
    id: 4,
    name: 'Mango Sticky Rice',
    description: 'Sweet sticky rice with fresh mango slices and coconut cream sauce.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/3734026/pexels-photo-3734026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'desserts',
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: 5,
    name: 'Spring Rolls',
    description: 'Crispy fried spring rolls filled with vegetables and served with sweet chili sauce.',
    price: 7.99,
    image: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'appetizers',
    isVegetarian: true
  },
  {
    id: 6,
    name: 'Thai Iced Tea',
    description: 'Traditional Thai tea with condensed milk and crushed ice.',
    price: 4.99,
    image: 'https://images.pexels.com/photos/5490816/pexels-photo-5490816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'drinks',
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: 7,
    name: 'Massaman Curry',
    description: 'Rich, relatively mild curry with potatoes, onions, peanuts and your choice of meat.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'curries',
    spicyLevel: 1
  },
  {
    id: 8,
    name: 'Papaya Salad',
    description: 'Spicy salad made from shredded unripe papaya, tomatoes, chili, lime and fish sauce.',
    price: 10.99,
    image: 'https://images.pexels.com/photos/16286391/pexels-photo-16286391/free-photo-of-a-bowl-of-papaya-salad.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'appetizers',
    spicyLevel: 3,
    isGlutenFree: true
  }
];

export const menuCategories = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'soups', name: 'Soups' },
  { id: 'main-dishes', name: 'Main Dishes' },
  { id: 'curries', name: 'Curries' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
];