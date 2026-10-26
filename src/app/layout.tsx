import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { site } from "../config/site";

export const viewport: Viewport = {
  themeColor: "#542866",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://radhadhoop.com"),
  title: {
    default: "Radha Dhoops | Natural Cow Dung Puja Products",
    template: "%s | Radha Dhoops",
  },
  description: site.description,
  openGraph: {
    title: "Radha Dhoops | Natural Cow Dung Puja Products",
    description: "Rooted in Tradition. Inspired by Nature. Premium cow-dung पूजा products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
