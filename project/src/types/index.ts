export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'men' | 'women' | 'unisex' | 'accessories';
  sizes: string[];
  colors: string[];
  description: string;
  fabric: string;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[];
  loyaltyPoints: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}