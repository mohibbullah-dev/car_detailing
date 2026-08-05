export const pricingPlans = [
  {
    id: "basic",
    title: "Basic Detail",
    subtitle: "Essential clean. Inside & out.",
    price: "149",
    cents: "99",
    icon: "car",
    featured: false,
    features: [
      "Exterior Hand Wash",
      "Interior Vacuum",
      "Window Cleaning",
      "Tire & Wheel Cleaning",
      "Basic Interior Wipe Down",
    ],
  },
  {
    id: "premium",
    title: "Premium Detail",
    subtitle: "Our most popular package.",
    price: "249",
    cents: "99",
    icon: "gem",
    featured: true,
    features: [
      "Everything in Basic",
      "Paint Decontamination",
      "Clay Bar Treatment",
      "Polish & Paint Enhancement",
      "Interior Deep Cleaning",
      "Leather Conditioning",
      "Tire Dressing",
    ],
  },
  {
    id: "ultimate",
    title: "Ultimate Detail",
    subtitle: "The ultimate in luxury car care.",
    price: "399",
    cents: "99",
    icon: "shield",
    featured: false,
    features: [
      "Everything in Premium",
      "1-Year Ceramic Coating",
      "Engine Bay Detailing",
      "Headlight Restoration",
      "Trim & Plastic Restoration",
      "Odor Elimination Treatment",
      "Premium Protectant Application",
    ],
  },
];

export const pricingAddons = [
  { label: "Ceramic Coating", price: "+$199", icon: "sparkles" },
  { label: "Engine Bay Detail", price: "+$79", icon: "cog" },
  { label: "Headlight Restoration", price: "+$59", icon: "lightbulb" },
  { label: "Pet Hair Removal", price: "+$49", icon: "paw" },
];

export const pricingBottomFeatures = [
  {
    title: "Expert Detailers",
    subtitle: "Certified & Trained",
    icon: "users",
  },
  {
    title: "Premium Products",
    subtitle: "Top Quality Only",
    icon: "flask",
  },
  {
    title: "Convenient Booking",
    subtitle: "Online in Minutes",
    icon: "calendar",
  },
];
