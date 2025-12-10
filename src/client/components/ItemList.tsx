import React, { useMemo } from "react";
import type { Item } from "@shared/types";
import { ItemCard } from "./ItemCard";

interface ItemListProps {
  items: Item[];
  searchQuery: string;
}

export const ItemList: React.FC<ItemListProps> = ({ items, searchQuery }) => {
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase().trim();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }, [items, searchQuery]);

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">
          {searchQuery ? "نتیجه‌ای یافت نشد" : "آیتمی وجود ندارد"}
        </div>
      </div>
    );
  }

  return (
    <>
      {searchQuery && (
        <div className="mb-4 text-sm text-gray-600">
          {filteredItems.length} نتیجه پیدا شد
        </div>
      )}
      <ul className="space-y-3">
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
