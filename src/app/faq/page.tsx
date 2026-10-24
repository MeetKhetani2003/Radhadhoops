import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Radha Dhoops cow-dung पूजा products, sourcing, usage and orders.",
};

export default function FaqPage() {
  return <FaqClient />;
}
