import { RestaurantConfig } from "../types/restaurant";

export const marhabaBBQConfig: RestaurantConfig = {
  slug: "marhaba-bbq",

  logo: "", // Add Marhaba BBQ logo

  name: "Marhaba BBQ",

  announcementText: "Authentic BBQ • Freshly Grilled Every Day",

  contact: {
    phone: "03333342776",
    email: "info@marhababbq.pk",
    address:
      "4 Abul Hasan Isphahani Rd, Near Arshad Ali Sabri Family Park, Block 4A Gulshan-e-Iqbal, Karachi",
  },

  social: {
    facebook: "",
    instagram: "",
  },

  location: {
    city: "Karachi",
    area: "Gulshan-e-Iqbal",
  },

  deliveryInfo: {
    estimatedMinutes: 45,
    fee: 150,
    minOrder: 500,
  },

  taxPercent: 0,

  activePromo: {
    type: "flat_percent",
    value: 10,
    label: "OFF",
  },

  seoText:
    "Marhaba BBQ serves authentic Pakistani BBQ, Chapli Kabab, Namkeen Tikka, Behari Boti, Karahi, Malai Boti, Fish, Karak Chai and traditional KPK cuisine in Karachi. Order online for fresh charcoal grilled food with fast delivery.",

  // ==========================
  // BRAND / THEME
  // ==========================

  theme: {
    colors: {
      primary: "#A11D1D",
      accent: "#D89C27",

      background: {
        page: "#F9F4EA",
        card: "#FFFFFF",
        header: "#1F1F1F",
        categoryBanner: "#EFE6D5",
      },

      text: {
        primary: "#3C2A21",
        secondary: "#6B5E55",
        muted: "#A89A90",
        inverse: "#FFFFFF",

        price: "#A11D1D",
        originalPrice: "#9CA3AF",
      },

      badge: {
        newArrival: "#61764B",
        bestSeller: "#A11D1D",
        trending: "#C56A1A",
        popular: "#D89C27",
        hotSelling: "#7A1616",
        mostFavourite: "#E0A52A",
        specialFlavors: "#61764B",
        chefsSpecial: "#B75A16",
        chefsRecommendation: "#61764B",
      },

      cart: {
        savingsBackground: "#FDF2D2",
        savingsText: "#8A5A00",
      },
    },

    assets: {
      background: {
        mode: "image",
        image: "",
      },

      categoryBackground: "",
    },

    cardStyle: "minimal",
  },

  // ==========================
  // Footer
  // ==========================

  footer: {
    description:
      "Experience authentic Pakistani BBQ prepared over charcoal using traditional recipes. From Chapli Kabab and Namkeen Tikka to Karahi and freshly brewed Karak Chai, Marhaba BBQ brings rich flavors to your table.",
    layoutVariant: "classic",
  },

  privacyPolicy: {
    title: "Marhaba BBQ Privacy Policy",

    lastUpdated: "Last updated: July 2026",

    intro:
      "At Marhaba BBQ, your privacy matters. We collect only the information required to prepare, process, and deliver your orders while providing you with the best dining experience.",

    sections: [
      {
        heading: "Information We Collect",
        body: "We collect your name, phone number, delivery address, order details, and payment information required to process your order.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used to prepare your meals, deliver your orders, communicate updates, improve our services, and prevent fraudulent activities.",
      },
      {
        heading: "Information Sharing",
        body: "We never sell your personal information. Data is only shared with trusted delivery and payment partners when necessary to complete your order.",
      },
      {
        heading: "Your Rights",
        body: "You may contact us anytime to review, update, or request deletion of your personal information where applicable.",
      },
    ],
  },

  faqs: {
    title: "Frequently Asked Questions",

    intro:
      "Find answers to the most common questions about Marhaba BBQ, our menu, delivery, and ordering process.",

    items: [
      {
        question: "Do you offer home delivery?",
        answer:
          "Yes. We deliver across Gulshan-e-Iqbal and nearby areas. Delivery availability depends on your location.",
      },
      {
        question: "What are your most popular dishes?",
        answer:
          "Our best sellers include Chapli Kabab, Namkeen Tikka, Behari Boti, Malai Boti, Chicken Karahi, and Karak Chai.",
      },
      {
        question: "Do you serve family platters?",
        answer:
          "Yes. We offer family BBQ platters and combo meals that are perfect for gatherings.",
      },
      {
        question: "Which payment methods are available?",
        answer:
          "We accept Cash on Delivery and supported online payment methods.",
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
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1784461419/chapli-kabab_pknx5p.webp", // BBQ Banner
    },
    {
      id: "slide-2",
      imageUrl:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1784461419/chapli-kabab_pknx5p.webp", // Chapli Kabab Banner
    },
    {
      id: "slide-3",
      imageUrl:
        "https://res.cloudinary.com/dvyhnxnpq/image/upload/v1784461419/chapli-kabab_pknx5p.webp", // Family Platter Banner
    },
  ],
};
