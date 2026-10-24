import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Radha Dhoops products, rituals and the world that inspires them.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
