import { restaurants } from "../restaurants";

const DOMAIN_MAP: Record<string, string> = {
  "ghalib.local": "ghalib",
  "pizza.local": "pizza",
  "demo.local": "demo",
  "ghalib.thekhubaib.me": "ghalib",
  "pizza.thekhubaib.me": "pizza",
  "demo.thekhubaib.me": "demo",
};

export function getRestaurantSlug() {
  const host = window.location.hostname;

  return DOMAIN_MAP[host] ?? "ghalib";
}

const slug = getRestaurantSlug() as keyof typeof restaurants;

export const restaurantConfig = restaurants[slug] || restaurants["demo"];
