// src/app/products/[id]/fetchProduct.ts
import { Product } from "@/lib/features/productApi";

export const fetchProductById = async (id: string): Promise<Product> => {
  const baseUrl = "https://dummyjson.com";
  const response = await fetch(`${baseUrl}/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  const data = await response.json();
  return data;
};
