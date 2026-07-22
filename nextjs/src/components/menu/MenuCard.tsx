import React, { Suspense, lazy, useMemo, useCallback } from "react";
import { MenuItem } from "../../types/menu";
import { useCart } from "../../context/CartContext";
import { useRestaurant } from "../../context/RestaurantContext";

// Lazy load card styles so clients only download what they need
const MinimalCard = lazy(() => import("./styles/MinimalCard"));
const ListCard = lazy(() => import("./styles/ListCard"));
const ListAltCard = lazy(() => import("./styles/ListAltCard"));
const DefaultCard = lazy(() => import("./styles/DefaultCard"));

export interface MenuCardProps {
  item: MenuItem;
  onCustomizeClick?: (item: MenuItem) => void;
  cardStyle?: "default" | "minimal" | "list" | "list-alt";
}

// Memoized Card Renderer: prevents re-rendering images and animations
// when the cart context updates, unless this specific card's props changed.
const CardRenderer = React.memo(({ cardStyle, ...commonProps }: any) => {
  const fallback = (
    <div className="w-full h-full min-h-[120px] bg-background-card/50 animate-pulse rounded-xl" />
  );

  return (
    <Suspense fallback={fallback}>
      {cardStyle === "minimal" && <MinimalCard {...commonProps} />}
      {cardStyle === "list" && <ListCard {...commonProps} />}
      {cardStyle === "list-alt" && <ListAltCard {...commonProps} />}
      {cardStyle === "default" && <DefaultCard {...commonProps} />}
    </Suspense>
  );
});

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  onCustomizeClick,
  cardStyle: propCardStyle,
}) => {
  const { state: cartState, addItem, updateQuantity } = useCart();
  const { config } = useRestaurant();
  const cardStyle = propCardStyle || config.theme.cardStyle || "default";

  // Check if item is in cart
  const cartItemsOfThisMenu = useMemo(
    () => cartState.items.filter((i) => i.menuItemId === item.id),
    [cartState.items, item.id],
  );

  const totalQuantity = useMemo(
    () => cartItemsOfThisMenu.reduce((sum, i) => sum + i.quantity, 0),
    [cartItemsOfThisMenu],
  );

  const hasCustomization = Boolean(
    (item.modifierGroups?.length ?? 0) > 0 || (item.variants?.length ?? 0) > 0,
  );

  const simpleCartItem =
    !hasCustomization && cartItemsOfThisMenu.length > 0
      ? cartItemsOfThisMenu[0]
      : null;

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.isAvailable) return;
    if (hasCustomization) {
      if (onCustomizeClick) onCustomizeClick(item);
    } else {
      addItem({
        id: item.id,
        menuItemId: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        quantity: 1,
        unitPrice: item.discountedPrice,
        originalUnitPrice: item.basePrice,
      });
    }
  }, [item, hasCustomization, onCustomizeClick, addItem]);

  const handleIncrement = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (simpleCartItem) updateQuantity(simpleCartItem.id, simpleCartItem.quantity + 1);
  }, [simpleCartItem, updateQuantity]);

  const handleDecrement = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (simpleCartItem) updateQuantity(simpleCartItem.id, simpleCartItem.quantity - 1);
  }, [simpleCartItem, updateQuantity]);

  const handleCardClick = useCallback(() => {
    if (!item.isAvailable) return;
    if (onCustomizeClick) onCustomizeClick(item);
  }, [item, onCustomizeClick]);

  return (
    <CardRenderer
      cardStyle={cardStyle}
      item={item}
      onCustomizeClick={onCustomizeClick}
      totalQuantity={totalQuantity}
      hasCustomization={hasCustomization}
      simpleCartItem={simpleCartItem}
      handleAddToCart={handleAddToCart}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleCardClick={handleCardClick}
    />
  );
};
