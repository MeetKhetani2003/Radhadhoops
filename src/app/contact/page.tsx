import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Radha Dhoops. Questions, collaborations or bulk enquiries — let's create something meaningful together.",
};

export default function ContactPage() {
  return <ContactClient />;
}
