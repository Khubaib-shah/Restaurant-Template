import React from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config } = useRestaurant();

  return (
    <footer id="app-footer" className="bg-white border-t border-gray-200/80 pt-10 pb-24 mt-16 select-none">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* SEO Text Block */}
        {config.seoText && (
          <div
            id="seo-footer-block"
            className="bg-white border border-gray-200/60 rounded-xl p-5 mb-10 text-[13px] leading-relaxed text-gray-600 shadow-sm animate-fade-in"
          >
            {config.seoText}
          </div>
        )}

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-8">
          
          {/* Column 1: Logo */}
          <div id="footer-col-logo" className="flex flex-col items-center md:items-start">
            <div className="w-[180px] h-auto select-none bg-brand-primary p-3 rounded-lg border border-gray-100 flex items-center justify-center shadow-md">
              {/* Green hexagonal/slanted branding banner layout */}
              <span className="text-white font-extrabold text-base tracking-[0.2em] uppercase">
                {config.name}
              </span>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div id="footer-col-contact" className="text-center md:text-left space-y-2.5">
            <h4 className="text-base font-extrabold text-gray-900">{config.name}</h4>
            <div className="text-[13px] text-gray-600 space-y-2">
              <p className="flex items-center justify-center md:justify-start gap-1.5">
                <span className="font-bold text-gray-800">Phone:</span>
                <a href={`tel:${config.contact.phone}`} className="hover:text-brand-primary transition-colors">
                  {config.contact.phone}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-1.5">
                <span className="font-bold text-gray-800">Email:</span>
                <a href={`mailto:${config.contact.email}`} className="hover:text-brand-primary transition-colors">
                  {config.contact.email}
                </a>
              </p>
              <p className="flex items-start justify-center md:justify-start gap-1.5 leading-relaxed">
                <span className="font-bold text-gray-800 shrink-0">Address:</span>
                <span>{config.contact.address}</span>
              </p>
            </div>
          </div>

          {/* Column 3: Social Links & Policies */}
          <div id="footer-col-social" className="flex flex-col items-center md:items-end space-y-4">
            <div className="space-y-2 text-center md:text-right">
              <span className="block text-sm font-bold text-gray-800">Follow Us:</span>
              <div className="flex items-center justify-center md:justify-end gap-3 pt-1">
                {config.social.facebook && (
                  <a
                    href={config.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/15 flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={18} fill="currentColor" className="ml-0.5" />
                  </a>
                )}
                {config.social.instagram && (
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]/10 text-[#ee2a7b] hover:opacity-90 flex items-center justify-center transition-opacity shadow-sm"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-[13px] text-gray-500 pt-2">
              <a href="#" className="hover:underline hover:text-brand-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="hover:underline hover:text-brand-primary transition-colors">
                Faqs
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright banner */}
        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-500 font-medium">
          <p>
            © 2026 Powered by <span className="font-semibold text-gray-800">khubaib shah</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
