import { create } from "zustand";

// Define the Product interface
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Define the store state interface
interface ProductState {
  product: Product[];
  fetchProduct: (products: Product[]) => void;
}

// Create the store with proper types
export const useProductStore = create<ProductState>((set) => ({
  product: [],
  fetchProduct: (products: Product[]) => {
    set(() => ({
      product: [...products],
    }));
  },
}));