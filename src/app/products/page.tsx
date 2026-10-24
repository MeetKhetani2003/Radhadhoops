import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Cow Dung Puja Products",
  description:
    "Explore naturally crafted cow-dung products created for पूजा, rituals and sacred spaces — diyas, dhoop, agarbatti, samidha and more.",
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
