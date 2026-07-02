import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  logoSize?: 'sm' | 'md' | 'lg';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className = '',
  logoSize = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16 text-[10px] p-1.5 inset-1.5',
    md: 'w-24 h-24 text-[13px] p-2 inset-2',
    lg: 'w-32 h-32 text-[16px] p-3 inset-3'
  };

  return (
    <div className={`w-full h-full bg-gray-100 flex items-center justify-center select-none ${className}`}>
      {/* Centered brand logo circle */}
      <div className={`${logoSize === 'sm' ? 'w-16 h-16' : logoSize === 'lg' ? 'w-32 h-32' : 'w-24 h-24'} rounded-full bg-white shadow-sm border border-gray-200/50 flex items-center justify-center relative overflow-hidden`}>
        {/* Dark green hexagon */}
        <div
          className="absolute bg-brand-primary flex items-center justify-center"
          style={{
            top: logoSize === 'sm' ? '6px' : logoSize === 'lg' ? '12px' : '8px',
            bottom: logoSize === 'sm' ? '6px' : logoSize === 'lg' ? '12px' : '8px',
            left: logoSize === 'sm' ? '6px' : logoSize === 'lg' ? '12px' : '8px',
            right: logoSize === 'sm' ? '6px' : logoSize === 'lg' ? '12px' : '8px',
            clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)'
          }}
        >
          {/* Crimson accent line inside */}
          <div
            className="absolute inset-[1px] border border-brand-accent/50"
            style={{
              clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)'
            }}
          />
          {/* Serif elegant text */}
          <span
            className="font-serif font-extrabold tracking-widest text-white mt-0.5"
            style={{
              fontSize: logoSize === 'sm' ? '8px' : logoSize === 'lg' ? '14px' : '11px',
              fontFamily: "'Inter', 'Georgia', 'Times New Roman', serif"
            }}
          >
            GHALIB
          </span>
        </div>
      </div>
    </div>
  );
};
