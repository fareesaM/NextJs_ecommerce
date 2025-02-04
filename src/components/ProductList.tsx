"use client"; // ✅ Must be a Client Component

import { useGetProductsQuery } from "@/lib/features/productApi";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
  }

export default function ProductList({ page, category, sort }: { page: number; category: string; sort: string }) {
  const { data, error, isLoading } = useGetProductsQuery({ page, category, sort });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.products.map((product: Product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow">
          {/* ✅ Ensure Link uses correct Next.js syntax */}
          <Link href={`/products/${product.id}`} className="block">
            <Image src={product.thumbnail} alt={product.title} width={200} height={200} className="rounded-md" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-yellow-500">⭐ {product.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
