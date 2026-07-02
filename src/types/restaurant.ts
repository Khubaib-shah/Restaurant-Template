export interface RestaurantConfig {
  slug: string;
  name: string;
  logo: string;                    // URL
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
  taxPercent: number;              // e.g. 15
  activePromo: PromoConfig | null;
  seoText: string;
  brand: {
    primaryColor: string;          // injected as --brand-primary
    accentColor: string;           // injected as --brand-accent
    bgImage?: string;              // dynamic background image
    bgColor?: string;              // dynamic background color if no image
    cardStyle?: 'default' | 'minimal' | 'list'; // dynamic card UI selection
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
  type: 'flat_percent' | 'flat_amount' | 'free_delivery';
  value: number;
  label: string;
}
