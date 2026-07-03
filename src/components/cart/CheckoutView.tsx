import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trash2,
  MapPin,
  Phone,
  CreditCard,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  FileText,
  Percent,
  Truck,
  Tag,
  Sparkles,
  Bike,
  Check,
  Calendar,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useRestaurant } from '../../context/RestaurantContext';
import { formatPrice } from '../../lib/price';

// Helper function to format Pakistani mobile numbers dynamically
const formatPakistaniPhoneNumber = (value: string): string => {
  // Remove all characters that are not digits or '+'
  let cleaned = value.replace(/[^\d+]/g, '');

  if (cleaned.startsWith('+')) {
    cleaned = '+' + cleaned.substring(1).replace(/\+/g, '');
  } else {
    cleaned = cleaned.replace(/\+/g, '');
  }

  // Check if it starts with '+' or '92'
  if (cleaned.startsWith('+') || cleaned.startsWith('92')) {
    let digitsOnly = cleaned.replace(/\+/g, '');

    if (digitsOnly.startsWith('92')) {
      const rest = digitsOnly.substring(2);
      if (rest.length === 0) {
        return '+92';
      }

      // Strip any leading 0 from the rest (e.g. +92 0314... -> +92 314...)
      let processedRest = rest;
      if (processedRest.startsWith('0')) {
        processedRest = processedRest.substring(1);
      }

      if (processedRest.length <= 3) {
        return `+92 ${processedRest}`;
      } else {
        return `+92 ${processedRest.substring(0, 3)}-${processedRest.substring(3, 10)}`;
      }
    } else {
      // Starts with '+' but not '92' yet (or other digits)
      if (cleaned.startsWith('+0')) {
        cleaned = '+92' + cleaned.substring(2);
        return formatPakistaniPhoneNumber(cleaned);
      }
      return cleaned.substring(0, 16);
    }
  } else {
    // Local format (03xx-xxxxxxx)
    const digitsOnly = cleaned.replace(/\D/g, '');

    // Auto prefix with '0' if they type '3' as the first digit
    let finalDigits = digitsOnly;
    if (finalDigits.startsWith('3') && finalDigits.length > 0) {
      finalDigits = '0' + finalDigits;
    }

    if (finalDigits.length <= 4) {
      return finalDigits;
    } else {
      return `${finalDigits.substring(0, 4)}-${finalDigits.substring(4, 11)}`;
    }
  }
};

// Sanitizer to allow ONLY letters, spaces, dots, dashes, and single quotes in Name (no numbers or HTML/Script tags)
const sanitizeNameInput = (val: string): string => {
  return val.replace(/[^a-zA-Z\s.\-']/g, '');
};

// Sanitizer for delivery address (alphanumeric, spaces, commas, dots, dashes, slashes, hash, colons, semi-colons, parentheses, and newlines)
const sanitizeAddressInput = (val: string): string => {
  return val.replace(/[^a-zA-Z0-9\s.,\-\/#:;()]/g, '');
};

// Sanitizer for nearest landmark
const sanitizeLandmarkInput = (val: string): string => {
  return val.replace(/[^a-zA-Z0-9\s.,\-\/#]/g, '');
};

// Sanitizer for email address (no spaces or unneeded special characters)
const sanitizeEmailInput = (val: string): string => {
  return val.replace(/[^a-zA-Z0-9@._\-+]/g, '');
};

// Sanitizer for delivery instructions
const sanitizeInstructionsInput = (val: string): string => {
  return val.replace(/[^a-zA-Z0-9\s.,\-\/#?!()]/g, '');
};

export const CheckoutView: React.FC = () => {
  const {
    state: cartState,
    subtotal,
    discount,
    tax,
    deliveryFee,
    total,
    itemCount,
    clearCart,
    setIsCheckoutActive
  } = useCart();

  const { config, currentLocation, setIsLocationModalOpen } = useRestaurant();

  // Custom Dropdown & Actions Visibility States
  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const staticActionsRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const [isStaticButtonVisible, setIsStaticButtonVisible] = useState(false);
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);

  // Form Fields State
  const [title, setTitle] = useState('Mr.');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [altMobileNumber, setAltMobileNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [nearestLandmark, setNearestLandmark] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [changeRequest, setChangeRequest] = useState('');

  // Validation & Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Cart list collapse/expand state for items
  const [isItemsExpanded, setIsItemsExpanded] = useState(false);

  // Monitor static action buttons visibility in the viewport
  useEffect(() => {
    const element = staticActionsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStaticButtonVisible(entry.isIntersecting);
      },
      {
        root: null,
        // Trigger as soon as any part of the button container is visible
        threshold: 0,
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, []);

  // Monitor Section 2 visibility in the viewport (for mobile scroll triggers)
  useEffect(() => {
    const element = sectionTwoRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionTwoVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, // Fires as soon as any part of Section 2 enters
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, []);

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else {
      const digits = mobileNumber.replace(/[^\d]/g, '');
      if (digits.startsWith('92')) {
        if (digits.length !== 12) {
          newErrors.mobileNumber = 'Please enter a valid international mobile number (e.g. +92 3xx-xxxxxxx)';
        }
      } else if (digits.startsWith('0')) {
        if (digits.length !== 11) {
          newErrors.mobileNumber = 'Please enter a valid local mobile number (e.g. 03xx-xxxxxxx)';
        }
      } else {
        newErrors.mobileNumber = 'Please enter a valid mobile number (starting with 03 or +92)';
      }
    }

    if (altMobileNumber.trim()) {
      const altDigits = altMobileNumber.replace(/[^\d]/g, '');
      if (altDigits.startsWith('92')) {
        if (altDigits.length !== 12) {
          newErrors.altMobileNumber = 'Please enter a valid international alternate mobile number (e.g. +92 3xx-xxxxxxx)';
        }
      } else if (altDigits.startsWith('0')) {
        if (altDigits.length !== 11) {
          newErrors.altMobileNumber = 'Please enter a valid local alternate mobile number (e.g. 03xx-xxxxxxx)';
        }
      } else {
        newErrors.altMobileNumber = 'Please enter a valid alternate mobile number (starting with 03 or +92)';
      }
    }

    if (!deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Delivery address is required';
    }

    if (emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress.trim())) {
        newErrors.emailAddress = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate high-fidelity api checkout
    setTimeout(() => {
      const generatedId = `GK-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderSuccess(true);
    }, 1500);
  };

  const handleBackToMenu = () => {
    setOrderSuccess(false);
    clearCart();
    setIsCheckoutActive(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (itemCount === 0 && !orderSuccess) {
    return (
      <div className="max-w-md mx-auto py-16 px-6 text-center bg-background-card border border-brand-primary/10 rounded-2xl shadow-sm mt-8 space-y-4">
        <div className="w-16 h-16 rounded-full bg-brand-primary/5 flex items-center justify-center text-text-secondary border border-brand-primary/10 mx-auto">
          <ShoppingBag size={24} />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-800">Your Cart is Empty</h3>
          <p className="text-xs text-text-secondary max-w-[240px] leading-relaxed mx-auto mt-1">
            Add some delicious meals from Ghalib Restaurant before proceeding to checkout.
          </p>
        </div>
        <button
          onClick={() => setIsCheckoutActive(false)}
          className="px-5 py-2.5 bg-brand-primary text-text-inverse text-xs font-bold uppercase tracking-wider rounded-lg transition-transform active:scale-95 cursor-pointer"
        >
          Go Back To Menu
        </button>
      </div>
    );
  }

  // Determine items to display in preview (first 3, or all if expanded)
  const visibleItems = isItemsExpanded ? cartState.items : cartState.items.slice(0, 3);
  const hiddenCount = cartState.items.length - 3;

  return (
    <div id="checkout-view-wrapper" className="w-full max-w-[1200px] mx-auto px-4 py-6 md:py-8 select-none">

      {/* 1. Header Area */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#0D1F18] tracking-tight">
          Checkout
        </h1>

        {/* Delivery Order info block */}
        <div className="border border-gray-150 bg-background-card shadow-sm p-4 rounded-2xl flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center text-[#1A3C2E] shrink-0">
            <Bike className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs md:text-sm text-gray-600 font-medium">This is a</span>
              <span className="bg-[#052E16] text-text-inverse text-[10px] md:text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Delivery Order
              </span>
            </div>
            <p className="text-xs text-text-secondary mt-1">
              Just a last step, please enter your details:
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Dual-Column Content */}
      <form id="checkout-form" onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-6">

        {/* Left Column: Form Details (8/12 width in desktop) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Form Fields Card */}
          <div className="bg-background-card rounded-2xl border border-brand-primary/10 shadow-sm p-5 md:p-6 space-y-4 md:space-y-5">

            {/* Row 1: Title & Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Title
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTitleOpen(!isTitleOpen)}
                    className="h-11 bg-brand-primary hover:bg-brand-primary-hover border border-brand-primary/10 rounded-xl px-4 pr-10 w-full text-text-inverse text-sm font-extrabold flex items-center justify-between cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  >
                    <span>{title}</span>
                    <ChevronDown className={`text-inverse transition-transform duration-200 ${isTitleOpen ? 'rotate-180' : ''}`} size={16} strokeWidth={2.5} />
                  </button>
                  {isTitleOpen && (
                    <>
                      {/* Invisible backdrop overlay to handle clicks outside */}
                      <div className="fixed inset-0 z-40" onClick={() => setIsTitleOpen(false)} />
                      <div className="absolute top-12 left-0 right-0 bg-background-card border border-brand-primary/10 rounded-xl shadow-xl py-1 z-50 overflow-hidden">
                        {['Mr.', 'Ms.', 'Mrs.'].map((val) => (
                          <div
                            key={val}
                            onClick={() => {
                              setTitle(val);
                              setIsTitleOpen(false);
                            }}
                            className={`px-4 py-2.5 text-sm font-bold cursor-pointer transition-colors ${title === val
                              ? 'bg-brand-primary text-text-inverse font-black'
                              : 'text-gray-700 hover:bg-brand-primary/5 hover:text-text-primary'
                              }`}
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div id="field-fullName" className="md:col-span-3">
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Full Name
                  </label>
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wide">
                    *Required
                  </span>
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    const sanitized = sanitizeNameInput(e.target.value);
                    setFullName(sanitized);
                    if (errors.fullName) {
                      setErrors(prev => ({ ...prev, fullName: '' }));
                    }
                  }}
                  placeholder="Full Name"
                  className={`h-11 border ${errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} rounded-xl px-4 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary`}
                />
                {errors.fullName && (
                  <p className="text-[10px] font-bold text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.fullName}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Mobile Number & Alternate Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div id="field-mobileNumber">
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    Mobile Number
                  </label>
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wide">
                    *Required
                  </span>
                </div>
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => {
                    const formatted = formatPakistaniPhoneNumber(e.target.value);
                    setMobileNumber(formatted);
                    if (errors.mobileNumber) {
                      setErrors(prev => ({ ...prev, mobileNumber: '' }));
                    }
                  }}
                  placeholder="03xx-xxxxxxx"
                  className={`h-11 border ${errors.mobileNumber ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} rounded-xl px-4 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary`}
                />
                {errors.mobileNumber && (
                  <p className="text-[10px] font-bold text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.mobileNumber}
                  </p>
                )}
              </div>

              <div id="field-altMobileNumber">
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Alternate Mobile Number
                </label>
                <input
                  type="text"
                  value={altMobileNumber}
                  onChange={(e) => {
                    const formatted = formatPakistaniPhoneNumber(e.target.value);
                    setAltMobileNumber(formatted);
                    if (errors.altMobileNumber) {
                      setErrors(prev => ({ ...prev, altMobileNumber: '' }));
                    }
                  }}
                  placeholder="03xx-xxxxxxx or +92 3xx-xxxxxxx"
                  className={`h-11 border ${errors.altMobileNumber ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} rounded-xl px-4 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary`}
                />
                {errors.altMobileNumber && (
                  <p className="text-[10px] font-bold text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.altMobileNumber}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Delivery Address Block (Custom box with Area linked) */}
            <div id="field-deliveryAddress" className="border border-gray-150 rounded-2xl p-4 bg-background-card space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-700">
                  Delivery Address
                </label>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-wide">
                  *Required
                </span>
              </div>
              <textarea
                value={deliveryAddress}
                onChange={(e) => {
                  const sanitized = sanitizeAddressInput(e.target.value);
                  setDeliveryAddress(sanitized);
                  if (errors.deliveryAddress) {
                    setErrors(prev => ({ ...prev, deliveryAddress: '' }));
                  }
                }}
                placeholder="Enter your complete address"
                className={`border ${errors.deliveryAddress ? 'border-red-400 bg-red-50/20' : 'border-gray-150'} rounded-xl p-3 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary resize-none h-18`}
              />
              {errors.deliveryAddress && (
                <p className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                  <AlertCircle size={10} /> {errors.deliveryAddress}
                </p>
              )}

              {/* Area Quick Selector link */}
              <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-lg p-2.5 flex items-center justify-between text-xs">
                <span className="text-text-secondary font-medium">Selected Neighborhood Area</span>
                <button
                  type="button"
                  onClick={() => setIsLocationModalOpen(true)}
                  className="font-extrabold text-brand-primary uppercase tracking-wide bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/10 px-3 py-1 rounded cursor-pointer transition-colors"
                >
                  {currentLocation.area}
                </button>
              </div>
            </div>

            {/* Row 4: Nearest Landmark & Email Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Nearest Landmark
                </label>
                <input
                  type="text"
                  value={nearestLandmark}
                  onChange={(e) => setNearestLandmark(sanitizeLandmarkInput(e.target.value))}
                  placeholder="any famous place nearby"
                  className="h-11 border border-gray-200 rounded-xl px-4 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary"
                />
              </div>

              <div id="field-emailAddress">
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={emailAddress}
                  onChange={(e) => {
                    const sanitized = sanitizeEmailInput(e.target.value);
                    setEmailAddress(sanitized);
                    if (errors.emailAddress) {
                      setErrors(prev => ({ ...prev, emailAddress: '' }));
                    }
                  }}
                  placeholder="Enter your email"
                  className={`h-11 border ${errors.emailAddress ? 'border-red-400 bg-red-50/20' : 'border-gray-200'} rounded-xl px-4 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary`}
                />
                {errors.emailAddress && (
                  <p className="text-[10px] font-bold text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.emailAddress}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5: Delivery Instructions */}
            <div>
              <label className="text-xs font-bold text-gray-700 block mb-1.5">
                Delivery Instructions
              </label>
              <input
                type="text"
                value={deliveryInstructions}
                onChange={(e) => setDeliveryInstructions(sanitizeInstructionsInput(e.target.value))}
                placeholder="Delivery Instructions"
                className="h-11 border border-gray-200 rounded-xl px-4 w-full text-sm font-semibold focus:outline-none focus:border-brand-primary"
              />
            </div>

          </div>

          {/* Payment Information Card */}
          <div className="space-y-3">
            <h2 className="text-xs md:text-sm font-extrabold text-[#0D1F18] tracking-wide uppercase">
              Payment Information
            </h2>

            <div className="grid grid-cols-2 gap-3.5">

              {/* Cash On Delivery Radio Card */}
              <div
                onClick={() => setPaymentMethod('cod')}
                className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer select-none relative transition-all bg-background-card ${paymentMethod === 'cod'
                  ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary'
                  : 'border-gray-200 hover:border-brand-primary/25'
                  }`}
              >
                {paymentMethod === 'cod' && (
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 bg-brand-primary text-text-inverse rounded-full flex items-center justify-center">
                    <Check size={10} strokeWidth={3} />
                  </div>
                )}
                <div className="w-8 h-8 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center leading-none">
                  Cash on Delivery
                </span>
              </div>

              {/* Online Payment Radio Card */}
              <div
                onClick={() => setPaymentMethod('online')}
                className={`border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer select-none relative transition-all bg-background-card ${paymentMethod === 'online'
                  ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary'
                  : 'border-gray-200 hover:border-brand-primary/25'
                  }`}
              >
                {paymentMethod === 'online' && (
                  <div className="absolute top-2.5 right-2.5 w-4 h-4 bg-brand-primary text-text-inverse rounded-full flex items-center justify-center">
                    <Check size={10} strokeWidth={3} />
                  </div>
                )}
                <div className="flex gap-1">
                  <span className="text-[9px] font-black text-blue-800 bg-blue-100 px-1 py-0.5 rounded leading-none">VISA</span>
                  <span className="text-[9px] font-black text-red-600 bg-red-100 px-1 py-0.5 rounded leading-none font-sans">M/C</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-800 text-center leading-none mt-1">
                  Online Payment
                </span>
              </div>

            </div>
          </div>

          {/* Change Request Card */}
          <div className="space-y-3">
            <h2 className="text-xs md:text-sm font-extrabold text-[#0D1F18] tracking-wide uppercase">
              Change Request
            </h2>

            <div className="flex items-center">
              <div className="h-11 bg-brand-primary/5 border border-r-0 border-gray-200 text-text-secondary text-xs font-bold px-4 flex items-center rounded-l-xl select-none">
                Rs.
              </div>
              <input
                type="text"
                value={changeRequest}
                onChange={(e) => setChangeRequest(e.target.value.replace(/\D/g, ''))}
                placeholder="500"
                className="h-11 border border-gray-200 text-sm font-bold text-gray-800 px-4 w-full focus:outline-none focus:border-brand-primary rounded-r-xl"
              />
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary (5/12 width in desktop, sticky) */}
        <div ref={sectionTwoRef} className="lg:col-span-5 space-y-6">
          <div className="lg:sticky lg:top-24 space-y-5">

            {/* Header Column */}
            <h2 className="hidden lg:block text-xs md:text-sm font-extrabold text-[#0D1F18] tracking-wide uppercase leading-none mb-0.5">
              Order Summary
            </h2>

            {/* Summary Items Box */}
            <div className="bg-background-card rounded-2xl border border-brand-primary/10 shadow-sm p-4 md:p-5 space-y-4">

              {/* Items List */}
              <div className="space-y-3.5">
                {visibleItems.map((item) => {
                  const hasDiscount = item.originalUnitPrice > item.unitPrice;

                  return (
                    <div key={item.id} className="flex items-start gap-3">

                      {/* Image Preview Thumbnail */}
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary/5 rounded-xl overflow-hidden shrink-0 border border-brand-primary/10 relative">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100" />
                        )}
                      </div>

                      {/* Item details */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className="text-xs md:text-[13px] font-black text-text-primary shrink-0">
                            {item.quantity} x
                          </span>
                          <span className="text-xs md:text-[13px] font-bold text-gray-800 truncate max-w-[180px]">
                            {item.name}
                          </span>
                        </div>

                        {/* Variant choices badge if they exist */}
                        {item.variantSelections && item.variantSelections.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {item.variantSelections.map((sel) => (
                              <span
                                key={sel.optionId}
                                className="inline-block bg-brand-primary/5 text-[9px] font-bold text-text-secondary px-1.5 py-0.5 rounded border border-brand-primary/10 uppercase"
                              >
                                {sel.optionName}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Prices row */}
                        <div className="flex items-baseline gap-1.5 mt-1.5">
                          {hasDiscount && (
                            <span className="text-[10px] text-text-secondary line-through font-semibold">
                              From {formatPrice(item.originalUnitPrice * item.quantity)}
                            </span>
                          )}
                          <span className="text-xs font-extrabold text-brand-primary">
                            {formatPrice(item.unitPrice * item.quantity)}
                          </span>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* View More/Less Toggle for Many items */}
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() => setIsItemsExpanded(!isItemsExpanded)}
                  className="w-full pt-1 text-center text-xs font-bold text-brand-primary hover:opacity-85 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>{isItemsExpanded ? 'View Less' : `View More (${hiddenCount} more)`}</span>
                  {isItemsExpanded ? <ChevronUp size={12} strokeWidth={2.5} /> : <ChevronDown size={12} strokeWidth={2.5} />}
                </button>
              )}

              {/* Divider */}
              <hr className="border-brand-primary/10" />

              {/* Math breakdown rows */}
              <div className="bg-[#F8FBF9] border border-brand-primary/10 rounded-2xl p-4 space-y-3 text-xs text-gray-600">

                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 font-medium">
                    <FileText size={14} className="text-text-secondary" /> Total
                  </span>
                  <span className="font-extrabold text-gray-800">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {/* Tax */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 font-medium">
                    <Percent size={14} className="text-text-secondary" /> Tax ({config.taxPercent}%)
                  </span>
                  <span className="font-extrabold text-gray-800">
                    {formatPrice(tax)}
                  </span>
                </div>

                {/* Delivery Fee */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 font-medium">
                    <Truck size={14} className="text-text-secondary" /> Delivery Fee
                  </span>
                  <span className="font-extrabold text-gray-800">
                    {formatPrice(deliveryFee)}
                  </span>
                </div>

                {/* Savings Discount */}
                {discount > 0 && (
                  <div className="flex justify-between items-center text-emerald-600">
                    <span className="flex items-center gap-2 font-medium">
                      <Tag size={14} className="text-emerald-500" /> Discount
                    </span>
                    <span className="font-black">
                      - {formatPrice(discount)}
                    </span>
                  </div>
                )}

                {/* Divider Line */}
                <hr className="border-dashed border-gray-200/80 my-1" />

                {/* Grand Total */}
                <div className="flex justify-between items-center text-text-primary pt-0.5">
                  <span className="text-xs sm:text-sm font-extrabold">Grand Total</span>
                  <span className="text-base sm:text-lg font-black text-brand-primary">
                    {formatPrice(total)}
                  </span>
                </div>

              </div>

              {/* Promo savings badge notification if discount > 0 */}
              {discount > 0 && (
                <div className="bg-[#EAFDF3] border border-[#C2F7D6] text-[#0D5C34] text-[11px] sm:text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2">
                  <Sparkles size={13} className="text-[#0D5C34] fill-[#0D5C34]/10 shrink-0" />
                  <span>Yay! You saved {formatPrice(discount)}</span>
                </div>
              )}

              {/* Action Buttons: Place Order & Back link */}
              <div ref={staticActionsRef} className="space-y-3.5 pt-1">
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 md:h-13 bg-[#052E16] hover:bg-[#032110] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none text-text-inverse flex items-center justify-center gap-2 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#052E16]/10 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <ShoppingBag size={17} strokeWidth={2.5} />
                        <span>Place Order</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Back Link to Menu */}
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCheckoutActive(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-text-secondary hover:text-gray-700 flex items-center gap-1 transition-all cursor-pointer hover:-translate-x-0.5 transform duration-150"
                  >
                    <span>&larr;</span> continue to add more items
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </form>

      {/* 2.5 Dynamic Sticky Bottom Action Bar (visible when Section 2 is visible but the static actions at its bottom are NOT visible) */}
      <AnimatePresence>
        {!isStaticButtonVisible && isSectionTwoVisible && !orderSuccess && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-background-card/95 backdrop-blur-md border-t border-gray-150 py-3.5 px-4 shadow-[0_-8px_24px_rgba(0,0,0,0.06)] z-[90] flex flex-col items-center justify-center gap-2 lg:hidden"
          >
            <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2.5">

              {/* Continue to add more items Link */}
              <button
                type="button"
                onClick={() => {
                  setIsCheckoutActive(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-text-secondary hover:text-gray-700 flex items-center gap-1 transition-all cursor-pointer hover:-translate-x-0.5 transform duration-150 py-2 shrink-0 order-2 sm:order-1"
              >
                <span>&larr;</span> continue to add more items
              </button>

              {/* Sticky Place Order Button */}
              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="w-full sm:flex-1 h-11 bg-[#052E16] hover:bg-[#032110] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none text-text-inverse flex items-center justify-center gap-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#052E16]/10 cursor-pointer order-1 sm:order-2"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <ShoppingBag size={14} strokeWidth={2.5} />
                    <span>Place Order &bull; {formatPrice(total)}</span>
                  </>
                )}
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Stunning Overlay Modal for Order Placed Success */}
      <AnimatePresence>
        {orderSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background-card rounded-[2rem] p-6 md:p-8 max-w-[480px] w-full shadow-2xl border border-brand-primary/10 flex flex-col items-center select-none"
            >

              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-[#EAFDF3] border-2 border-[#C2F7D6] flex items-center justify-center text-[#10B981] mb-5">
                <Check size={32} strokeWidth={3} />
              </div>

              {/* Header Title */}
              <h2 className="text-xl md:text-2xl font-bold md:font-black text-[#0D1F18] text-center tracking-tight leading-snug">
                Order Placed Successfully! 🎉
              </h2>

              {/* Description */}
              <p className="text-center text-text-secondary text-xs sm:text-sm mt-2 leading-relaxed px-2 font-medium">
                Thank you for ordering from Ghalib Restaurant. We are preparing your delicious meals right now.
              </p>

              {/* ID & Date Reference Row */}
              <div className="bg-[#F8FBF9] border border-brand-primary/10 rounded-2xl p-4 w-full mt-5 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-secondary font-medium flex items-center gap-1.5">
                    <FileText size={13} className="text-text-secondary" /> Order ID
                  </span>
                  <span className="font-semibold md:font-extrabold text-gray-800 tracking-wide uppercase">
                    {orderId}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-secondary font-medium flex items-center gap-1.5">
                    <Clock size={13} className="text-text-secondary" /> Delivery Estimated
                  </span>
                  <span className="font-semibold md:font-extrabold text-brand-primary">
                    35 - 45 mins
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-secondary font-medium flex items-center gap-1.5">
                    <MapPin size={13} className="text-text-secondary" /> Neighborhood Area
                  </span>
                  <span className="font-semibold md:font-extrabold text-gray-800 uppercase">
                    {currentLocation.area}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs pt-1.5 border-t border-gray-200/50">
                  <span className="font-semibold md:font-extrabold text-gray-800">Total Paid</span>
                  <span className="font-bold md:font-black text-brand-primary text-sm sm:text-base">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* Confirm Back button */}
              <button
                onClick={handleBackToMenu}
                className="w-full h-12 bg-[#052E16] hover:bg-[#032110] text-text-inverse flex items-center justify-center rounded-xl font-semibold md:font-bold text-sm tracking-wide transition-all cursor-pointer shadow-lg mt-6"
              >
                Back To Menu
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
