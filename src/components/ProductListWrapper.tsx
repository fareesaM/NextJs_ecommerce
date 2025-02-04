"use client"; // ✅ Ensures this is a Client Component

import { useSearchParams } from "next/navigation";
import ProductList from "./ProductList";
import Filters from "./Filter";
import Pagination from "./Pagination";

export default function ProductListWrapper() {
  const searchParams = useSearchParams(); // ✅ Fetch search params dynamically
  const page = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "price";

  return (
    <div>
      <Filters  />
      <ProductList page={page} category={category} sort={sort} />
      <Pagination page={page} category={category} sort={sort} />
    </div>
  );
}
