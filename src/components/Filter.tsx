"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [categories, setCategories] = useState<{ slug: string; name: string }[]>([]);

  // ✅ Get existing values from search params
  const selectedCategory = searchParams.get("category") ?? "all";
  const selectedSort = searchParams.get("sort") ?? "price";

  // ✅ Fetch categories dynamically
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories([{ slug: "all", name: "All" }, ...data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const updateQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Category Filters */}
      <div>
        <span className="font-semibold">Category: </span>
        {categories.length === 0 ? (
          <p>Loading...</p>
        ) : (
          categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => updateQueryParams("category", category.slug)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category.slug ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))
        )}
      </div>

      {/* Sorting Options */}
      <div>
        <span className="font-semibold">Sort by: </span>
        {["price", "rating", "name"].map((sort) => (
          <button
            key={sort}
            onClick={() => updateQueryParams("sort", sort)}
            className={`px-4 py-2 rounded ${
              selectedSort === sort ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {sort.charAt(0).toUpperCase() + sort.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
