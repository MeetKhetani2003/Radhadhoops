import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct, relatedProducts } from "../../../data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Pure Desi Gau May Puja Essentials`,
    description: product.shortDescription,
    keywords: [
      product.name,
      "Radha Dhoops",
      "Cow dung puja products",
      "Organic cow dung powder",
      "Sambrani dhoop cups",
      "Desi cow diya",
      "Havan samagri",
      "Vedic puja essentials"
    ],
    openGraph: {
      title: `${product.name} | Radha Dhoops`,
      description: product.shortDescription,
      images: product.images?.[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = relatedProducts(product, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images?.[0] ? `https://radhadhoop.com${product.images[0]}` : undefined,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: "Radha Dhoops",
    },
    offers: {
      "@type": "Offer",
      url: `https://radhadhoop.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price || 199,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Radha Dhoops",
      },
    },
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount || 100,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://radhadhoop.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://radhadhoop.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://radhadhoop.com/products/${product.slug}`,
      },
    ],
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailClient product={product} related={related} />
    </>
  );
}

