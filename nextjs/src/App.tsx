"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRestaurant } from "./context/RestaurantContext";
import { useCart } from "./context/CartContext";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { getRestaurantMenu } from "./lib/getRestaurantMenu";
import { getMenuByCategory } from "./lib/getMenuByCategory";
import { MenuCategory, MenuItem } from "./types/menu";
import { CompleteAppSkeleton } from "./components/skeletons/SectionSkeletons";

// Import layout components
import { AnnouncementBar } from "./components/layout/AnnouncementBar";
import { Header } from "./components/layout/Header";
import { CategoryNav } from "./components/layout/CategoryNav";
import { Footer } from "./components/layout/Footer";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";

// Import section components
import { HeroBanner } from "./components/sections/HeroBanner";
import { SearchBar } from "./components/sections/SearchBar";
import { PromoBanner } from "./components/sections/PromoBanner";
import { PopularItems } from "./components/sections/PopularItems";
import { MenuSection } from "./components/sections/MenuSection";

// Import cart components
import { CartDrawer } from "./components/cart/CartDrawer";

// Import modals
import { LocationModal } from "./components/modals/LocationModal";
import { ItemModal } from "./components/menu/ItemModal";
import { CheckoutView } from "./components/cart/CheckoutView";

import { Search } from "lucide-react";

interface RestaurantAppContentProps {
  initialItemId?: string;
}

const RestaurantAppContent: React.FC<RestaurantAppContentProps> = ({
  initialItemId,
}) => {
  const { config, setIsLocationModalOpen } = useRestaurant();
  const { isCheckoutActive } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [customisingItem, setCustomisingItem] = useState<MenuItem | null>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Render immediately — no artificial delay
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isLoading) {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = config.theme.colors.background.page;
      return;
    }

    if (isCheckoutActive) {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = config.theme.colors.background.card;
      return;
    }

    const bg = bgRef.current;
    if (!bg) return;

    const background = config.theme.assets.background;

    if (background.mode === "image" && background.image) {
      bg.style.backgroundImage = `url(${background.image})`;
      bg.style.backgroundColor = "";
    } else {
      bg.style.backgroundImage = "none";
      bg.style.backgroundColor = config.theme.colors.background.page;
    }
  }, [config, isLoading, isCheckoutActive]);

  useEffect(() => {
    if (!initialItemId || customisingItem) return;

    const itemToOpen = getRestaurantMenu(config.slug).menuItems.find(
      (item) => item.id === initialItemId,
    );

    if (itemToOpen) {
      setCustomisingItem(itemToOpen);
    }
  }, [initialItemId, config.slug, customisingItem]);

  const { categories: menuCategories, menuItems } = useMemo(() => {
    return getRestaurantMenu(config.slug);
  }, [config.slug]);

  // List of category slugs for scroll spy
  const categorySlugs = useMemo(() => {
    if (isLoading) return [];
    return menuCategories.map((cat) => cat.slug);
  }, [isLoading, menuCategories]);

  const activeSpySlug = useScrollSpy(categorySlugs);
  const activeCategorySlug = activeSpySlug || menuCategories[0]?.slug || "";

  const menuByCategory = useMemo<MenuCategory[]>(() => {
    return getMenuByCategory(menuCategories, menuItems);
  }, [menuCategories, menuItems]);

  const filteredItemsByCategory = useMemo(() => {
    const result: Record<string, MenuItem[]> = {};
    const cleanQuery = searchQuery.trim().toLowerCase();

    menuByCategory.forEach((category) => {
      result[category.id] = [];
    });

    menuByCategory.forEach((category) => {
      category.items.forEach((item) => {
        const matchesSearch =
          !cleanQuery ||
          item.name.toLowerCase().includes(cleanQuery) ||
          (item.description &&
            item.description.toLowerCase().includes(cleanQuery));

        if (matchesSearch) {
          result[category.id].push(item);
        }
      });
    });

    return result;
  }, [menuByCategory, searchQuery]);

  const hasMatchingItems = useMemo(() => {
    return Object.values(filteredItemsByCategory).some(
      (list) => list.length > 0,
    );
  }, [filteredItemsByCategory]);

  const handleOpenCustomiser = (item: MenuItem) => {
    setCustomisingItem(item);
    window.history.pushState(null, "", `/menu/${item.id}`);
  };

  const handleCloseCustomiser = () => {
    setCustomisingItem(null);
    if (pathname?.startsWith("/menu/") || window.location.pathname?.startsWith("/menu/")) {
      window.history.replaceState(null, "", "/");
    }
  };

  // SEO is handled server-side via Next.js generateMetadata in each page/layout.

  if (isLoading) {
    return <CompleteAppSkeleton />;
  }

  return (
    <>
      <div id="bg" ref={bgRef}></div>{" "}
      <div className="min-h-screen bg-transparent text-text-primary flex flex-col font-sans">
        <AnnouncementBar />
        <Header />

        {isCheckoutActive ? (
          <CheckoutView />
        ) : (
          <>
            <HeroBanner />
            <CategoryNav
              categories={menuCategories}
              activeCategorySlug={activeCategorySlug}
            />
            <SearchBar query={searchQuery} setQuery={setSearchQuery} />
            <PromoBanner />
            {!searchQuery && (
              <PopularItems
                items={menuItems}
                onCustomizeClick={handleOpenCustomiser}
              />
            )}

            <main
              id="main-content-layout"
              className="flex-1 container max-w-[1220px] mx-auto select-none px-2 sm:px-4 md:px-6 lg:px-8 py-6"
            >
              <div className="flex gap-8 items-start">
                <div
                  id="menu-sections-column"
                  className="flex-1 min-w-0 space-y-6"
                >
                  {hasMatchingItems ? (
                    menuByCategory.map((category) => {
                      const categoryItems =
                        filteredItemsByCategory[category.id] || [];
                      if (categoryItems.length === 0) return null;

                      return (
                        <MenuSection
                          key={category.id}
                          category={category}
                          items={categoryItems}
                          onCustomizeClick={handleOpenCustomiser}
                        />
                      );
                    })
                  ) : (
                    <div
                      id="search-empty-state"
                      className="py-16 px-6 text-center space-y-4 max-w-md mx-auto"
                    >
                      <div className="w-16 h-16 rounded-full divide-brand-primary/5 flex items-center justify-center text-text-muted border border-brand-primary/15 mx-auto">
                        <Search size={24} />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-text-primary">
                          No items found
                        </h3>
                        <p className="text-xs text-text-muted max-w-[240px] leading-relaxed mx-auto">
                          We couldn't find anything matching "{searchQuery}".
                          Try searching with different keywords.
                        </p>
                      </div>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="px-5 py-2 bg-brand-primary  text-text-inverse text-xs font-bold uppercase tracking-wider rounded-lg"
                      >
                        Clear Search
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </>
        )}

        <Footer />
        <MobileBottomBar />
        <CartDrawer />
        <LocationModal />
        <ItemModal
          item={customisingItem}
          isOpen={customisingItem !== null}
          onClose={handleCloseCustomiser}
        />
      </div>
    </>
  );
};

// Providers are mounted once in app/layout.tsx — do NOT wrap again here
export default function App({ initialItemId }: { initialItemId?: string }) {
  return <RestaurantAppContent initialItemId={initialItemId} />;
}
