import { fetchProductById } from "@/lib/features/productApi";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import RelatedProducts from "@/components/RelatedProducts";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
}

// Update the PageProps to allow the params to be a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  // Await params here to ensure it resolves to the actual value
  const { id } = await params;

  const product = await fetchProductById(id);

  if (!product || Object.keys(product).length === 0) {
    return <p className="text-center text-red-500">Product not found</p>;
  }
  

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
          <AddToCartButton />
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-2xl font-semibold mt-8">Related Products</h2>
      <RelatedProducts category={product.category} excludeId={product.id} />
    </main>
  );
};

// Generate static params for product pages
export async function generateStaticParams() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    const allProducts = data.products;

    if (!Array.isArray(allProducts)) {
      console.error("Expected 'products' to be an array");
      return [];
    }

    return allProducts.map((product: Product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default ProductDetailPage;


// import { fetchProductById } from "@/lib/features/productApi";
// import Image from "next/image";
// import AddToCartButton from "@/components/AddToCartButton";
// import RelatedProducts from "@/components/RelatedProducts";

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   rating: number;
//   thumbnail: string;
//   category: string;
// }

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// // Refactor to handle asynchronous behavior
// const ProductDetailPage = async ({ params }: PageProps) => {
//   const { id } = await params;

//   const product = await fetchProductById(id);

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

// export async function generateStaticParams() {
//   try {
//     const response = await fetch('https://dummyjson.com/products');
//     const data = await response.json();
//     const allProducts = data.products; // Ensure we access the correct array

//     if (!Array.isArray(allProducts)) {
//       console.error("Expected 'products' to be an array");
//       return [];
//     }

//     return allProducts.map((product: Product) => ({
//       id: product.id.toString(),
//     }));
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     return [];
//   }
// }

// export default ProductDetailPage;


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
