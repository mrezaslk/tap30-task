import React from "react";
import type { Item } from "@shared/types";

interface ItemDetailProps {
  item: Item;
}

export const ItemDetail: React.FC<ItemDetailProps> = React.memo(({ item }) => {
  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {item.title}
      </h1>
      <div className="h-px bg-gray-200 mb-4"></div>
      <p className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
        {item.description}
      </p>
    </article>
  );
});

ItemDetail.displayName = "ItemDetail";
