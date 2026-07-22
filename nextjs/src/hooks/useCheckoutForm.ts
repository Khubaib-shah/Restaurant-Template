"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";

// --- Client-side sanitizers (UX only; true defense is server-side via /api/checkout) ---
export const sanitizeNameInput = (val: string): string =>
  val.replace(/[^a-zA-Z\s\u0621-\u064A.'-]/g, "");

export const sanitizePhoneInput = (val: string): string =>
  val.replace(/[^0-9+\s\-()]/g, "");

export const sanitizeAddressInput = (val: string): string =>
  val.replace(/[<>{}[\]|\\^`"]/g, "");

export const sanitizeLandmarkInput = (val: string): string =>
  val.replace(/[^a-zA-Z0-9\s.,\-\/#]/g, "");

export const sanitizeEmailInput = (val: string): string =>
  val.replace(/[^a-zA-Z0-9@._\-+]/g, "");

export const sanitizeInstructionsInput = (val: string): string =>
  val.replace(/[^a-zA-Z0-9\s.,\-\/#?!()]/g, "");

export type CheckoutFormFields = {
  title: string;
  fullName: string;
  mobileNumber: string;
  altMobileNumber: string;
  deliveryAddress: string;
  nearestLandmark: string;
  emailAddress: string;
  deliveryInstructions: string;
  paymentMethod: string;
  changeRequest: string;
};

export type CheckoutFormErrors = Record<string, string>;

export function useCheckoutForm() {
  const { config } = useRestaurant();
  const { state: cartState, clearCart, setIsCheckoutActive } = useCart();

  const [title, setTitle] = useState("Mr.");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [altMobileNumber, setAltMobileNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [nearestLandmark, setNearestLandmark] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [deliveryInstructions, setDeliveryInstructions] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>(
    config.paymentOptions?.[0] || "cod"
  );
  const [changeRequest, setChangeRequest] = useState("");
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const validateForm = (): { isValid: boolean; newErrors: CheckoutFormErrors } => {
    const newErrors: CheckoutFormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else {
      const digits = mobileNumber.replace(/[^\d]/g, "");
      if (digits.startsWith("92")) {
        if (digits.length !== 12)
          newErrors.mobileNumber =
            "Please enter a valid international mobile number (e.g. +92 3xx-xxxxxxx)";
      } else if (digits.startsWith("0")) {
        if (digits.length !== 11)
          newErrors.mobileNumber =
            "Please enter a valid local mobile number (e.g. 03xx-xxxxxxx)";
      } else {
        newErrors.mobileNumber =
          "Please enter a valid mobile number (starting with 03 or +92)";
      }
    }

    if (altMobileNumber.trim()) {
      const altDigits = altMobileNumber.replace(/[^\d]/g, "");
      if (altDigits.startsWith("92")) {
        if (altDigits.length !== 12)
          newErrors.altMobileNumber =
            "Please enter a valid international alternate mobile number (e.g. +92 3xx-xxxxxxx)";
      } else if (altDigits.startsWith("0")) {
        if (altDigits.length !== 11)
          newErrors.altMobileNumber =
            "Please enter a valid local alternate mobile number (e.g. 03xx-xxxxxxx)";
      } else {
        newErrors.altMobileNumber =
          "Please enter a valid alternate mobile number (starting with 03 or +92)";
      }
    }

    if (!deliveryAddress.trim()) {
      newErrors.deliveryAddress = "Delivery address is required";
    }

    if (emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress.trim()))
        newErrors.emailAddress = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, newErrors };
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, newErrors } = validateForm();
    if (!isValid) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          mobileNumber,
          altMobileNumber,
          deliveryAddress,
          nearestLandmark,
          emailAddress,
          deliveryInstructions,
          paymentMethod,
          changeRequest,
          items: cartState.items,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setOrderId(data.orderId);
        setOrderSuccess(true);
      } else {
        console.error("Order failed:", data.message, data.errors);
        alert("Failed to submit order. Please check the form.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred while submitting your order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToMenu = () => {
    setOrderSuccess(false);
    clearCart();
    setIsCheckoutActive(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  return {
    // field values
    title, setTitle,
    fullName, setFullName: (v: string) => { setFullName(sanitizeNameInput(v)); clearError("fullName"); },
    mobileNumber, setMobileNumber: (v: string) => { setMobileNumber(sanitizePhoneInput(v)); clearError("mobileNumber"); },
    altMobileNumber, setAltMobileNumber: (v: string) => { setAltMobileNumber(sanitizePhoneInput(v)); clearError("altMobileNumber"); },
    deliveryAddress, setDeliveryAddress: (v: string) => { setDeliveryAddress(sanitizeAddressInput(v)); clearError("deliveryAddress"); },
    nearestLandmark, setNearestLandmark: (v: string) => setNearestLandmark(sanitizeLandmarkInput(v)),
    emailAddress, setEmailAddress: (v: string) => { setEmailAddress(sanitizeEmailInput(v)); clearError("emailAddress"); },
    deliveryInstructions, setDeliveryInstructions: (v: string) => setDeliveryInstructions(sanitizeInstructionsInput(v)),
    paymentMethod, setPaymentMethod,
    changeRequest, setChangeRequest: (v: string) => setChangeRequest(sanitizeInstructionsInput(v)),
    // meta state
    errors,
    clearError,
    isSubmitting,
    orderSuccess,
    orderId,
    // handlers
    handleSubmitOrder,
    handleBackToMenu,
  };
}
