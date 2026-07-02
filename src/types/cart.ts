export interface CartItem {
  id: string;                      // unique: itemId + variantSelections hash
  menuItemId: string;
  name: string;
  imageUrl?: string;
  quantity: number;
  unitPrice: number;               // discountedPrice + variant additions
  originalUnitPrice: number;       // basePrice equivalent
  variantSelections?: VariantSelection[];
  note?: string;
}

export interface VariantSelection {
  groupId: string;
  groupName: string;
  optionId: string;
  optionName: string;
  additionalPrice: number;
}

export interface CartState {
  items: CartItem[];
  promoCode: string | null;
  promoDiscount: number;
}
