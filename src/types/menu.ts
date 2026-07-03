export interface Category {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
  bannerStyle: 'pentagon' | 'plain';
  description?: string;
  cardStyle?: 'default' | 'minimal' | 'list';
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  imageUrl?: string;               // undefined = show brand logo placeholder
  basePrice: number;               // original / MRP
  discountedPrice: number;         // actual selling price
  hasVariants: boolean;
  variants?: VariantGroup[];
  badge?: BadgeType;
  isAvailable: boolean;
  isFeatured: boolean;             // appears in Popular Items
  dealLayout?: boolean;            // true = 16:9 card layout
  servingNote?: string;            // "Served with Saffron Rice"
  pricePrefix?: 'From';            // for variant items
}

export interface MenuCategory extends Category {
  items: MenuItem[];
}

export type BadgeType =
  | 'NEW_ARRIVAL'
  | 'BEST_SELLER'
  | 'TRENDING'
  | 'POPULAR'
  | 'HOT_SELLING'
  | 'MOST_FAVOURITE'
  | 'SPECIAL_FLAVORS'
  | 'CHEFS_SPECIAL'
  | 'CHEFS_RECOMMENDATION';

export interface VariantGroup {
  id: string;
  name: string;                    // e.g. "Size"
  required: boolean;
  minSelect: number;
  maxSelect: number;
  options: VariantOption[];
}

export interface VariantOption {
  id: string;
  name: string;                    // e.g. "Half", "Full"
  additionalPrice: number;         // added to basePrice
}
