// import { Suspense } from "react";
// import ProductList from "@/components/ProductList";
// import Filters from "@/components/Filter";
// import Pagination from "@/components/Pagination";

// export default function ProductsPage({
//   searchParams,
// }: {
//   searchParams?: Record<string, string | undefined>;
// }) {
//   // ✅ Properly handle searchParams in a Server Component
//   const page = Number(searchParams?.page || "1");
//   const category = searchParams?.category || "all";
//   const sort = searchParams?.sort || "price";

//   return (
//     <main className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <Filters category={category} sort={sort} />
//       <Suspense fallback={<p>Loading products...</p>}>
//         <ProductList page={page} category={category} sort={sort} />
//       </Suspense>
//       <Pagination page={page} category={category} sort={sort} />
//     </main>
//   );
// }



// src/app/products/page.tsx
import ProductsPageClient from "./ProductsPafeClient"; // ✅ Direct import without `dynamic()`

export default function ProductsPage() {
  return <ProductsPageClient />;
}
