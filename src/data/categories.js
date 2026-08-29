export const categories = [
  {
    id: "diyas",
    label: "DIYAS",
    name: "Sabrani Diyas",
    slug: "diyas",
    short: "Beautifully crafted diyas that carry the warmth of tradition into every home.",
    image: "/products/sabrani-diya.png",
  },
  {
    id: "dhoop",
    label: "DHOOP",
    name: "Sabrani Dhoop & Cups",
    slug: "dhoop",
    short: "Premium dhoop and cups crafted for calm, contemplative puja moments.",
    image: "/products/sabrani-dhoops.jpeg",
  }
];

// Filter chips shown on the products page
export const filters = [
  { id: "all", label: "All" },
  { id: "diyas", label: "Diyas" },
  { id: "dhoop", label: "Dhoop" }
];

export const categoryName = (id) => {
  const map = {
    diyas: "Sabrani Diyas",
    dhoop: "Sabrani Dhoop",
  };
  return map[id] || "Puja Product";
};
