import { Product, BlogPost } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton Oversized Tee',
    price: 89,
    originalPrice: 120,
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'
    ],
    category: 'unisex',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Beige', 'Navy'],
    description: 'Crafted from 100% organic cotton, this oversized tee offers ultimate comfort with a contemporary silhouette.',
    fabric: '100% Organic Cotton',
    isNew: true,
    isBestseller: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Tailored Blazer Jacket',
    price: 299,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg'
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Charcoal', 'Camel'],
    description: 'A perfectly tailored blazer that transitions seamlessly from day to night.',
    fabric: 'Wool Blend',
    isBestseller: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Minimalist Crew Neck Sweater',
    price: 159,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Navy'],
    description: 'Essential crew neck sweater with a clean, minimalist design.',
    fabric: 'Merino Wool',
    inStock: true
  },
  {
    id: '4',
    name: 'High-Rise Wide Leg Trousers',
    price: 189,
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    ],
    category: 'women',
    sizes: ['24', '25', '26', '27', '28', '30'],
    colors: ['Black', 'Olive', 'Cream'],
    description: 'High-waisted wide leg trousers with a flattering silhouette.',
    fabric: 'Sustainable Viscose Blend',
    isNew: true,
    inStock: true
  },
  {
    id: '5',
    name: 'Classic Denim Jacket',
    price: 219,
    images: [
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'unisex',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    description: 'Timeless denim jacket with a modern fit and premium construction.',
    fabric: '100% Cotton Denim',
    inStock: true
  },
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    price: 179,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Tan', 'Burgundy'],
    description: 'Handcrafted leather crossbody bag with adjustable strap.',
    fabric: 'Genuine Leather',
    isNew: true,
    inStock: true
  },
  {
    id: '7',
    name: 'Relaxed Fit Chinos',
    price: 149,
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
      'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg'
    ],
    category: 'men',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Navy', 'Olive'],
    description: 'Comfortable chinos with a relaxed fit perfect for everyday wear.',
    fabric: 'Organic Cotton Twill',
    inStock: true
  },
  {
    id: '8',
    name: 'Silk Button-Down Shirt',
    price: 229,
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Ivory', 'Blush'],
    description: 'Luxurious silk button-down shirt with a refined drape.',
    fabric: '100% Mulberry Silk',
    isBestseller: true,
    inStock: true
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Dressing',
    excerpt: 'Discover how to build a timeless wardrobe with fewer, better pieces.',
    content: 'Minimalist fashion is about more than just wearing neutral colors...',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'Style Guide',
    date: '2024-01-15',
    author: 'Sarah Johnson'
  },
  {
    id: '2',
    title: 'Sustainable Fashion: Making Better Choices',
    excerpt: 'Learn about sustainable fashion practices and how to shop responsibly.',
    content: 'The fashion industry is evolving towards more sustainable practices...',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    category: 'Sustainability',
    date: '2024-01-10',
    author: 'Emma Davis'
  },
  {
    id: '3',
    title: 'Spring 2024 Collection Launch',
    excerpt: 'Introducing our latest collection inspired by modern minimalism.',
    content: 'Our Spring 2024 collection celebrates clean lines and premium fabrics...',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
    category: 'Collection',
    date: '2024-01-05',
    author: 'Brand Team'
  }
];