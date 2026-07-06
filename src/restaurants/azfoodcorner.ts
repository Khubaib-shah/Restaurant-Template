import { RestaurantConfig } from "../types/restaurant";

export const azFoodCornerConfig: RestaurantConfig = {
  slug: "az-food-corner",

  logo: "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783198029/Logo_wiu5ll.jpg",

  name: "AZ Food Corner",

  announcementText: "10% OFF on all orders!",

  contact: {
    phone: "03099930777",
    email: "temp@gmail.com",
    address: "Shop # G-9/4, Country Heights, Gulshan-e-Johar, Karachi",
  },

  social: {
    facebook: "",
    instagram: "",
  },

  location: {
    city: "Karachi",
    area: "Gulshan-e-Johar",
  },

  deliveryInfo: {
    estimatedMinutes: 35,
    fee: 100,
    minOrder: 350,
  },

  taxPercent: 0,

  activePromo: {
    type: "flat_percent",
    value: 10,
    label: "OFF",
  },

  seoText:
    "AZ Food Corner serves freshly baked pizzas, burgers, pizza rolls, pasta, fries and refreshing beverages in Karachi. Order online for fast home delivery and enjoy delicious deals for families and friends.",

  // ==========================
  // BRAND / THEME
  // ==========================
  theme: {
    colors: {
      // Main Brand Colors
      primary: "#B51217",
      accent: "#E76B12",

      background: {
        page: "#FFF8F0",
        card: "#FFFFFF",
        header: "#7A090C",
        categoryBanner: "#FFF0DF",
      },

      text: {
        primary: "#1F1F1F",
        secondary: "#555555",
        muted: "#A0A0A0",
        inverse: "#FFFFFF",

        price: "#B51217",
        originalPrice: "#9CA3AF",
      },

      badge: {
        newArrival: "#22C55E",
        bestSeller: "#D62828",
        trending: "#F97316",
        popular: "#F59E0B",
        hotSelling: "#991B1B",
        mostFavourite: "#F4A62A",
        specialFlavors: "#16A34A",
        chefsSpecial: "#EA580C",
        chefsRecommendation: "#22C55E",
      },

      cart: {
        savingsBackground: "#FFF4D6",
        savingsText: "#A64B00",
      },
    },

    assets: {
      background: {
        mode: "image",
        image: "",
      },

      categoryBackground:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783083286/pizza-categry_ga50eq.png",
    },

    cardStyle: "minimal",
  },

  // ==========================
  // Footer Links
  // ==========================
  footer: {
    description:
      "Freshly baked pizzas, burgers, pasta, fries and refreshing beverages made with quality ingredients. Order online for fast delivery across Gulshan-e-Johar and nearby areas.",
    layoutVariant: "classic",
  },
  privacyPolicy: {
    title: "AZ Food Corner Privacy Policy",
    lastUpdated: "Last updated: July 2026",
    intro:
      "At AZ Food Corner, we respect your privacy and are committed to protecting your personal information while you enjoy our food and delivery services.",
    sections: [
      {
        heading: "What information we collect",
        body: "We collect your name, phone number, delivery address, order details, and payment information required to process and deliver your order.",
      },
      {
        heading: "How we use your information",
        body: "Your information is used to prepare orders, communicate with you, improve service quality, and prevent fraud and abuse.",
      },
      {
        heading: "Sharing your information",
        body: "We do not sell your personal data. We may share limited information with trusted delivery and payment partners only to fulfill your order.",
      },
      {
        heading: "Your choices",
        body: "You can contact us at any time if you want to review, update, or ask questions about your personal information.",
      },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    intro:
      "Here are the most common questions our customers ask about ordering, delivery, and payments at AZ Food Corner.",
    items: [
      {
        question: "Do you deliver to my area?",
        answer:
          "Yes, we deliver to most nearby neighborhoods in Gulshan-e-Johar and surrounding areas. Please check your address in the location selector.",
      },
      {
        question: "What are your delivery timings?",
        answer:
          "We usually operate for fast delivery during our regular service hours. Please contact us for the latest updates.",
      },
      {
        question: "Can I order for a group or family deal?",
        answer:
          "Absolutely. We offer family and combo deals that are perfect for sharing with friends or family.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We support cash on delivery and online payments for a smooth checkout experience.",
      },
    ],
  },
  // ==========================
  // HERO
  // ==========================
  heroSlides: [
    {
      id: "slide-1",
      imageUrl:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783302838/banner-slider_mzegyy.webp",
    },
    {
      id: "slide-2",
      imageUrl:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783295184/banner-slider-2_kubqlx.webp",
    },
    {
      id: "slide-3",
      imageUrl:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783295390/banner-slider-3_igawmo.webp",
    },
  ],
};
