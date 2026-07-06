import { RestaurantConfig } from "../types/restaurant";

const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="48" fill="#D62828"/>
  <circle cx="50" cy="50" r="32" fill="#F4A261"/>
  <circle cx="40" cy="42" r="4" fill="#8B0000"/>
  <circle cx="60" cy="58" r="4" fill="#8B0000"/>
  <circle cx="60" cy="40" r="4" fill="#8B0000"/>
  <circle cx="42" cy="60" r="4" fill="#8B0000"/>
  <circle cx="50" cy="50" r="3" fill="#2A9D8F"/>
  <text
    x="50"
    y="90"
    font-size="10"
    font-weight="bold"
    fill="#FFFFFF"
    text-anchor="middle"
  >
    PIZZA
  </text>
</svg>
`;

export const pizzaConfig: RestaurantConfig = {
  slug: "pizza",

  logo: `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`,

  name: "Pizza Palace",

  announcementText: "🔥 Buy 1 Large Pizza, Get 1 Medium FREE!",

  contact: {
    phone: "0300-1112233",
    email: "orders@pizzapalace.pk",
    address: "Shop #12, Bahadurabad, Karachi",
  },

  social: {
    facebook: "https://facebook.com/pizzapalacepk",
    instagram: "https://instagram.com/pizzapalacepk",
  },

  location: {
    city: "Karachi",
    area: "Bahadurabad",
  },

  deliveryInfo: {
    estimatedMinutes: 30,
    fee: 99,
    minOrder: 500,
  },

  taxPercent: 10,

  activePromo: {
    type: "flat_percent",
    value: 25,
    label: "OFF",
  },

  seoText:
    "Pizza Palace serves freshly baked pizzas, stuffed crusts, pasta, garlic bread and refreshing beverages across Karachi. Order online for fast home delivery.",
  // ==========================
  // BRAND / THEME
  // ==========================
  theme: {
    colors: {
      primary: "#D62828",
      accent: "#F4A261",

      background: {
        page: "#FFF8F0",
        card: "#FFFFFF",
        header: "#8B0000",
        categoryBanner: "#FFE8CC",
      },

      text: {
        primary: "#2B2B2B",
        secondary: "#666666",
        muted: "#A0A0A0",
        inverse: "#FFFFFF",
        price: "#D62828",
        originalPrice: "#9CA3AF",
      },

      badge: {
        newArrival: "#10B981",
        bestSeller: "#E63946",
        trending: "#F97316",
        popular: "#D97706",
        hotSelling: "#B91C1C",
        mostFavourite: "#F59E0B",
        specialFlavors: "#16A34A",
        chefsSpecial: "#EA580C",
        chefsRecommendation: "#22C55E",
      },

      cart: {
        savingsBackground: "#FEF3C7",
        savingsText: "#B45309",
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

  footer: {
    description:
      "Crave hot pizza, cheesy sides and bubbly beverages delivered fresh from Pizza Palace.",
    layoutVariant: "minimal",
  },

  // ==========================
  // HERO
  // ==========================
  heroSlides: [
    {
      id: "slide-1",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "LIMITED OFFER",
      promoHeadline: "BUY 1 GET 1",
      promoSub: "ON ALL LARGE PIZZAS",
    },
    {
      id: "slide-2",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "CHEESY DELIGHT",
      promoHeadline: "EXTRA CHEESE",
      promoSub: "FREE ON FAMILY SIZE",
    },
    {
      id: "slide-3",
      imageUrl:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "FAST DELIVERY",
      promoHeadline: "HOT & FRESH",
      promoSub: "DELIVERED IN 30 MINUTES",
    },
  ],
};

// TODO:
// Multi-tenant version:
// const restaurantConfig = await api.getRestaurantConfig(slug);
