const PX = (id, w = 1200, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const products = [
  {
    id: "diyas-001",
    slug: "cow-dung-diyas",
    name: "Cow Dung Diyas",
    category: "diyas",
    categoryLabel: "Diyas",
    featured: true,
    shortDescription:
      "Handcrafted diyas that bring the quiet warmth of tradition to every sacred corner of your home.",
    description:
      "Our Cow Dung Diyas are shaped with care and rooted in a practice as old as Indian पूजा itself. Each diya is crafted from naturally available cow dung, giving a familiar ritual a thoughtful, natural identity. Made to hold a steady flame, they are designed for festivals, daily worship and moments of stillness.",
    images: [PX(3160978), PX(34644588), PX(34644593), PX(5614005)],
    highlights: [
      "Made from naturally sourced cow dung",
      "Hand-shaped for a warm, earthy character",
      "Steady, calm flame for पूजा and festivals",
      "Thoughtfully finished, premium presentation",
    ],
    material: "Naturally sourced cow dung",
    dimensions: "[Product Dimensions]",
    weight: "[Product Weight]",
    packSize: "[Pack Size]",
    quantity: "[Quantity]",
    usage: ["Daily पूजा", "Festivals & Diwali", "Temple & home altars"],
    howToUse: [
      "Place the diya on a clean, heat-safe surface.",
      "Add a cotton wick and a small amount of ghee or oil.",
      "Light the wick and let it settle into a steady flame.",
    ],
    suitableFor: "Homes, temples, festive occasions and daily worship.",
    storage: "Store in a cool, dry place away from moisture.",
    safety:
      "Keep lit diyas on a stable, heat-resistant surface and away from flammable materials. Never leave an open flame unattended.",
    benefits: [
      "A natural alternative for a timeless ritual",
      "Warm, earthy aesthetic for your पूजा space",
      "Made with a purposeful, sustainable material",
    ],
    faqs: [
      { q: "What are these diyas made of?", a: "They are crafted from naturally sourced cow dung, shaped and finished by hand." },
      { q: "Can I use ghee or oil?", a: "Yes. Both ghee and oil work well with a standard cotton wick." },
      { q: "Are they reusable?", a: "Diyas can typically be reused a few times when handled and stored with care. [Confirm as per product batch]" },
    ],
  },
  {
    id: "dhoop-001",
    slug: "cow-dung-dhoop",
    name: "Cow Dung Dhoop",
    category: "dhoop",
    categoryLabel: "Dhoop",
    featured: true,
    shortDescription:
      "Slow-burning dhoop crafted for calm, contemplative पूजा and everyday moments of stillness.",
    description:
      "Radha Dhoops Cow Dung Dhoop is made to bring a gentle, grounding presence to your rituals. Crafted from naturally available cow dung, it burns slowly and evenly — ideal for morning prayers, aarti and quiet reflection.",
    images: [PX(34700588, 1200, 1500), PX(14871685), PX(6719774), PX(11465621)],
    highlights: [
      "Slow, even burn for extended use",
      "Made from naturally sourced cow dung",
      "Grounding presence for पूजा and meditation",
      "Minimal, natural composition",
    ],
    material: "Naturally sourced cow dung",
    dimensions: "[Product Dimensions]",
    weight: "[Product Weight]",
    packSize: "[Pack Size]",
    quantity: "[Quantity]",
    usage: ["Morning & evening पूजा", "Aarti", "Meditation & reflection"],
    howToUse: [
      "Light the tip of the dhoop until it glows.",
      "Gently blow out the flame so it smoulders.",
      "Place on a suitable dhoop holder or heat-safe plate.",
    ],
    suitableFor: "Daily worship, meditation and creating a calm environment.",
    storage: "Keep in a dry place, sealed away from moisture.",
    safety:
      "Use on a heat-resistant holder. Keep away from children and flammable materials. Do not leave unattended.",
    benefits: [
      "A natural, purposeful dhoop for daily ritual",
      "Long, steady burn",
      "Rooted in traditional पूजा practice",
    ],
    faqs: [
      { q: "How long does it burn?", a: "Burn time varies by size. [Add exact burn time per product batch]" },
      { q: "Do I need a special holder?", a: "Any heat-safe dhoop holder or plate works well." },
    ],
  },
  {
    id: "agarbatti-001",
    slug: "cow-dung-agarbatti",
    name: "Cow Dung Agarbatti",
    category: "agarbatti",
    categoryLabel: "Agarbatti",
    featured: true,
    shortDescription:
      "Naturally rolled agarbatti for a gentle, grounding fragrance during पूजा and daily rituals.",
    description:
      "Our Cow Dung Agarbatti is thoughtfully rolled to offer a soft, natural fragrance experience. Made around a base of naturally available cow dung, it is designed for those who prefer a simple, grounded ritual.",
    images: [PX(11465621, 1200, 1500), PX(6634433, 1200, 1500), PX(19848825, 1200, 1500), PX(6719771)],
    highlights: [
      "Rolled around a natural cow dung base",
      "Gentle, grounding fragrance",
      "Ideal for daily पूजा and prayer",
      "Clean, minimal composition",
    ],
    material: "Naturally sourced cow dung with natural fragrance",
    dimensions: "[Product Dimensions]",
    weight: "[Product Weight]",
    packSize: "[Pack Size]",
    quantity: "[Quantity]",
    usage: ["Daily प्रार्थना", "पूजा & aarti", "Everyday fragrance"],
    howToUse: [
      "Light the coated tip until it catches.",
      "Blow out the flame so the stick smoulders.",
      "Place in an agarbatti stand to collect the ash.",
    ],
    suitableFor: "Daily worship and creating a calm, fragrant space.",
    storage: "Store in a cool, dry place in a sealed pack.",
    safety:
      "Always use an agarbatti stand. Keep away from flammable materials and never leave unattended.",
    benefits: [
      "A natural, grounded fragrance",
      "Made with a purposeful base material",
      "Perfect for everyday ritual",
    ],
    faqs: [
      { q: "Is the fragrance strong?", a: "The fragrance is intentionally gentle and grounding. [Specify fragrance variant per batch]" },
      { q: "How many sticks per pack?", a: "[Add pack size per product batch]" },
    ],
  },
  {
    id: "logs-001",
    slug: "cow-dung-logs",
    name: "Cow Dung Logs",
    category: "logs",
    categoryLabel: "Logs",
    featured: true,
    shortDescription:
      "Purpose-made logs crafted for havan, sacred fire rituals and traditional ceremonies.",
    description:
      "Radha Dhoops Cow Dung Logs are shaped for use in havan and traditional fire rituals. Made from naturally available cow dung, they are designed to be a convenient, purposeful part of ceremonial practice.",
    images: [PX(12430842), PX(8021229), PX(5253723), PX(35171273)],
    highlights: [
      "Shaped for havan & fire rituals",
      "Made from naturally sourced cow dung",
      "Convenient, consistent form",
      "Rooted in traditional ceremony",
    ],
    material: "Naturally sourced cow dung",
    dimensions: "[Product Dimensions]",
    weight: "[Product Weight]",
    packSize: "[Pack Size]",
    quantity: "[Quantity]",
    usage: ["Havan & yagna", "Fire ceremonies", "Traditional rituals"],
    howToUse: [
      "Arrange the logs in your havan kund.",
      "Light following your traditional ritual process.",
      "Add samidha and offerings as per practice.",
    ],
    suitableFor: "Havan, yagna and ceremonial fire rituals.",
    storage: "Keep in a dry, ventilated space away from moisture.",
    safety:
      "Use only in a controlled ritual fire setting. Keep water nearby and never leave a fire unattended.",
    benefits: [
      "A natural material for ceremonial fire",
      "Convenient, consistent shape",
      "Purpose-built for tradition",
    ],
    faqs: [
      { q: "Are these for havan only?", a: "They are primarily designed for havan and fire rituals." },
      { q: "How many logs are needed?", a: "This depends on your ritual. [Add guidance per product batch]" },
    ],
  },
  {
    id: "samidha-001",
    slug: "cow-dung-samidha",
    name: "Cow Dung Samidha",
    category: "samidha",
    categoryLabel: "Samidha",
    featured: true,
    shortDescription:
      "Ready-to-use samidha crafted to make havan and sacred fire rituals simple and meaningful.",
    description:
      "Cow Dung Samidha from Radha Dhoops is prepared to support traditional havan practices. Crafted from naturally available cow dung, each piece is shaped for convenience while honouring the essence of the ritual.",
    images: [PX(8021229), PX(5253723), PX(12430842), PX(36180094, 1200, 1500)],
    highlights: [
      "Ready-to-use for havan",
      "Made from naturally sourced cow dung",
      "Uniform, convenient pieces",
      "Crafted with ritual in mind",
    ],
    material: "Naturally sourced cow dung",
    dimensions: "[Product Dimensions]",
    weight: "[Product Weight]",
    packSize: "[Pack Size]",
    quantity: "[Quantity]",
    usage: ["Havan & yagna", "Daily agnihotra", "Ceremonial fire"],
    howToUse: [
      "Place the samidha into the ritual fire as per tradition.",
      "Add offerings following your practice.",
      "Maintain the fire responsibly throughout.",
    ],
    suitableFor: "Havan, agnihotra and traditional fire rituals.",
    storage: "Store in a dry place away from moisture.",
    safety:
      "Use only in a controlled ritual fire. Keep water nearby and never leave unattended.",
    benefits: [
      "Simplifies traditional havan",
      "Consistent, convenient pieces",
      "A natural, purposeful material",
    ],
    faqs: [
      { q: "What is samidha used for?", a: "Samidha is traditionally offered into the sacred fire during havan and yagna." },
      { q: "Is it ready to use?", a: "Yes, it is shaped and prepared for direct ritual use." },
    ],
  },
  {
    id: "other-001",
    slug: "cow-dung-puja-essentials",
    name: "Cow Dung Puja Essentials",
    category: "other",
    categoryLabel: "Other",
    featured: true,
    shortDescription:
      "A thoughtful set of essentials designed to complete your पूजा and daily rituals.",
    description:
      "Our Puja Essentials bring together naturally crafted cow-dung products to complete your पूजा space. Designed with purpose and consistency, they make it easy to bring a natural, traditional touch to everyday worship.",
    images: [PX(38920473), PX(13772390), PX(7685636), PX(7686352)],
    highlights: [
      "A curated set for पूजा & ritual",
      "Made from naturally sourced materials",
      "Consistent, thoughtful craftsmanship",
      "Premium, gift-ready presentation",
    ],
    material: "Naturally sourced cow dung & natural materials",
    dimensions: "[Product Dimensions]",
    weight: "[Product Weight]",
    packSize: "[Pack Size]",
    quantity: "[Quantity]",
    usage: ["Daily पूजा", "Festivals", "Gifting"],
    howToUse: [
      "Use each item as per its traditional purpose.",
      "Arrange within your पूजा space as preferred.",
    ],
    suitableFor: "Daily worship, festive occasions and gifting.",
    storage: "Store in a cool, dry place.",
    safety:
      "Follow the safety guidance for each individual item within the set.",
    benefits: [
      "Everything for your ritual, thoughtfully together",
      "Natural, purposeful materials",
      "Beautiful, gift-ready set",
    ],
    faqs: [
      { q: "What's included?", a: "Contents vary by set. [Add exact contents per product batch]" },
      { q: "Is this suitable for gifting?", a: "Yes, the set is presented in a premium, gift-ready form." },
    ],
  },
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
