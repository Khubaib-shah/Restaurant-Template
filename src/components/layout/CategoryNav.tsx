import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
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

  return (
    <nav
      id="category-nav-bar"
      className="sticky bg-brand-primary h-12 w-full z-90 border-t border-white/10 shadow-md select-none"
      style={{
        top: '0px'
      }}
    >
      <div
        ref={navContainerRef}
        id="category-nav-scroll"
        className="h-full mx-auto flex items-center overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex h-full min-w-max px-4">
          {categories.map((category) => {
            const isActive = category.slug === activeCategorySlug;
            return (
              <button
                key={category.id}
                ref={isActive ? activeTabRef : null}
                id={`nav-tab-${category.slug}`}
                onClick={() => handleTabClick(category.slug)}
                className={`relative px-4 md:px-5 h-full flex items-center justify-center text-xs md:text-[13px] uppercase font-semibold tracking-wider text-white transition-all cursor-pointer hover:bg-white/10 ${
                  isActive ? 'text-white font-extrabold' : 'text-gray-300 font-medium'
                }`}
              >
                {category.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    id="active-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
