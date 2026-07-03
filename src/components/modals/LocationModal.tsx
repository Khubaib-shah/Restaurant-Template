import React, { useState, useEffect } from 'react';
import { X, Search, MapPin, Check } from 'lucide-react';
import { useRestaurant } from '../../context/RestaurantContext';
import { motion, AnimatePresence } from 'motion/react';

export const LocationModal: React.FC = () => {
  const {
    currentLocation,
    setLocation,
    isLocationModalOpen,
    setIsLocationModalOpen
  } = useRestaurant();

  const [search, setSearch] = useState('');

  const areas = [
    'Clifton',
    'DHA Phase 1-8',
    'Gulshan-e-Iqbal',
    'Bahadurabad',
    'PECHS',
    'North Nazimabad',
    'KDA Scheme 1',
    'Askari IV',
    'Defence View',
    'Gulistan-e-Johar',
    'Malir Cantt',
    'Sindhi Muslim Society (SMCHS)'
  ];

  // Reset search when modal opens/closes
  useEffect(() => {
    if (isLocationModalOpen) {
      setSearch('');
    }
  }, [isLocationModalOpen]);

  // Trap Escape to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLocationModalOpen) {
        setIsLocationModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLocationModalOpen, setIsLocationModalOpen]);

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectArea = (area: string) => {
    setLocation(
      'Karachi',
      area,
    );
    setIsLocationModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isLocationModalOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLocationModalOpen(false)}
            className="fixed inset-0 z-[160] bg-black/60 backdrop-blur-[2px] select-none"
          />

          {/* Modal Centered/Drawer Container */}
          <div className="fixed inset-0 z-[170] flex items-end md:items-center justify-center p-0 md:p-4 pointer-events-none select-none">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="bg-background-card w-full md:max-w-[440px] max-h-[80vh] md:max-h-[70vh] p-0 rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden text-text-primary"
            >
              {/* Header */}
              <div className="px-2 md:px-5 py-4 border-b border-brand-primary/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-primary/10 p-2 rounded-full text-brand-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium md:font-extrabold uppercase tracking-wider text-text-primary">
                      Select Delivery Area
                    </h3>
                    <p className="text-[11px] text-text-secondary md:font-semibold leading-none mt-0.5 uppercase tracking-wide">
                      Currently serving Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsLocationModalOpen(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-text-secondary hover:text-gray-600 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search bar */}
              <div className="px-2 md:px-5 py-3 border-b border-brand-primary/5 shrink-0 relative flex items-center">
                <Search size={16} className="absolute left-8 text-text-secondary pointer-events-none" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value.replace(/[^a-zA-Z0-9\s,\-]/g, ''))}
                  placeholder="Search your area, town, or phase..."
                  className="w-full h-10 bg-brand-primary/5/50 hover:bg-brand-primary/5 border border-gray-200 focus:border-brand-primary focus:bg-background-card pl-10 pr-4 rounded-lg focus:outline-none text-xs md:text-sm font-medium transition-colors"
                />
              </div>

              {/* Area List scroll container */}
              <div className="p-4 overflow-y-auto max-h-[40vh] md:max-h-[30vh] divide-y divide-brand-primary/5 no-scrollbar">
                {filteredAreas.length > 0 ? (
                  filteredAreas.map((area) => {
                    const isSelected = area === currentLocation.area;

                    return (
                      <button
                        key={area}
                        onClick={() => handleSelectArea(area)}
                        className={`w-full py-3 px-3 rounded-lg flex items-center justify-between text-left transition-all cursor-pointer ${isSelected
                          ? 'bg-brand-primary/5 text-brand-primary font-bold'
                          : 'hover:bg-brand-primary/5 text-gray-700'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <MapPin size={15} className={isSelected ? 'text-brand-primary' : 'text-text-secondary'} />
                          <span className="text-[13px]">{area}</span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-sm shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })
                ) : (
                  <div className="py-12 text-center text-text-secondary font-medium text-xs md:text-sm">
                    No matching areas found in Karachi.
                  </div>
                )}
              </div>

              {/* Notice text */}
              <div className="bg-brand-primary/5 p-4 pb-8 border-t border-brand-primary/10 text-center text-[10px] text-text-secondary font-semibold uppercase shrink-0">
                Order delivery will take approximately 45 minutes
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
