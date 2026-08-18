export const site = {
  name: "Radha Dhoops",
  brandFirst: "Radha",
  brandSecond: "Dhoops",
  tagline: "Rooted in Tradition. Inspired by Nature.",
  description:
    "Thoughtfully crafted cow-dung products inspired by India's timeless पूजा traditions.",
  // Placeholders — replace with real business details
  whatsappNumber: "919999999999", // digits only, country code first
  phone: "[Phone Number]",
  email: "[Email Address]",
  address: "[Business Address]",
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
