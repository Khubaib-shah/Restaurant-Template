import { useRestaurant } from "@/src/context/RestaurantContext";
import { Category } from "@/src/types/menu";

interface MenuCategoryProps {
  category: Category;
}

export const MenuCategory = ({ category }: MenuCategoryProps) => {
  const { config } = useRestaurant();
  console.log("category.url", category.imageUrl);
  console.log("theme", config.theme.assets.categoryBackground);
  return (
    <div className="mb-3 md:mb-6">
      {category.imageUrl ? (
        <div className="relative flex flex-col items-center text-center py-2 md:py-4 select-none">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-full rounded-xl lg:rounded-2xl xl:rounded-3xl object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : config.theme.assets.categoryBackground ? (
        <div className="relative flex flex-col items-center text-center py-2 md:py-4 select-none">
          <img
            src={config.theme.assets.categoryBackground}
            alt={category.name}
            className="w-full rounded-xl lg:rounded-2xl xl:rounded-3xl object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center text-center space-y-2 py-2 md:py-4 select-none">
            <h2 className="text-2xl md:text-3xl font-black text-text-inverse uppercase tracking-wider">
              {category.name}
            </h2>
            {category.description && (
              <p className="text-xs sm:text-sm md:text-lg  text-text-primary font-semibold md:font-bold leading-relaxed max-w-xl mx-auto">
                {category.description}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center space-y-2 py-2 md:py-4 select-none">
          <h2 className="text-2xl md:text-3xl font-black text-text-primary uppercase tracking-wider">
            {category.name}
          </h2>
          {category.description && (
            <p className="text-xs sm:text-sm md:text-lg  text-text-primary font-semibold md:font-bold leading-relaxed max-w-xl mx-auto">
              {category.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
