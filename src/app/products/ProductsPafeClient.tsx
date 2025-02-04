"use client";

import { useSearchParams } from "next/navigation";
import Filters from "@/components/Filter";
import ProductList from "@/components/ProductList";

export default function ProductsPageClient() {
  const searchParams = useSearchParams();

  // ✅ Ensure parameters are correctly fetched with `.get()`
  const page = searchParams.get("page") ?? "1"; // Default to "1"
  const category = searchParams.get("category") ?? "all"; // Default to "all"
  const sort = searchParams.get("sort") ?? "price"; // Default to "price"

  return (
    <main className="container mx-auto p-4">
      <Filters selectedCategory={category} selectedSort={sort} />
      <ProductList category={category} sort={sort} page={Number(page)} />
    </main>
  );
}

