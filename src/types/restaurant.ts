export interface RestaurantConfig {
  slug: string;
  name: string;
  logo: string;

  heroSlides: HeroSlide[];

  announcementText: string | null;

  contact: {
    phone: string;
    email: string;
    address: string;
  };

  social: {
    facebook?: string;
    instagram?: string;
  };

  location: {
    city: string;
    area: string;
  };

  deliveryInfo: {
    estimatedMinutes: number;
    fee: number;
    minOrder: number;
  };

  taxPercent: number;

  activePromo: PromoConfig | null;

  seoText: string;

  theme: RestaurantTheme;
}

export interface RestaurantTheme {
  colors: ThemeColors;

  assets: ThemeAssets;

  cardStyle?: "default" | "minimal" | "list";
}

export interface ThemeAssets {
  background: {
    mode: "image" | "color" | "gradient" | "video";
    image?: string;
    video?: string;
    gradient?: string;
  }

  categoryBackground?: string;
}

export interface ThemeColors {
  primary: string;
  accent: string;

  background: {
    page: string;
    card: string;
    header: string;
    categoryBanner: string;
  };

  text: {
    primary: string;
    secondary: string;
    muted: string;
    inverse: string;
    price: string;
    originalPrice: string;
  };

  badge: {
    newArrival: string;
    bestSeller: string;
    trending: string;
    popular: string;
    hotSelling: string;
    mostFavourite: string;
    specialFlavors: string;
    chefsSpecial: string;
    chefsRecommendation: string;
  };

  cart: {
    savingsBackground: string;
    savingsText: string;
  };
}

export interface HeroSlide {
  id: string;
  imageUrl: string;
  promoLabel?: string;
  promoHeadline?: string;
  promoSub?: string;
}

export interface PromoConfig {
  type: "flat_percent" | "flat_amount" | "free_delivery";
  value: number;
  label: string;
}