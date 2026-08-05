export const reviewPlatforms = {
  google: "Google",
  facebook: "Facebook",
  yelp: "Yelp",
};

export const aggregateRatings = {
  overall: "5.0",
  total: "250+",
  platforms: [
    { id: "google", rating: "5.0", count: "120+" },
    { id: "facebook", rating: "4.9", count: "85+" },
    { id: "yelp", rating: "5.0", count: "45+" },
  ],
};

export const customerReviews = [
  {
    id: "review-1",
    name: "Sarah Johnson",
    location: "Birmingham",
    text: "Absolutely amazing service! My car looks brand new. The attention to detail is incredible. Best detailing service I've ever used.",
    platform: "google",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "review-2",
    name: "Michael Chen",
    location: "Solihull",
    text: "Professional, punctual, and the results speak for themselves. My BMW has never looked this good. Highly recommend Royal Shine!",
    platform: "facebook",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "review-3",
    name: "Emma Williams",
    location: "Edgbaston",
    text: "The ceramic coating is worth every penny. Water beads off beautifully and the shine is stunning. Excellent customer service too!",
    platform: "yelp",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "review-4",
    name: "David Thompson",
    location: "Harborne",
    text: "I've tried many detailers but Royal Shine is in a league of their own. The interior cleaning was phenomenal. Will definitely be back!",
    platform: "google",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "review-5",
    name: "Lisa Anderson",
    location: "Moseley",
    text: "Outstanding work on my Range Rover. They transformed it completely. Fair pricing and exceptional quality. 5 stars all the way!",
    platform: "facebook",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "review-6",
    name: "James Roberts",
    location: "Sutton Coldfield",
    text: "Paint correction removed years of swirl marks. The team was friendly, thorough, and clearly passionate about what they do.",
    platform: "google",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: "review-7",
    name: "Amina Khan",
    location: "Dorridge",
    text: "Mobile detailing at its finest. They arrived on time, worked efficiently, and left my Tesla looking showroom-ready.",
    platform: "yelp",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
];

export const reviewsTrustStats = [
  { value: "1,000+", label: "Happy Customers", icon: "shieldCheck" },
  { value: "500+", label: "Vehicles Detailed", icon: "car" },
  { value: "5+", label: "Years of Experience", icon: "trophy" },
  { value: "100%", label: "Satisfaction Guarantee", icon: "award" },
  { value: "24/7", label: "Customer Support", icon: "messages" },
];
