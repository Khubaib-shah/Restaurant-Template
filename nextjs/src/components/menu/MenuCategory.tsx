import { useRestaurant } from "@/context/RestaurantContext";
import { Category } from "@/types/menu";
import Image from "next/image";

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
        <div className="w-full flex flex-col items-center text-center select-none rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : config.theme.assets.categoryBackground ? (
        <div className="relative w-full flex flex-col items-center text-center select-none rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
          <Image
            src={config.theme.assets.categoryBackground}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', minHeight: '120px' }}
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/20">
            <h2 className="text-2xl md:text-3xl font-black text-text-inverse uppercase tracking-wider drop-shadow-md">
              {category.name}
            </h2>
            {category.description && (
              <p className="mt-2 text-xs sm:text-sm md:text-lg text-text-inverse/90 font-semibold md:font-bold leading-relaxed max-w-xl mx-auto drop-shadow-md">
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

