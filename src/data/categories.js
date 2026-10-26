export const categories = [
  {
    id: "gau-may",
    label: "GAU MAY",
    name: "Pure Cow Dung Powder",
    slug: "gau-may",
    short: "100% pure sun-dried Desi cow dung powder for sacred havan and organic plant care.",
    image: "/products/cow-dung-powder.jpg",
  },
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
  },
  {
    id: "machines",
    label: "MACHINES",
    name: "Dairy & Farming Machines",
    slug: "machines",
    short: "High-quality machines and tools for modern dairy and farming needs.",
    image: "/products/cow-weight-tape.jpeg",
  }
];

// Filter chips shown on the products page
export const filters = [
  { id: "all", label: "All Products" },
  { id: "gau-may", label: "Cow Dung Powder" },
  { id: "diyas", label: "Diyas" },
  { id: "dhoop", label: "Dhoop" },
  { id: "machines", label: "Machines" }
];

export const categoryName = (id) => {
  const map = {
    "gau-may": "Pure Cow Dung Essentials",
    diyas: "Sabrani Diyas",
    dhoop: "Sabrani Dhoop",
    machines: "Dairy & Farming Machines",
  };
  return map[id] || "Puja Product";
};

