import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({ value, onChange, placeholder = "جستجوی پزشک" }) => {
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <div className="w-full flex items-center bg-white border-0  rounded-lg px-3">
        <FaSearch />
        <input
          type="text"
          name="search"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="px-4 py-3 text-base  focus:outline-none focus:border-transparent "
          dir="rtl"
        />
        
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
