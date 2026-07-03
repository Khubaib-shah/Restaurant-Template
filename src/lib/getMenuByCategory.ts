import { Category, MenuCategory, MenuItem } from "../types/menu";

export const getMenuByCategory = (
  categories: Category[],
  items: MenuItem[],
): MenuCategory[] => {
  const validCategoryIds = new Set(categories.map((category) => category.id));

  const itemsByCategory = items.reduce<Record<string, MenuItem[]>>(
    (acc, item) => {
      if (!validCategoryIds.has(item.categoryId)) {
        return acc;
      }

      if (!acc[item.categoryId]) {
        acc[item.categoryId] = [];
      }

      acc[item.categoryId].push(item);
      return acc;
    },
    categories.reduce(
      (record, category) => {
        record[category.id] = [];
        return record;
      },
      {} as Record<string, MenuItem[]>,
    ),
  );

  return categories.map((category) => ({
    ...category,
    items: itemsByCategory[category.id] ?? [],
  }));
};
