export const products = [
  {
    id: "sabrani-dhoops",
    slug: "sabrani-dhoops",
    name: "Sabrani Dhoops",
    category: "dhoop",
    categoryLabel: "Dhoop",
    featured: true,
    shortDescription:
      "Premium quality Sabrani Dhoops for a calming and spiritual atmosphere in your daily puja.",
    description:
      "Our Sabrani Dhoops are carefully crafted to provide a deep, grounding fragrance. Ideal for daily prayers, meditation, and creating a peaceful ambiance in your home. Made from high-quality natural ingredients.",
    images: ["/products/sabrani-dhoops.jpeg"],
    highlights: [
      "Rich, calming fragrance",
      "Perfect for daily puja and meditation",
      "Made from natural ingredients",
      "Long-lasting burn time"
    ],
    material: "Natural aromatic ingredients",
    dimensions: "Standard",
    weight: "Standard",
    packSize: "1 Box",
    quantity: "Standard Pack",
    usage: ["Daily Puja", "Meditation", "Home Fragrance"],
    howToUse: [
      "Light the tip of the dhoop.",
      "Gently blow out the flame to let it smoulder.",
      "Place on a heat-safe stand or holder."
    ],
    suitableFor: "Homes, temples, and meditation spaces.",
    storage: "Store in a cool, dry place away from direct sunlight.",
    safety: "Keep away from flammable materials and children. Never leave unattended.",
    benefits: [
      "Purifies the air",
      "Creates a calming environment",
      "Enhances spiritual focus"
    ],
    faqs: [
      { q: "Is the fragrance too strong?", a: "It has a balanced, soothing fragrance suitable for indoor spaces." },
      { q: "Do I need a special holder?", a: "Any standard heat-safe dhoop holder will work perfectly." }
    ]
  },
  {
    id: "sabrani-diya",
    slug: "sabrani-diya",
    name: "Sabrani Diya",
    category: "diyas",
    categoryLabel: "Diyas",
    featured: true,
    shortDescription:
      "Beautifully crafted Sabrani Diya, bringing warmth and tradition to your sacred spaces.",
    description:
      "The Sabrani Diya is designed for elegance and functionality. Perfect for your daily rituals, festivals, and special occasions. Its sturdy build ensures a steady flame, adding a divine glow to your surroundings.",
    images: ["/products/sabrani-diya.png"],
    highlights: [
      "Elegant traditional design",
      "Holds a steady flame",
      "Ideal for festivals and daily worship",
      "Premium finish"
    ],
    material: "Natural materials",
    dimensions: "Standard",
    weight: "Standard",
    packSize: "1 Box",
    quantity: "Standard Pack",
    usage: ["Daily Worship", "Festivals like Diwali", "Temple Altars"],
    howToUse: [
      "Place the diya on a stable, heat-resistant surface.",
      "Add oil or ghee and a cotton wick.",
      "Light carefully."
    ],
    suitableFor: "Home temples, festive decorations, and daily rituals.",
    storage: "Wipe clean and store in a dry place.",
    safety: "Keep on a heat-resistant surface. Do not leave a lit diya unattended.",
    benefits: [
      "Enhances the beauty of your puja room",
      "Safe and easy to use",
      "Durable and long-lasting"
    ],
    faqs: [
      { q: "Can I use ghee or oil?", a: "Yes, both ghee and oil work perfectly." },
      { q: "Is it easy to clean?", a: "Yes, it can be easily wiped clean with a dry or slightly damp cloth." }
    ]
  },
  {
    id: "sabrani-cups",
    slug: "sabrani-cups",
    name: "Sabrani Sambrani Cups",
    category: "dhoop",
    categoryLabel: "Dhoop",
    featured: true,
    shortDescription:
      "Convenient Sabrani cups (Big and Small) for a traditional sambrani experience without the hassle.",
    description:
      "Experience the timeless fragrance of traditional sambrani with our easy-to-use Sabrani Cups. Available in big and small sizes, these cups are pre-filled and ready to light, offering a rich, purifying smoke ideal for cleansing your home environment.",
    images: ["/products/sabrani-cups.png"],
    highlights: [
      "Ready to use, no hassle",
      "Authentic sambrani fragrance",
      "Purifies and cleanses the air",
      "Includes both big and small cups"
    ],
    material: "Natural sambrani and cow dung base",
    dimensions: "Assorted (Big and Small)",
    weight: "Standard",
    packSize: "1 Box (Mixed sizes)",
    quantity: "Standard Pack",
    usage: ["Air Purification", "Special Puja", "Festivals"],
    howToUse: [
      "Hold the cup from the base and light the top rim.",
      "Wait for the rim to glow evenly, then gently blow out the flame.",
      "Place it on the provided heat-safe plate."
    ],
    suitableFor: "Cleansing home energy, festive occasions, and special pujas.",
    storage: "Keep in an airtight container away from moisture.",
    safety: "Place only on a heat-resistant surface. Keep away from flammable materials and children.",
    benefits: [
      "Quick and convenient sambrani experience",
      "Deeply purifying aroma",
      "Helps in meditation and relaxation"
    ],
    faqs: [
      { q: "Are they easy to light?", a: "Yes, they are designed to light easily and burn evenly." },
      { q: "Can they be used indoors?", a: "Yes, but ensure the room is well-ventilated as they produce thick, fragrant smoke." }
    ]
  }
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export const relatedProducts = (product, count = 3) => {
  const order = ["diyas", "dhoop", "agarbatti", "samidha", "logs", "other"];
  const idx = order.indexOf(product.category);
  const preferred = order[(idx + 1) % order.length];
  const others = products.filter((p) => p.slug !== product.slug);
  const primary = others.filter((p) => p.category === preferred);
  const rest = others.filter((p) => p.category !== preferred);
  return [...primary, ...rest].slice(0, count);
};

export const filterProducts = (list, filterId) => {
  if (filterId === "all") return list;
  return list.filter((p) => p.category === filterId);
};
