import { Apple, Carrot, Milk, Croissant, Candy, Layers } from 'lucide-react';

export const categories = [
  {
    name: 'All',
    icon: Layers,
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-600',
    emoji: '🌟',
  },
  {
    name: 'Fruits',
    icon: Apple,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
    emoji: '🍎',
  },
  {
    name: 'Vegetables',
    icon: Carrot,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-100',
    textColor: 'text-green-600',
    emoji: '🥬',
  },
  {
    name: 'Dairy',
    icon: Milk,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    emoji: '🥛',
  },
  {
    name: 'Bakery',
    icon: Croissant,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-600',
    emoji: '🍞',
  },
  {
    name: 'Snacks',
    icon: Candy,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
    emoji: '🍿',
  },
];
