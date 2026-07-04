import React, { useState, useEffect, useRef } from "react";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { MenuItem, VariantGroup, VariantOption } from "../../types/menu";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../lib/price";
import { motion, AnimatePresence } from "motion/react";

interface ItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  const { addItem } = useCart();
  const [selections, setSelections] = useState<Record<string, VariantOption[]>>(
    {},
  );
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const modalRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Initialize selections with default required options if any
  useEffect(() => {
    if (item && isOpen) {
      setQuantity(1);
      setNote("");
      setValidationErrors({});

      const initialSelections: Record<string, VariantOption[]> = {};

      item.variants?.forEach((group) => {
        if (group.required && group.options.length > 0) {
          // Pre-select the first option for required groups if minSelect === 1
          if (group.minSelect === 1 && group.maxSelect === 1) {
            initialSelections[group.id] = [group.options[0]];
          } else {
            initialSelections[group.id] = [];
          }
        } else {
          initialSelections[group.id] = [];
        }
      });

      setSelections(initialSelections);
    }
  }, [item, isOpen]);

  // Trap escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!item) return null;

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareUrl = `${window.location.origin}?item=${item.id}`;
    if (navigator.share) {
      navigator
        .share({
          title: item.name,
          text: item.description,
          url: shareUrl,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  const handleOptionSelect = (group: VariantGroup, option: VariantOption) => {
    const currentGroupSelections = selections[group.id] || [];
    const isAlreadySelected = currentGroupSelections.some(
      (o) => o.id === option.id,
    );

    let newSelections: VariantOption[] = [];

    if (group.maxSelect === 1) {
      // Single select
      newSelections = isAlreadySelected ? [] : [option];
    } else {
      // Multi-select
      if (isAlreadySelected) {
        newSelections = currentGroupSelections.filter(
          (o) => o.id !== option.id,
        );
      } else {
        if (currentGroupSelections.length < group.maxSelect) {
          newSelections = [...currentGroupSelections, option];
        } else {
          // Exceeded max select, replace the first one
          newSelections = [...currentGroupSelections.slice(1), option];
        }
      }
    }

    setSelections({
      ...selections,
      [group.id]: newSelections,
    });

    // Clear validation error if selection meets requirement
    if (newSelections.length >= group.minSelect) {
      const errors = { ...validationErrors };
      delete errors[group.id];
      setValidationErrors(errors);
    }
  };

  // Compute live price based on current selections
  const additionalPrice = (Object.values(selections) as VariantOption[][])
    .reduce((acc, curr) => acc.concat(curr), [] as VariantOption[])
    .reduce((sum, opt) => sum + opt.additionalPrice, 0);

  const unitPrice = item.discountedPrice + additionalPrice;
  const originalUnitPrice = item.basePrice + additionalPrice;
  const totalPrice = unitPrice * quantity;

  const validateSelections = (): boolean => {
    const errors: Record<string, string> = {};
    let isValid = true;

    item.variants?.forEach((group) => {
      const selected = selections[group.id] || [];
      if (group.required && selected.length < group.minSelect) {
        errors[group.id] =
          `Please select at least ${group.minSelect} option(s).`;
        isValid = false;
      }
    });

    setValidationErrors(errors);
    return isValid;
  };

  const handleAddToCart = () => {
    if (!validateSelections()) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorEl = document.getElementById(`group-err-${firstErrorKey}`);
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Prepare selections flat list
    const selectionsList = Object.entries(selections).flatMap(
      ([groupId, options]) => {
        const group = item.variants?.find((g) => g.id === groupId);
        return (options as VariantOption[]).map((opt) => ({
          groupId,
          groupName: group?.name || "",
          optionId: opt.id,
          optionName: opt.name,
          additionalPrice: opt.additionalPrice,
        }));
      },
    );

    // Generate unique cart item ID
    // Format: itemId_optionId1_optionId2...
    const sortedOptionIds = selectionsList
      .map((s) => s.optionId)
      .sort()
      .join("_");
    const cartItemId = sortedOptionIds
      ? `${item.id}_${sortedOptionIds}`
      : item.id;

    addItem({
      id: cartItemId,
      menuItemId: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      quantity,
      unitPrice,
      originalUnitPrice,
      variantSelections: selectionsList,
      note: note.trim() || undefined,
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-[2px] transition-opacity select-none"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 pointer-events-none select-none">
            <motion.div
              ref={modalRef}
              id="customization-drawer"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background-card w-full max-w-[920px] h-[90dvh] md:h-[560px] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden pointer-events-auto text-text-primary"
            >
              {/* Left Side: Product Hero Image & Info Overlay */}
              <div className="relative w-full md:w-1/2 h-[220px] md:h-full shrink-0 overflow-hidden bg-brand-primary/5 border-b md:border-b-0 md:border-r border-brand-primary/10">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-brand-primary/5 text-text-secondary p-6 text-center">
                    <span className="font-extrabold text-sm uppercase tracking-widest">
                      {item.name}
                    </span>
                    <span className="text-xs mt-1 opacity-70">
                      No Image Available
                    </span>
                  </div>
                )}
                {/* Dark Gradient Overlay for optimal legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Text overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-text-inverse pointer-events-none">
                  <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-tight mb-1.5 drop-shadow">
                    {item.name}
                  </h2>
                  {item.description && (
                    <p className="text-[11px] md:text-xs text-gray-200/90 leading-relaxed md:font-medium drop-shadow">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side: Price, Options, Instructions & Custom Stepper/Buttons */}
              <div className="flex-1 flex flex-col min-h-0 min-w-0 bg-background-card">
                {/* Top Bar with Pricing and Action Buttons */}
                <div className="p-5 pb-3.5 border-b border-brand-primary/10 flex items-center justify-between shrink-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl md:text-2xl font-bold text-text-primary">
                      {formatPrice(unitPrice)}
                    </span>
                    {item.basePrice > item.discountedPrice && (
                      <span className="text-xs md:text-sm text-text-secondary line-through font-bold">
                        {formatPrice(originalUnitPrice)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Share Button */}
                    <button
                      onClick={handleShare}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 flex items-center justify-center cursor-pointer transition-colors relative"
                      aria-label="Share Item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                      </svg>
                      {isCopied && (
                        <span className="absolute -top-9 right-0 bg-gray-900 text-text-inverse text-[10px] py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md">
                          Link Copied!
                        </span>
                      )}
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="w-9 h-9 rounded-full bg-brand-primary hover:bg-brand-primary/80 text-text-inverse flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Scrollable Content Body (Variant groups & Notes) */}
                <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-5 overscroll-contain text-sm leading-relaxed scrollbar-thin">
                  {/* Variant choices */}
                  {item.variants && item.variants.length > 0 && (
                    <div className="space-y-5">
                      {item.variants.map((group) => {
                        const selectedOptions = selections[group.id] || [];
                        const isError = !!validationErrors[group.id];

                        return (
                          <div
                            key={group.id}
                            id={`group-${group.id}`}
                            className={`space-y-3 pb-5 border-b border-brand-primary/10 last:border-0 last:pb-0 ${
                              isError ? "animate-shake" : ""
                            }`}
                          >
                            <div className="flex items-baseline justify-between">
                              <div className="flex items-center gap-1.5">
                                <h3 className="font-extrabold text-[13px] text-text-primary uppercase tracking-wide">
                                  {group.name}
                                </h3>
                                {group.required && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-primary/10 text-brand-primary uppercase tracking-wider">
                                    Required
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-text-secondary font-bold uppercase tracking-wider">
                                {group.maxSelect === 1
                                  ? "Select 1"
                                  : `Up to ${group.maxSelect}`}
                              </span>
                            </div>

                            {/* Options List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {group.options.map((option) => {
                                const isSelected = selectedOptions.some(
                                  (o) => o.id === option.id,
                                );

                                return (
                                  <button
                                    key={option.id}
                                    id={`option-${option.id}`}
                                    onClick={() =>
                                      handleOptionSelect(group, option)
                                    }
                                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer text-xs ${
                                      isSelected
                                        ? "border-brand-primary bg-brand-primary/5 text-brand-primary font-bold shadow-sm"
                                        : "border-brand-primary/10 hover:border-gray-200 bg-background-card text-gray-700"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <div
                                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center border ${
                                          isSelected
                                            ? "border-brand-primary"
                                            : "border-brand-primary/25"
                                        }`}
                                      >
                                        {isSelected && (
                                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                        )}
                                      </div>
                                      <span>{option.name}</span>
                                    </div>
                                    {option.additionalPrice > 0 && (
                                      <span className="text-[10px] text-brand-primary font-bold bg-brand-primary/10 px-1.5 py-0.5 rounded">
                                        + {formatPrice(option.additionalPrice)}
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Error Warning */}
                            {isError && (
                              <p
                                id={`group-err-${group.id}`}
                                className="text-[11px] font-bold text-red-600 animate-pulse"
                              >
                                {validationErrors[group.id]}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Special Instructions */}
                  <div className="space-y-2">
                    <label
                      htmlFor="instructions-note"
                      className="text-xs font-bold text-text-secondary uppercase tracking-wider block"
                    >
                      Special Instructions
                    </label>
                    <textarea
                      id="instructions-note"
                      value={note}
                      onChange={(e) =>
                        setNote(
                          e.target.value.replace(
                            /[^a-zA-Z0-9\s.,\-\/#?!()]/g,
                            "",
                          ),
                        )
                      }
                      placeholder="Please enter instructions about this item"
                      className="w-full h-24 p-3 text-xs md:text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-brand-primary/5"
                      maxLength={500}
                    />
                    <div className="text-right text-[10px] text-text-secondary font-semibold uppercase">
                      {note.length} / 500 characters
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Actions (Custom stepper & Add to Order button) */}
                <div className="sticky bottom-0 z-20 px-5 py-4 border-t bg-background-card shadow-[0_-8px_20px_rgba(0,0,0,0.05)] border-brand-primary/10 bg-brand-primary/5/30 flex items-center justify-between gap-3.5 shrink-0">
                  {/* Quantity Stepper */}
                  <div className="flex items-center bg-gray-100/70 border border-gray-200 rounded-xl p-1 w-[115px] justify-between h-[46px] shrink-0">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors cursor-pointer text-text-secondary hover:text-gray-700"
                      aria-label="Reduce quantity"
                    >
                      {quantity === 1 ? (
                        <span className="text-red-500">
                          {/* Trash Can Icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </span>
                      ) : (
                        <Minus size={13} strokeWidth={3} />
                      )}
                    </button>
                    <span className="font-extrabold text-sm select-none text-text-primary">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-brand-primary hover:bg-brand-primary/80 text-text-inverse rounded-full transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} strokeWidth={3} />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    id="add-customised-item-btn"
                    onClick={handleAddToCart}
                    className="flex-1 h-[46px] bg-brand-primary hover:bg-brand-primary/80 text-text-inverse rounded-xl flex items-center justify-center px-3 gap-0.5 sm:gap-1 font-medium md:font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer select-none active:scale-[0.99] min-w-0"
                  >
                    <span className="whitespace-nowrap">
                      {formatPrice(totalPrice)}
                    </span>
                    <span className="opacity-60 font-normal mx-0.5 sm:mx-1">
                      |
                    </span>
                    <span className="whitespace-nowrap inline-flex items-center gap-1">
                      Add
                      <span className="hidden md:inline-flex">to Cart</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        className="shrink-0 text-text-inverse"
                      >
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </motion.span>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
