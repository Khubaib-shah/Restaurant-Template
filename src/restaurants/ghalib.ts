import { RestaurantConfig } from "../types/restaurant";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1"/>
  <polygon points="12,50 28,33 72,33 88,50 72,67 28,67" fill="#1A3C2E"/>
  <polygon points="15,50 29,35 71,35 85,50 71,65 29,65" fill="none" stroke="#E63946" stroke-width="1"/>
  <text
    x="50"
    y="54"
    font-family="'Inter', 'Times New Roman', serif"
    font-size="10"
    font-weight="900"
    fill="#FFFFFF"
    text-anchor="middle"
    letter-spacing="1"
  >
    GHALIB
  </text>
</svg>`;

export const ghalibConfig: RestaurantConfig = {
  slug: "ghalib",

  name: "Ghalib Restaurant",

  logo: `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`,

  announcementText: "Ordering is temporarily disabled",

  contact: {
    phone: "03149784156",
    email: "syedkhubaibshah@icloud.com",
    address:
      "Rooftop @ Habitt Building On Main, Tipu Sultan Rd, off Shahrah-e-Faisal Road, Karachi",
  },

  social: {
    facebook: "https://facebook.com/ghalibrestaurant",
    instagram: "https://instagram.com/ghalibrestaurant",
  },

  location: {
    city: "Karachi",
    area: "Akramabad",
  },

  deliveryInfo: {
    estimatedMinutes: 45,
    fee: 200,
    minOrder: 0,
  },

  taxPercent: 15,

  activePromo: {
    type: "flat_percent",
    value: 40,
    label: "Off",
  },

  seoText:
    "Check out the amazing food variety of Ghalib Restaurant - Karachi. We strive to bring the best experience of online ordering and delivery to our customers in Karachi. If you are looking for online deals with home delivery across Karachi then look no further, order now your favorite meals from Ghalib Restaurant.",

  // ==========================
  // BRAND / THEME
  // ==========================
  theme: {
    colors: {
      primary: "#1A3C2E",
      accent: "#E63946",

      background: {
        page: "#F5F0E8",
        card: "#FFFFFF",
        header: "#1A3C2E",
        categoryBanner: "#F5F0E8",
      },

      text: {
        primary: "#1A1A1A",
        secondary: "#6B7280",
        muted: "#9CA3AF",
        inverse: "#FFFFFF",
        price: "#1A1A1A",
        originalPrice: "#9CA3AF",
      },

      badge: {
        newArrival: "#16A34A",
        bestSeller: "#CA8A04",
        trending: "#EA580C",
        popular: "#CA8A04",
        hotSelling: "#DC2626",
        mostFavourite: "#D97706",
        specialFlavors: "#0891B2",
        chefsSpecial: "#0F766E",
        chefsRecommendation: "#16A34A",
      },

      cart: {
        savingsBackground: "#F0FDF4",
        savingsText: "#16A34A",
      },
    },

    assets: {
      background: {
        mode: "image", // "image" | "color"
        image: "https://assets.indolj.io/upload/1713772718-background-2.jpg",
      },

      categoryBackground:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783027111/categoryIMG_rriqvy.jpg",
    },

    cardStyle: "default",
  },

  // ==========================
  // HERO
  // ==========================
  heroSlides: [
    {
      id: "slide-1",
      imageUrl:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "DELIVERY SPECIAL",
      promoHeadline: "40% OFF",
      promoSub: "ON THE ENTIRE MENU",
    },

    {
      id: "slide-2",
      imageUrl:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "AUTHENTIC TASTE",
      promoHeadline: "HOT BBQ",
      promoSub: "STRAIGHT TO YOUR DOORSTEP",
    },

    {
      id: "slide-3",
      imageUrl:
        "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "CHEF'S SPECIALS",
      promoHeadline: "HANDI & KARAHI",
      promoSub: "EXPERIENCE THE ROYALE FEAST",
    },
  ],
};

// TODO:
// Multi-tenant version:
// const restaurantConfig = await api.getRestaurantConfig(slug);
