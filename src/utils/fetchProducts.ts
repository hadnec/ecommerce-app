// src/utils/fetchProducts.ts
import { Product } from '../types/product';

interface FetchProductsParams {
  category?: string;
  limit?: number;
  page?: number;
}

export async function fetchProducts({ category, limit = 10, page = 1 }: FetchProductsParams): Promise<{ products: Product[], total: number }> {
  const categoryQuery = category ? `&category=${category}` : '';
  const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}&page=${page}${categoryQuery}`);
  const products = await response.json();
  return { products, total: 100 }; 
}

export async function fetchCategories(): Promise<string[]> {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await response.json();
  return categories;
}
