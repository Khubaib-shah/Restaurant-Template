export interface Category {
  id: string;
  name: string;
  slug: string;
  sortOrder: number;
  imageUrl?: string;
  description?: string;
  cardStyle?: "default" | "minimal" | "list" | "list-alt";
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  imageUrl?: string; // undefined = show brand logo placeholder
  basePrice: number; // original / MRP
  discountedPrice: number; // actual selling price
  modifierGroups?: ModifierGroup[];
  variants?: ModifierGroup[]; // legacy compatibility
  badge?: BadgeType;
  isAvailable: boolean;
  isFeatured: boolean; // appears in Popular Items
  dealLayout?: boolean; // true = 16:9 card layout
  servingNote?: string; // "Served with Saffron Rice"
  pricePrefix?: "From"; // for customizable items
}

export interface MenuCategory extends Category {
  items: MenuItem[];
}

export type BadgeType = {
  text: string;
  color: string;
};

export interface ModifierGroup {
  id: string;
  name: string; // e.g. "Size"
  required: boolean;
  minSelect: number;
  maxSelect: number;
  options: ModifierOption[];
}

export interface ModifierOption {
  id: string;
  name: string; // e.g. "Half", "Full"
  additionalPrice: number; // added to basePrice
}

export type VariantOption = ModifierOption;
