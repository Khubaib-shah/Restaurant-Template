import { RestaurantConfig } from "../types/restaurant";

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="48" fill="#FFF7ED"/>
  <path d="M50 18
           C40 18 32 26 32 36
           C32 42 35 46 38 49
           L50 82
           L62 49
           C65 46 68 42 68 36
           C68 26 60 18 50 18Z"
        fill="#F472B6"/>
  <circle cx="50" cy="32" r="16" fill="#F9A8D4"/>
  <circle cx="44" cy="28" r="2.5" fill="#FFFFFF"/>
  <circle cx="56" cy="34" r="2.5" fill="#FFFFFF"/>
  <circle cx="52" cy="26" r="2" fill="#FACC15"/>
  <text
    x="50"
    y="95"
    font-size="9"
    font-weight="bold"
    fill="#DB2777"
    text-anchor="middle"
  >
    SCOOPS
  </text>
</svg>`;

export const demoConfig: RestaurantConfig = {
  slug: "demo",

  name: "Scoops Ice Cream",

  logo: `data:image/svg+xml;utf8,${encodeURIComponent(logoSvg)}`,

  announcementText: "🍦 Summer Special - Buy 2 Scoops & Get 1 Free!",

  contact: {
    phone: "0300-5558899",
    email: "hello@scoops.pk",
    address: "Shop 18, Ocean Mall, Clifton Block 9, Karachi",
  },

  social: {
    facebook: "https://facebook.com/scoopspk",
    instagram: "https://instagram.com/scoopspk",
  },

  location: {
    city: "Karachi",
    area: "Clifton",
  },

  deliveryInfo: {
    estimatedMinutes: 25,
    fee: 99,
    minOrder: 400,
  },

  taxPercent: 10,

  activePromo: {
    type: "free_delivery",
    value: 500,
    label: "FREE DELIVERY",
  },

  seoText:
    "Scoops Ice Cream offers handcrafted ice creams, sundaes, waffles, milkshakes and desserts with fast delivery across Karachi. Order your favourite frozen treats online today.",

  theme: {
    colors: {
      primary: "#EC4899",
      accent: "#FBBF24",

      background: {
        page: "#FFF7ED",
        card: "#FFFFFF",
        header: "#EC4899",
        categoryBanner: "#FFE4F3",
      },

      text: {
        primary: "#3F3F46",
        secondary: "#71717A",
        muted: "#A1A1AA",
        inverse: "#FFFFFF",
        price: "#EC4899",
        originalPrice: "#9CA3AF",
      },

      badge: {
        newArrival: "#22C55E",
        bestSeller: "#F97316",
        trending: "#EC4899",
        popular: "#EAB308",
        hotSelling: "#DC2626",
        mostFavourite: "#F59E0B",
        specialFlavors: "#06B6D4",
        chefsSpecial: "#8B5CF6",
        chefsRecommendation: "#10B981",
      },

      cart: {
        savingsBackground: "#FEF3C7",
        savingsText: "#B45309",
      },
    },

    assets: {
      background: {
        mode: "image",
        image:
          "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1783087385/download_tedn89.png",
      },

      categoryBackground:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/c_scale,w_2000/v1783083860/Purple_Welcome_Blackboard_Banner_ufmuxw.png",
    },

    cardStyle: "list",
  },

  footer: {
    description:
      "Scoops Ice Cream serves refreshing frozen treats and sweet desserts with lightning-fast delivery across Clifton.",
    layoutVariant: "compact",
  },

  heroSlides: [
    {
      id: "slide-1",
      imageUrl:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "SUMMER SPECIAL",
      promoHeadline: "BUY 2 GET 1",
      promoSub: "ON ALL ICE CREAM SCOOPS",
    },

    {
      id: "slide-2",
      imageUrl:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "PREMIUM SUNDAES",
      promoHeadline: "NEW FLAVOURS",
      promoSub: "TRY OUR MANGO & BISCOFF SERIES",
    },

    {
      id: "slide-3",
      imageUrl:
        "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=1200&auto=format&fit=crop&q=80",
      promoLabel: "FAMILY DEAL",
      promoHeadline: "FREE DELIVERY",
      promoSub: "ON ORDERS ABOVE RS. 1500",
    },
  ],
};
