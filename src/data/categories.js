export const categories = [
  {
    id: "diyas",
    label: "DIYAS",
    name: "Cow Dung Diyas",
    slug: "diyas",
    short: "Handcrafted diyas that carry the warmth of tradition into every home.",
    image:
      "https://images.pexels.com/photos/3160978/pexels-photo-3160978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "dhoop",
    label: "DHOOP",
    name: "Cow Dung Dhoop",
    slug: "dhoop",
    short: "Slow-burning dhoop crafted for calm, contemplative पूजा moments.",
    image:
      "https://images.pexels.com/photos/34700588/pexels-photo-34700588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "agarbatti",
    label: "AGARBATTI",
    name: "Cow Dung Agarbatti",
    slug: "agarbatti",
    short: "Naturally rolled agarbatti for a gentle, grounding fragrance.",
    image:
      "https://images.pexels.com/photos/11465621/pexels-photo-11465621.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "samidha",
    label: "SAMIDHA",
    name: "Cow Dung Logs & Samidha",
    slug: "samidha",
    short: "Purpose-made samidha and logs for havan and sacred fire rituals.",
    image:
      "https://images.pexels.com/photos/12430842/pexels-photo-12430842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
  {
    id: "other",
    label: "PUJA",
    name: "Other Puja Essentials",
    slug: "other",
    short: "Thoughtful essentials that complete your पूजा and daily rituals.",
    image:
      "https://images.pexels.com/photos/38920473/pexels-photo-38920473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
  },
];

// Filter chips shown on the products page
export const filters = [
  { id: "all", label: "All" },
  { id: "diyas", label: "Diyas" },
  { id: "dhoop", label: "Dhoop" },
  { id: "agarbatti", label: "Agarbatti" },
  { id: "logs", label: "Logs" },
  { id: "samidha", label: "Samidha" },
  { id: "other", label: "Other" },
];

export const categoryName = (id) => {
  const map = {
    diyas: "Cow Dung Diyas",
    dhoop: "Cow Dung Dhoop",
    agarbatti: "Cow Dung Agarbatti",
    logs: "Cow Dung Logs",
    samidha: "Cow Dung Samidha",
    other: "Puja Essentials",
  };
  return map[id] || "Puja Product";
};
