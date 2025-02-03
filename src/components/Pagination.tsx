import Link from "next/link";

export default function Pagination({ page, category, sort }: { page: number; category: string; sort: string }) {
  return (
    <div className="flex justify-center mt-6 gap-4">
      {page > 1 && (
        <Link href={`/products?page=${page - 1}&category=${category}&sort=${sort}`} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </Link>
      )}
      <Link href={`/products?page=${page + 1}&category=${category}&sort=${sort}`} className="px-4 py-2 bg-gray-300 rounded">
        Next
      </Link>
    </div>
  );
}
