
"use client"; // ✅ Client Component

import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";

import { Product } from "./types";



export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <button
      
      className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-2"
    >
      Add to Cart
    </button>
  );
}
