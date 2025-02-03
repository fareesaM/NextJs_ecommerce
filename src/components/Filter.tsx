"use client"; // ✅ Ensure this is a Client Component

import { useRouter } from "next/navigation";

export default function Filters({ category, sort }: { category: string; sort: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Category Filter */}
      <div>
        <span className="font-semibold">Category: </span>
        {["all", "smartphones", "laptops", "fragrances"].map((cat) => (
          <button
            key={cat}
            onClick={() => router.push(`/products?category=${cat}&sort=${sort}`)}
            className={`px-4 py-2 rounded ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Sorting Filter */}
      <div>
        <span className="font-semibold">Sort by: </span>
        {["price", "rating"].map((s) => (
          <button
            key={s}
            onClick={() => router.push(`/products?category=${category}&sort=${s}`)}
            className={`px-4 py-2 rounded ${
              sort === s ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
