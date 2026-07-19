import { Category, MenuItem } from "../types/menu";
import { toKebabCase } from "./toKebabCase";
import {
  categories as defaultCategories,
  menuItems as defaultMenuItems,
  pizzaCategories,
  pizzaItems,
  iceCreamCategories,
  iceCreamItems,
  azFoodCornerCategories,
  azFoodCornerItems,
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
  azfoodcorner: {
    categories: azFoodCornerCategories,
    menuItems: azFoodCornerItems,
  },
  marhababbq: {
    categories: azFoodCornerCategories,
    menuItems: azFoodCornerItems,
  },
  demo: {
    categories: iceCreamCategories,
    menuItems: iceCreamItems,
  },
} as const;

const normalizeRestaurantSlug = (slug: string) =>
  slug.toLowerCase().replace(/[^a-z0-9]+/g, "");

const normalizeCategory = (category: any, index: number): Category => ({
  id: category.id,
  name: category.name,
  slug: category.slug ?? toKebabCase(category.name),
  sortOrder: category.sortOrder ?? index + 1,
  imageUrl: category.imageUrl,
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
  modifierGroups: item.modifierGroups,
  badge: item.badge,
  isAvailable: item.isAvailable ?? true,
  isFeatured: item.isFeatured ?? false,
  dealLayout: item.dealLayout,
  servingNote: item.servingNote,
  pricePrefix: item.pricePrefix,
});

export const getRestaurantMenu = (slug: string) => {
  const normalizedSlug = normalizeRestaurantSlug(slug);
  const source =
    restaurantMenuSources[
      normalizedSlug as keyof typeof restaurantMenuSources
    ] ?? restaurantMenuSources.demo;

  return {
    categories: source.categories.map(normalizeCategory),
    menuItems: source.menuItems.map(normalizeMenuItem),
  };
};
