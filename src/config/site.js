export const site = {
  name: "Radha Dhoops",
  url: "https://radhadhoop.com",
  brandFirst: "Radha",

  brandSecond: "Dhoops",
  tagline: "Rooted in Tradition. Inspired by Nature.",
  description:
    "Thoughtfully crafted cow-dung products inspired by India's timeless पूजा traditions.",
  // Official business details
  whatsappNumber: "919815097248", // +91 98150 97248
  phone: "+91 98150 97248",
  email: "radhasolar@gmail.com",
  address: "India",
  whatsappMessage: "Namaste! I would like to know more about Radha Dhoops products.",

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Products", to: "/products" },
    { label: "Machines", to: "/machines" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
  ],
};

export const whatsappHref = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;
