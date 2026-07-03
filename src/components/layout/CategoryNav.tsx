import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu, ChevronRight } from 'lucide-react';
import { Category } from '../../types/menu';

interface CategoryNavProps {
  categories: Category[];
  activeCategorySlug: string;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategorySlug
}) => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // Smoothly scroll the category tabs bar so that the active category is visible/centered
  useEffect(() => {
    if (activeTabRef.current && navContainerRef.current) {
      const container = navContainerRef.current;
      const tab = activeTabRef.current;

      const containerWidth = container.offsetWidth;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;

      const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategorySlug]);

  const handleTabClick = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      // Header 64px + CategoryNav 48px + 12px margin buffer
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNextCategory = () => {
    if (categories.length === 0) return;
    const currentIndex = categories.findIndex((category) => category.slug === activeCategorySlug);
    // Find the next index, wrapping around to the start if on the last category
    const nextIndex = currentIndex !== -1 ? (currentIndex + 1) % categories.length : 0;
    const nextCategory = categories[nextIndex];
    if (nextCategory) {
      handleTabClick(nextCategory.slug);
    }
  };

  return (
    <div
      id="category-nav-wrapper"
      className={`sticky w-full transition-all duration-200 ${isBottomSheetOpen ? 'z-[160]' : 'z-50'}`}
      style={{
        top: '0px'
      }}
    >
      <nav
        id="category-nav-bar"
        className="bg-brand-primary h-12 w-full border-t border-white/10 shadow-md select-none flex items-center justify-between"
      >
        {/* Left Side: Hamburger Menu Button to open bottom sheet */}
        <button
          id="category-hamburger-btn"
          onClick={() => setIsBottomSheetOpen(true)}
          className="h-full px-4 text-text-inverse hover:bg-background-card/10 active:scale-95 transition-all flex items-center justify-center border-r border-white/10 cursor-pointer"
          aria-label="Open Category List Bottom Sheet"
        >
          <Menu size={18} className="text-inverse" />
        </button>

        {/* Center: Scrollable Categories list */}
        <div
          ref={navContainerRef}
          id="category-nav-scroll"
          className="flex-1 h-full flex items-center overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex h-full min-w-max">
            {categories.map((category) => {
              const isActive = category.slug === activeCategorySlug;
              return (
                <button
                  key={category.id}
                  ref={isActive ? activeTabRef : null}
                  id={`nav-tab-${category.slug}`}
                  onClick={() => handleTabClick(category.slug)}
                  className={`relative px-4 md:px-5 h-full flex items-center justify-center text-[10px] sm:text-xs md:text-[13px] uppercase md:font-semibold tracking-wider text-text-inverse transition-all cursor-pointer hover:bg-background-card/10 ${isActive ? 'text-inverse font-semibold' : 'text-text-muted'
                    }`}
                >
                  {category.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      id="active-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-background-card rounded-t-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Next Category Action Button (Right Arrow) */}
        <button
          id="category-arrow-btn"
          onClick={handleNextCategory}
          className="h-full px-4 text-text-inverse hover:bg-background-card/10 active:scale-95 transition-all flex items-center justify-center border-l border-white/10 cursor-pointer"
          aria-label="Go to next category"
        >
          <ChevronRight
            size={18}
            className="text-inverse transition-transform active:translate-x-1 duration-200"
          />
        </button>
      </nav>

      {/* Beautiful Categories Bottom Sheet Overlay */}
      <AnimatePresence>
        {isBottomSheetOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[170] backdrop-blur-[2.5px]"
              onClick={() => setIsBottomSheetOpen(false)}
            />

            {/* Bottom Sheet Panel Container */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              id="category-bottom-sheet-panel"
              className="fixed bottom-0 left-0 right-0 bg-background-card rounded-t-[28px] shadow-[0_-10px_40px_rgba(0,0,0,0.18)] z-[180] pb-8 pt-4 px-2 select-none max-h-[80vh] md:max-h-[60vh] flex flex-col border-t border-brand-primary/10"
            >
              {/* Drag Handle aesthetic indicator */}
              <div className="w-12 h-1 bg-gray-200/90 rounded-full mx-auto mb-4 shrink-0" />

              {/* Sheet Title */}
              <div className="flex justify-between items-center mb-5 pb-2 border-b border-brand-primary/10 shrink-0">
                <h3 className="text-xs text-text-secondary">
                  Select Menu Category
                </h3>
                <button
                  onClick={() => setIsBottomSheetOpen(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-text-secondary hover:text-gray-600 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Categorized Options List - Scrollable */}
              <div className="overflow-y-auto no-scrollbar flex-1 pb-4">
                <div className="flex flex-col gap-2">
                  {categories.map((category) => {
                    const isActive = category.slug === activeCategorySlug;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleTabClick(category.slug);
                          setIsBottomSheetOpen(false);
                        }}
                        className={`w-full py-3.5 px-5 rounded-xl text-[10px] sm:text-xs md:text-sm transition-all border text-left cursor-pointer flex items-center justify-between ${isActive
                          ? 'bg-brand-primary text-text-inverse border-brand-primary shadow-lg shadow-brand-primary/25 font-semibold'
                          : 'bg-brand-primary/5 text-gray-700 hover:bg-gray-100 border-gray-200/60'
                          }`}
                      >
                        <span>{category.name}</span>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-background-card shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

