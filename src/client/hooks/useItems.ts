import { useEffect, useState } from "react";
import type { Item } from "@shared/types";
import { API_BASE } from "@client/constant/global";
import { useInitialData } from "@client/context/InitialDataContext";

interface UseItemsReturn {
  items: Item[];
  loading: boolean;
  error: string | null;
}

export function useItems(): UseItemsReturn {
  const initialData = useInitialData();
  const initialItems =
    initialData?.route === "list" && initialData.items
      ? initialData.items
      : null;

  const [items, setItems] = useState<Item[]>(initialItems ?? []);
  const [loading, setLoading] = useState<boolean>(initialItems === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading) return;

    async function fetchItems() {
      try {
        const res = await fetch(`${API_BASE}/items`);
        if (!res.ok) throw new Error("Failed to fetch items");
        const data: Item[] = await res.json();
        setItems(data);
      } catch (err) {
        setError("مشکلی در دریافت اطلاعات به وجود امده است");
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  return { items, loading, error };
}
