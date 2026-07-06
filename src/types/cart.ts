export interface CartItem {
  id: string; // unique: itemId + modifierSelections hash
  menuItemId: string;
  name: string;
  imageUrl?: string;
  quantity: number;
  unitPrice: number; // discountedPrice + modifier additions
  originalUnitPrice: number; // basePrice equivalent
  modifierSelections?: ModifierSelection[];
  variantSelections?: ModifierSelection[]; // legacy compatibility
  note?: string;
}

export interface ModifierSelection {
  groupId: string;
  groupName: string;
  optionId: string;
  optionName: string;
  additionalPrice: number;
}

export type VariantSelection = ModifierSelection;

export interface CartState {
  items: CartItem[];
  promoCode: string | null;
  promoDiscount: number;
}
