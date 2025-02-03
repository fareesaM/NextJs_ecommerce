import { fetchProductById } from "@/lib/features/productApi";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import RelatedProducts from "@/components/RelatedProducts";

interface PageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const product = await fetchProductById(params.id);

  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <Image src={product.thumbnail} alt={product.title} width={500} height={500} className="rounded-md" />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold text-green-600">${product.price}</p>
          <p className="text-yellow-500">⭐ {product.rating}</p>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-2xl font-semibold mt-8">Related Products</h2>
      <RelatedProducts category={product.category} excludeId={product.id} />
    </main>
  );
};

export default ProductDetailPage;


// import { fetchProductById } from "@/lib/features/productApi";
// import Image from "next/image";
// import AddToCartButton from "@/components/AddToCartButton";
// import RelatedProducts from "@/components/RelatedProducts";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// const ProductDetailPage = async ({ params }: PageProps) => {
//   const product = await fetchProductById(params.id);

//   if (!product) return <p className="text-center text-red-500">Product not found</p>;

//   return (
//     <main className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div>
//           <Image src={product.thumbnail} alt={product.title} width={500} height={500} className="rounded-md" />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-gray-700">{product.description}</p>
//           <p className="text-xl font-semibold text-green-600">${product.price}</p>
//           <p className="text-yellow-500">⭐ {product.rating}</p>

//           {/* Add to Cart Button */}
//           <AddToCartButton product={product} />
//         </div>
//       </div>

//       {/* Related Products */}
//       <h2 className="text-2xl font-semibold mt-8">Related Products</h2>
//       <RelatedProducts category={product.category} excludeId={product.id} />
//     </main>
//   );
// };

// export default ProductDetailPage;


// import { fetchProductById } from "@/lib/features/productApi";
// import Image from "next/image";
// import AddToCartButton from "@/components/AddToCartButton";
// import RelatedProducts from "@/components/RelatedProducts";

// export default async function ProductDetailPage({ params }: { params: { id: string } }) {
//   const product = await fetchProductById(params.id);

//   if (!product) return <p className="text-center text-red-500">Product not found</p>;

//   return (
//     <main className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div>
//           <Image src={product.thumbnail} alt={product.title} width={500} height={500} className="rounded-md" />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-gray-700">{product.description}</p>
//           <p className="text-xl font-semibold text-green-600">${product.price}</p>
//           <p className="text-yellow-500">⭐ {product.rating}</p>

//           {/* Add to Cart Button */}
//           <AddToCartButton product={product} />
//         </div>
//       </div>

//       {/* Related Products */}
//       <h2 className="text-2xl font-semibold mt-8">Related Products</h2>
//       <RelatedProducts category={product.category} excludeId={product.id} />
//     </main>
//   );
// }
