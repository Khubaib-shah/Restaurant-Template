import { Category, MenuItem } from "../types/menu";
import { toKebabCase } from "./toKebabCase";
import {
  categories as defaultCategories,
  menuItems as defaultMenuItems,
  pizzaCategories,
  pizzaItems,
  iceCreamCategories,
  iceCreamItems,
} from "../data/mock-menu";

const restaurantMenuSources = {
  ghalib: {
    categories: defaultCategories,
    menuItems: defaultMenuItems,
  },
  pizza: {
    categories: pizzaCategories,
    menuItems: pizzaItems,
  },
  demo: {
    categories: iceCreamCategories,
    menuItems: iceCreamItems,
  },
} as const;

const normalizeCategory = (category: any, index: number): Category => ({
  id: category.id,
  name: category.name,
  slug: category.slug ?? toKebabCase(category.name),
  sortOrder: category.sortOrder ?? index + 1,
  bannerStyle: category.bannerStyle ?? "plain",
  description: category.description,
  cardStyle: category.cardStyle,
});

const normalizeMenuItem = (item: any): MenuItem => ({
  id: item.id,
  categoryId: item.categoryId,
  name: item.name,
  description: item.description,
  imageUrl: item.imageUrl,
  basePrice: item.basePrice,
  discountedPrice: item.discountedPrice ?? item.basePrice,
  hasVariants: item.hasVariants ?? false,
  variants: item.variants,
  badge: item.badge,
  isAvailable: item.isAvailable ?? true,
  isFeatured: item.isFeatured ?? false,
  dealLayout: item.dealLayout,
  servingNote: item.servingNote,
  pricePrefix: item.pricePrefix === "From" ? "From" : undefined,
});

export const getRestaurantMenu = (slug: string) => {
  const source = restaurantMenuSources[slug as keyof typeof restaurantMenuSources] ?? restaurantMenuSources.demo;

  return {
    categories: source.categories.map(normalizeCategory),
    menuItems: source.menuItems.map(normalizeMenuItem),
  };
};
