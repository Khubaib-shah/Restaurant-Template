import React from "react";

export const CategoryDivider: React.FC = () => {
  return (
    <div className="w-full max-w-[1220px] mx-auto px-4 md:px-8 py-2 select-none shrink-0">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200/70 to-transparent" />
    </div>
  );
};
