import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Buy Desi Cow Dung Puja Products Online | Radha Dhoops",
  description:
    "Shop 100% pure organic cow dung powder (Gomay Churna), Sambrani dhoop cups, herbal diyas & sacred puja essentials. Charcoal-free, natural, and directly sourced from indigenous Gaushalas.",
  keywords: [
    "Organic cow dung powder",
    "Gomay churna for havan",
    "Sambrani dhoop cups online",
    "Desi cow dung diya",
    "Charcoal free dhoop",
    "Puja essentials India",
    "Radha Dhoops"
  ],
};


export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-cream">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-violet-brand border-t-transparent" />
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
