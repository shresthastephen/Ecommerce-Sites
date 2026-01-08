
import type { Product, CategoryInfo } from "../types/product";


export const categoryImages = {
  ganesha: {
    hero: "https://buddhacraftnepal.com/cdn/shop/files/buddha-craft.jpg?v=1716383157&width=3840",
    square: "https://images.unsplash.com/photo-1567591370504-80c7e429e926?w=400&h=400&fit=crop",
  },
  buddha: {
    hero: "https://newbusinessage.prixacdn.net/img/news/20211215112441_20170913113102_sect.jpg",
    square: "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=400&h=400&fit=crop",
  },
  shiva: {
    hero: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=800&fit=crop",
    square: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=400&fit=crop",
  },
  krishna: {
    hero: "https://images.unsplash.com/photo-1604608672516-f1b9b1b37a04?w=1200&h=800&fit=crop",
    square: "https://images.unsplash.com/photo-1604608672516-f1b9b1b37a04?w=400&h=400&fit=crop",
  },
  lakshmi: {
    hero: "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=1200&h=800&fit=crop",
    square: "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=400&h=400&fit=crop",
  },
  hanuman: {
    hero: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200&h=800&fit=crop",
    square: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&h=400&fit=crop",
  },
  durga: {
    hero: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=1200&h=800&fit=crop",
    square: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=400&h=400&fit=crop",
  },
  saraswati: {
    hero: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?w=1200&h=800&fit=crop",
    square: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?w=400&h=400&fit=crop",
  },
} as const;

// Product-level galleries (kept minimal & consistent)
export const productImages = {
  ganesha: [
    "https://images.unsplash.com/photo-1567591370504-80c7e429e926?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1599030715577-4a4e7d0e0e3e?w=800&h=800&fit=crop",
  ],
  buddha: [
    "https://images.unsplash.com/photo-1609619385002-f40f1df827b8?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
  ],
  shiva: [
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=800&fit=crop",
  ],
  krishna: [
    "https://images.unsplash.com/photo-1604608672516-f1b9b1b37a04?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=800&h=800&fit=crop",
  ],
  lakshmi: [
    "https://images.unsplash.com/photo-1606293926249-ed22e446d476?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=800&h=800&fit=crop",
  ],
  hanuman: [
    "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1567591370504-80c7e429e926?w=800&h=800&fit=crop",
  ],
  durga: [
    "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?w=800&h=800&fit=crop",
  ],
  saraswati: [
    "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
  ],
} as const;



export const categories: CategoryInfo[] = [
  {
    id: "ganesha",
    name: "Ganesha",
    description: "Lord of Beginnings and Remover of Obstacles",
    image: categoryImages.ganesha.square,
  },
  {
    id: "buddha",
    name: "Buddha",
    description: "The Enlightened One",
    image: categoryImages.buddha.square,
  },
  {
    id: "shiva",
    name: "Shiva",
    description: "The Destroyer and Transformer",
    image: categoryImages.shiva.square,
  },
  {
    id: "krishna",
    name: "Krishna",
    description: "The Divine Protector",
    image: categoryImages.krishna.square,
  },
  {
    id: "lakshmi",
    name: "Lakshmi",
    description: "Goddess of Wealth and Prosperity",
    image: categoryImages.lakshmi.square,
  },
  {
    id: "hanuman",
    name: "Hanuman",
    description: "The Monkey God of Devotion",
    image: categoryImages.hanuman.square,
  },
  {
    id: "durga",
    name: "Durga",
    description: "The Warrior Goddess",
    image: categoryImages.durga.square,
  },
  {
    id: "saraswati",
    name: "Saraswati",
    description: "Goddess of Knowledge and Arts",
    image: categoryImages.saraswati.square,
  },
];


export const products: Product[] = [
  {
    id: "gan-001",
    name: "Brass Ganesha with Ornate Base",
    description: "Exquisitely crafted brass Ganesha statue with antique finish.",
    price: 2499,
    originalPrice: 3299,
    images: [...productImages.ganesha],
    category: "ganesha",
    material: "Brass",
    dimensions: "8 x 5 x 4 inches",
    weight: "1.2 kg",
    inStock: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-01-15",
  },
  {
    id: "bud-001",
    name: "Meditating Buddha Bronze",
    description: "Serene bronze Buddha in Dhyana Mudra.",
    price: 3299,
    originalPrice: 4199,
    images: [...productImages.buddha],
    category: "buddha",
    material: "Bronze",
    dimensions: "10 x 6 x 5 inches",
    weight: "2.1 kg",
    inStock: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-02-10",
  },
  {
    id: "shi-001",
    name: "Nataraja Dancing Shiva",
    description: "Cosmic dance of Lord Shiva in bronze.",
    price: 6999,
    originalPrice: 8499,
    images: [...productImages.shiva],
    category: "shiva",
    material: "Bronze",
    dimensions: "14 x 12 x 6 inches",
    weight: "3.8 kg",
    inStock: true,
    isBestSeller: true,
    isNewArrival: false,
    createdAt: "2024-03-01",
  },
];


export const bannerSlides = [
  {
    id: 1,
    title: "Divine Artistry",
    subtitle: "Handcrafted God Statues for Your Sacred Space",
    image: categoryImages.ganesha.hero,
    cta: "Explore Collection",
    link: "/shops",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Discover Our Latest Sacred Sculptures",
    image: categoryImages.buddha.hero,
    cta: "Shop New",
    link: "/shops?filter=new",
  },
  {
    id: 3,
    title: "Bronze Masterpieces",
    subtitle: "Timeless Beauty in Every Detail",
    image: categoryImages.shiva.hero,
    cta: "View Collection",
    link: "/shops",
  },
];
