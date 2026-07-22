import { restaurants } from "../restaurants";

const DOMAIN_MAP: Record<string, string> = {
  "ghalib.local": "ghalib",
  "pizza.local": "pizza",
  "demo.local": "demo",
  "azfoodcorner.local": "azfoodcorner",
  "marhababbq.local": "marhababbq",
  "marhababbq.thekhubaib.me": "marhababbq",
  localhost: "marhababbq",
  "127.0.0.1": "marhababbq",
  "[::1]": "marhababbq",
  "ghalib.thekhubaib.me": "ghalib",
  "pizza.thekhubaib.me": "pizza",
  "demo.thekhubaib.me": "demo",
};

export function getRestaurantSlug(): string {
  // SSR guard — on the server, return a safe default
  if (typeof window === "undefined") {
    console.log("[SSR] getRestaurantSlug returning 'marhababbq'");
    return "marhababbq";
  }

  const params = new URLSearchParams(window.location.search);
  const restaurantOverride = params.get("restaurant");

  if (restaurantOverride && restaurantOverride in restaurants) {
    console.log(`[CSR] getRestaurantSlug override returning '${restaurantOverride}'`);
    return restaurantOverride;
  }

  const host = window.location.hostname;
  const slug = DOMAIN_MAP[host] ?? "marhababbq";
  console.log(`[CSR] getRestaurantSlug host='${host}' returning '${slug}'`);
  return slug;
}

// Called lazily in RestaurantContext — not at module level
export function getRestaurantConfig() {
  const slug = getRestaurantSlug() as keyof typeof restaurants;
  const config = restaurants[slug] || restaurants["demo"];
  console.log(`[CONFIG] resolved slug='${slug}' to config name='${config.name}'`);
  return config;
}
