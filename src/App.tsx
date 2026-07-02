import React, { useState, useMemo, useEffect } from 'react';
import { RestaurantProvider, useRestaurant } from './context/RestaurantContext';
import { CartProvider, useCart } from './context/CartContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import { categories, menuItems } from './data/mock-menu';
import { MenuItem } from './types/menu';
import { CompleteAppSkeleton } from './components/skeletons/SectionSkeletons';

// Import layout components
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { CategoryNav } from './components/layout/CategoryNav';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';

// Import section components
import { HeroBanner } from './components/sections/HeroBanner';
import { SearchBar } from './components/sections/SearchBar';
import { PromoBanner } from './components/sections/PromoBanner';
import { PopularItems } from './components/sections/PopularItems';
import { MenuSection } from './components/sections/MenuSection';
import { CategoryDivider } from './components/sections/CategoryDivider';

// Import cart components
import { CartSidebar } from './components/cart/CartSidebar';
import { CartDrawer } from './components/cart/CartDrawer';

// Import modals
import { LocationModal } from './components/modals/LocationModal';
import { ItemModal } from './components/menu/ItemModal';
import { CheckoutView } from './components/cart/CheckoutView';

import { Search, ShoppingBag } from 'lucide-react';

const RestaurantAppContent: React.FC = () => {
  const { config } = useRestaurant();
  const { isCheckoutActive } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [customisingItem, setCustomisingItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isLoading) {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#FAF9F6";
      return;
    }

    if (isCheckoutActive) {
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#FFFFFF";
      return;
    }

    const background = config.theme.assets.background;

    if (background.mode === "image" && background.image) {
      body.style.backgroundImage = `url(${background.image})`;
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundPosition = "center";
      body.style.backgroundAttachment = "fixed";
    } else {
      body.style.backgroundImage = "none";
      body.style.backgroundColor =
        config.theme.colors.background.page;
    }
  }, [config, isLoading, isCheckoutActive]);


  // List of category slugs for scroll spy
  const categorySlugs = useMemo(() => {
    if (isLoading) return [];
    return categories.map((cat) => cat.slug);
  }, [isLoading]);

  // Use the native IntersectionObserver scroll spy
  const activeSpySlug = useScrollSpy(categorySlugs);
  const activeCategorySlug = activeSpySlug || categories[0]?.slug || '';

  // Filter items based on query in real-time
  const filteredItemsByCategory = useMemo(() => {
    const result: Record<string, MenuItem[]> = {};

    // Initialize records
    categories.forEach((cat) => {
      result[cat.id] = [];
    });

    const cleanQuery = searchQuery.trim().toLowerCase();

    menuItems.forEach((item) => {
      const matchesSearch = !cleanQuery ||
        item.name.toLowerCase().includes(cleanQuery) ||
        (item.description && item.description.toLowerCase().includes(cleanQuery));

      if (matchesSearch) {
        if (!result[item.categoryId]) {
          result[item.categoryId] = [];
        }
        result[item.categoryId].push(item);
      }
    });

    return result;
  }, [searchQuery]);

  // Check if overall search resulted in 0 items matching
  const hasMatchingItems = useMemo(() => {
    return Object.values(filteredItemsByCategory).some((list) => (list as MenuItem[]).length > 0);
  }, [filteredItemsByCategory]);

  const handleOpenCustomiser = (item: MenuItem) => {
    setCustomisingItem(item);
  };

  const handleCloseCustomiser = () => {
    setCustomisingItem(null);
  };

  if (isLoading) {
    return <CompleteAppSkeleton />;
  }

  return (
    <div id="ghalib-app-root" className="min-h-screen bg-transparent text-gray-900 flex flex-col font-sans">

      {/* 1. Announcement notification bar strip */}
      <AnnouncementBar />

      {/* 2. Top primary navigation header (brand logo + delivery locations + cart toggles) */}
      <Header />

      {isCheckoutActive ? (
        <CheckoutView />
      ) : (
        <>
          {/* 3. Sliding promotional hero sliders */}
          <HeroBanner />

          {/* 4. Active category scrolling tabs bar */}
          <CategoryNav categories={categories} activeCategorySlug={activeCategorySlug} />

          {/* 5. Center-aligned real-time product search container */}
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />

          {/* 6. Active promotion discount strips */}
          <PromoBanner />

          {/* 7. Signature Dishes & Best Sellers Carousel row (only show if not searching or if search returns matches) */}
          {!searchQuery && (
            <PopularItems items={menuItems} onCustomizeClick={handleOpenCustomiser} />
          )}

          {/* 8. Main Body Grid: Category Items Lists */}
          <main id="main-content-layout" className="flex-1 max-w-[1280px] w-full mx-auto px-2 sm:px-4 md:px-8 py-4 select-none">
            <div className="flex gap-8 items-start">

              {/* Left: Food Section Blocks */}
              <div id="menu-sections-column" className="flex-1 min-w-0 space-y-6">
                {hasMatchingItems ? (
                  categories.map((category) => {
                    const categoryItems = filteredItemsByCategory[category.id] || [];
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
                  /* High fidelity empty search display */
                  <div
                    id="search-empty-state"
                    className="py-16 px-6 text-center bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4 max-w-md mx-auto"
                  >
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 mx-auto">
                      <Search size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-gray-800">No items found</h3>
                      <p className="text-xs text-gray-400 max-w-[240px] leading-relaxed mx-auto">
                        We couldn't find any dishes matching "{searchQuery}". Try adjusting your keywords.
                      </p>
                    </div>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-5 py-2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg"
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

      {/* 9. Visual footer section blocks */}
      <Footer />

      {/* 10. Mobile Bottom Float Bar Actions */}
      <MobileBottomBar />

      {/* 11. Sliding mobile cart drawers */}
      <CartDrawer />

      {/* 12. Modal: Karachi delivery neighborhood selections */}
      <LocationModal />

      {/* 13. Modal: Complex product variants customiser drawer */}
      <ItemModal
        item={customisingItem}
        isOpen={customisingItem !== null}
        onClose={handleCloseCustomiser}
      />

    </div>
  );
};

export default function App() {
  return (
    <RestaurantProvider>
      <CartProvider>
        <RestaurantAppContent />
      </CartProvider>
    </RestaurantProvider>
  );
}
