import React from "react";
import { Link } from "react-router-dom";
import { FaStethoscope, FaMapMarkerAlt, FaChevronLeft } from "react-icons/fa";
import type { Item } from "@shared/types";

interface ItemCardProps {
  item: Item;
}

export const ItemCard: React.FC<ItemCardProps> = React.memo(({ item }) => {
  return (
    <li>
      <Link
        to={`/items/${item.id}`}
        className="block bg-white rounded-lg shadow-sm p-4"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {item.title}
        </h2>
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaStethoscope className="text-blue-600 flex-shrink-0" size={14} />
            <span className="font-medium">تخصص:</span>
            <span>{item.specialization}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" size={14} />
            <span className="font-medium">موقعیت:</span>
            <span>{item.location}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex justify-center">
          <button className="button">مشاهده جزییات</button>
        </div>
      </Link>
    </li>
  );
});

ItemCard.displayName = "ItemCard";
