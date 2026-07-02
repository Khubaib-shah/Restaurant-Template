import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, X } from 'lucide-react';
import { useRestaurant } from '../../context/RestaurantContext';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const { config } = useRestaurant();
  const [placeholderText, setPlaceholderText] = useState('Search for delicious food...');

  useEffect(() => {
    const phrases = [
      'delicious food...',
      'Maash Ki Daal...',
      'Peshawari Karahi...',
      'Beef Seekh Kabab...',
      'Matka Biryani...',
      'Pani Puri...',
      'Mango Lassi...',
      'Kunafa...'
    ];

    let currentPhraseIdx = 0;
    let currentCharIdx = 0;
    let isDeleting = false;
    let timerId: NodeJS.Timeout;

    const tick = () => {
      const fullPhrase = phrases[currentPhraseIdx];
      
      if (!isDeleting) {
        // Typing phase
        const typedText = `Search for ${fullPhrase.substring(0, currentCharIdx + 1)}`;
        setPlaceholderText(typedText);
        currentCharIdx++;

        if (currentCharIdx === fullPhrase.length) {
          isDeleting = true;
          // Hold the full word for 2.5 seconds
          timerId = setTimeout(tick, 2500);
          return;
        }
      } else {
        // Deleting phase
        const typedText = `Search for ${fullPhrase.substring(0, currentCharIdx - 1)}`;
        setPlaceholderText(typedText);
        currentCharIdx--;

        if (currentCharIdx === 0) {
          isDeleting = false;
          currentPhraseIdx = (currentPhraseIdx + 1) % phrases.length;
          // Brief pause before typing next word
          timerId = setTimeout(tick, 400);
          return;
        }
      }

      const speed = isDeleting ? 40 : 85;
      timerId = setTimeout(tick, speed);
    };

    // Start typing cycle
    timerId = setTimeout(tick, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const handleClear = () => {
    setQuery('');
  };

  return (
    <div id="search-section-wrapper" className="w-full flex justify-center px-4 mt-1.5 mb-1 lg:mt-5 lg:mb-1.5 select-none shrink-0">
      <div className="relative w-full max-w-[480px] focus-within:max-w-[750px] h-11 lg:h-12 flex items-center transition-all duration-500 ease-out">
        
        {/* Left Magnifying Glass Icon */}
        <Search size={18} className="absolute left-4 text-brand-primary pointer-events-none opacity-80" />

        {/* The Pill Input */}
        <input
          id="menu-search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholderText}
          className="w-full h-full bg-white pl-11 pr-12 rounded-full border-[1.5px] border-brand-primary focus:border-brand-primary-hover focus:outline-none text-xs lg:text-sm font-medium text-gray-800 placeholder-gray-400 shadow-sm transition-colors"
        />

        {/* Clear (X) Trigger if query exists */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-12 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all cursor-pointer"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}

        {/* Inline Submit / Action Circle bubble */}
        <div className="absolute right-1.5">
          <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-sm select-none">
            <ArrowRight size={16} />
          </div>
        </div>

      </div>
    </div>
  );
};

