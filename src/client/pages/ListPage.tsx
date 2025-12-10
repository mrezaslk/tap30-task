import React, { useState, useCallback } from "react";
import { useItems } from "@client/hooks/useItems";
import { LoadingState } from "@client/components/LoadingState";
import { ErrorState } from "@client/components/ErrorState";
import { SearchInput } from "@client/components/SearchInput";
import { ItemList } from "@client/components/ItemList";

export const ListPage: React.FC = () => {
  const { items, loading, error } = useItems();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-4 py-6">
        <header className="w-full mb-6">
          <h1 className="text-lg font-bold text-gray-900 mb-4">
            لیست پزشکان آنلاین
          </h1>
          <SearchInput value={searchQuery} onChange={handleSearchChange} />
        </header>
        <ItemList items={items} searchQuery={searchQuery} />
      </div>
    </main>
  );
};
