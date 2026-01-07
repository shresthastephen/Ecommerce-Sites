export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  images: string[];
  category: Category;
  material: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  createdAt: string;
}

export type Category = 
  | "ganesha"
  | "krishna"
  | "shiva"
  | "buddha"
  | "lakshmi"
  | "hanuman"
  | "durga"
  | "saraswati";

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}
