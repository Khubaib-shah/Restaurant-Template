import { restaurants } from "../restaurants";

const DOMAIN_MAP: Record<string, string> = {
  "ghalib.local": "ghalib",
  "pizza.local": "pizza",
  "demo.local": "demo",
  localhost: "demo",
  "127.0.0.1": "demo",
  "[::1]": "demo",
  "ghalib.thekhubaib.me": "ghalib",
  "pizza.thekhubaib.me": "pizza",
  "demo.thekhubaib.me": "demo",
};

export function getRestaurantSlug() {
  const params = new URLSearchParams(window.location.search);
  const restaurantOverride = params.get("restaurant");

  if (restaurantOverride && restaurantOverride in restaurants) {
    return restaurantOverride;
  }

  const host = window.location.hostname;
  return DOMAIN_MAP[host] ?? "demo";
}

const slug = getRestaurantSlug() as keyof typeof restaurants;

export const restaurantConfig = restaurants[slug] || restaurants["demo"];
