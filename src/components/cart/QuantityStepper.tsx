import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  size?: 'sm' | 'md';
}

export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  size = 'md'
}) => {
  const btnSize = size === 'sm' ? 'w-7 h-7' : 'w-8 h-8';
  const iconSize = size === 'sm' ? 12 : 14;
  const isOne = quantity === 1;

  return (
    <div className="flex items-center gap-2 select-none">
      <button
        onClick={onDecrement}
        className={`${btnSize} rounded-full border border-gray-200 hover:border-gray-300 bg-white flex items-center justify-center transition-all cursor-pointer ${
          isOne
            ? 'text-red-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200'
            : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50 active:bg-gray-100'
        }`}
        aria-label={isOne ? "Remove item" : "Decrease quantity"}
      >
        {isOne ? (
          <Trash2 size={iconSize} strokeWidth={2.5} />
        ) : (
          <Minus size={iconSize} strokeWidth={2.5} />
        )}
      </button>
      
      <span className="font-extrabold text-sm text-gray-900 min-w-[20px] text-center">
        {quantity}
      </span>
      
      <button
        onClick={onIncrement}
        className={`${btnSize} rounded-full bg-brand-primary hover:bg-brand-primary-hover flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer`}
        aria-label="Increase quantity"
      >
        <Plus size={iconSize} strokeWidth={2.5} />
      </button>
    </div>
  );
};
