// RADHA DHOOPS MACHINES
// Intentionally empty. The catalogue is fully architected for future products.
// When machines are added, /machines and /machines/[slug] will render automatically.
//
// Each machine will eventually support the following structure:
// {
//   id: "",
//   slug: "",
//   name: "",
//   images: [],
//   shortDescription: "",
//   description: "",
//   features: [],
//   capacity: "",
//   dimensions: "",
//   power: "",
//   applications: [],
//   specifications: [{ label: "", value: "" }],
//   video: "",
//   faqs: [{ q: "", a: "" }],
// }

export const machines = [
  {
    id: "m1",
    slug: "cow-dung-briquettes-machine",
    name: "Cow Dung Briquettes Machine",
    images: ["/machines/cowdung brequites machine.png"],
    shortDescription: "Efficient machine for producing high-density cow dung briquettes.",
    description: "Our Cow Dung Briquettes Machine is engineered for heavy-duty production, converting raw cow dung into compact, high-density briquettes. Ideal for fuel applications, these briquettes offer a sustainable alternative to traditional firewood and coal.",
    features: ["High production capacity", "Durable build for continuous operation", "Energy-efficient motor", "Low maintenance design"],
    capacity: "500 - 1000 kg/hour",
    dimensions: "2000 x 1200 x 1500 mm",
    power: "15 HP / 3-Phase",
    applications: ["Biofuel production", "Heating applications", "Industrial boilers"],
    specifications: [
      { label: "Material", value: "Mild Steel" },
      { label: "Automation Grade", value: "Semi-Automatic" },
      { label: "Briquette Size", value: "Customizable" }
    ],
    video: "",
    faqs: [
      { q: "What is the moisture requirement?", a: "The input cow dung should ideally have 10-15% moisture content." }
    ]
  },
  {
    id: "m2",
    slug: "cow-dung-logs-brick-crusher",
    name: "Cow Dung Logs or Brick Crusher Machine",
    images: ["/machines/cowdung logs or brick crusher machine.png"],
    shortDescription: "Robust crusher designed for breaking down cow dung logs and bricks.",
    description: "Designed specifically to handle dried cow dung logs and bricks, this crusher effectively breaks down solid materials into fine, manageable pieces. It acts as the perfect pre-processing unit before powdering or pelletizing.",
    features: ["Heavy-duty crushing blades", "Safety enclosure", "Adjustable output size", "Easy to clean"],
    capacity: "300 - 800 kg/hour",
    dimensions: "1500 x 1000 x 1200 mm",
    power: "10 HP",
    applications: ["Pre-processing for powder making", "Agricultural compost preparation"],
    specifications: [
      { label: "Blade Material", value: "High Carbon Steel" },
      { label: "Operation", value: "Continuous" }
    ],
    video: "",
    faqs: [
      { q: "Can it crush wet logs?", a: "It performs best with dried logs or bricks." }
    ]
  },
  {
    id: "m3",
    slug: "cow-dung-dewatering-machine",
    name: "Cow Dung Dewatering Machine",
    images: ["/machines/cowdungdewateringmachine.png"],
    shortDescription: "Separates solid and liquid components of raw cow dung efficiently.",
    description: "The Dewatering Machine is a crucial step in cow dung processing. It effectively separates liquid from raw cow dung, yielding a semi-dry solid output that is perfect for composting, log making, or briquetting, while the liquid can be used as organic liquid fertilizer.",
    features: ["High extraction rate", "Stainless steel screen", "Anti-clogging mechanism", "Compact footprint"],
    capacity: "2 - 4 cubic meters/hour",
    dimensions: "1800 x 800 x 1400 mm",
    power: "5 HP",
    applications: ["Biogas plants", "Organic fertilizer production", "Dairy farms"],
    specifications: [
      { label: "Screen Material", value: "SS 304" },
      { label: "Moisture of solid output", value: "40 - 50%" }
    ],
    video: "",
    faqs: [
      { q: "Does it require manual feeding?", a: "It can be integrated with a slurry pump for automatic feeding." }
    ]
  },
  {
    id: "m4",
    slug: "cow-dung-log-machine",
    name: "Cow Dung Log Machine",
    images: ["/machines/cowdunglogmachine.png"],
    shortDescription: "Produces traditional-style cow dung logs (Gomaya Samidha) for Hawan and fuel.",
    description: "The Cow Dung Log Machine streamlines the production of Gomaya Samidha (logs). It extrudes well-mixed cow dung into uniform, hollow or solid logs that are widely used in religious ceremonies, crematoriums, and as eco-friendly fuel.",
    features: ["Multiple die sizes available", "Smooth extrusion process", "Hollow log capability for better burning", "Easy mobility with castor wheels"],
    capacity: "200 - 500 kg/hour",
    dimensions: "1600 x 800 x 1100 mm",
    power: "3 HP - 5 HP",
    applications: ["Hawan and Puja", "Eco-friendly crematoriums", "Cooking fuel"],
    specifications: [
      { label: "Log Diameter", value: "2 to 4 inches (interchangeable dies)" },
      { label: "Type", value: "Screw Extruder" }
    ],
    video: "",
    faqs: [
      { q: "Can we mix additives?", a: "Yes, you can mix sawdust, camphor, or hawan samagri before extrusion." }
    ]
  },
  {
    id: "m5",
    slug: "cow-dung-pellet-machine",
    name: "Cow Dung Pellet Machine",
    images: ["/machines/cowdungpalletmachine.png"],
    shortDescription: "Converts processed cow dung powder into compact, easy-to-use pellets.",
    description: "This Pellet Machine takes finely powdered cow dung and compresses it into small, dense pellets. These pellets are excellent for organic farming as a slow-release fertilizer or as a highly efficient biofuel with consistent burning properties.",
    features: ["Precision die matrix", "High compression ratio", "Adjustable pellet length", "Temperature control"],
    capacity: "100 - 300 kg/hour",
    dimensions: "1200 x 800 x 1300 mm",
    power: "10 HP",
    applications: ["Organic fertilizer pellets", "Biofuel pellets"],
    specifications: [
      { label: "Pellet Size", value: "6mm - 12mm" },
      { label: "Automation", value: "Semi-Automatic" }
    ],
    video: "",
    faqs: [
      { q: "Do we need a binder?", a: "Usually, the natural lignin and moisture in cow dung act as a natural binder, though minimal water might be added." }
    ]
  },
  {
    id: "m6",
    slug: "cow-dung-powder-machine",
    name: "Cow Dung Powder Machine",
    images: ["/machines/cowdungpowder machine.png"],
    shortDescription: "Grinds dried cow dung into fine powder for various downstream applications.",
    description: "The Cow Dung Powder Machine is a high-speed grinder that pulverizes dried cow dung cakes, logs, or bricks into a fine powder. This powder is the foundational material for making dhoop sticks, cones, and high-quality organic fertilizers.",
    features: ["High-speed rotors", "Dust-controlled output", "Interchangeable screens for different mesh sizes", "Low vibration operation"],
    capacity: "100 - 400 kg/hour",
    dimensions: "1000 x 800 x 1400 mm",
    power: "5 HP - 7.5 HP",
    applications: ["Dhoop and Agarbatti making", "Fine organic manure", "Pelletizing pre-process"],
    specifications: [
      { label: "Mesh Size", value: "40 - 100 mesh depending on screen" },
      { label: "Material", value: "Heavy Duty Cast Iron/Steel" }
    ],
    video: "",
    faqs: [
      { q: "Is it loud?", a: "It produces standard industrial grinding noise; ear protection is recommended for operators." }
    ]
  }
];

export const getMachine = (slug) => machines.find((m) => m.slug === slug);
