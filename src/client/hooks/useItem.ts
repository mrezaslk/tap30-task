import { useEffect, useState, useRef } from "react";
import type { Item } from "@shared/types";
import { API_BASE } from "@client/constant/global";
import { useInitialData } from "@client/context/InitialDataContext";

interface UseItemReturn {
  item: Item | null;
  loading: boolean;
  error: string | null;
}

export function useItem(id: string | undefined): UseItemReturn {
  const initialData = useInitialData();
  const initialItem =
    initialData?.route === "detail" && initialData.item
      ? initialData.item
      : null;

  const [item, setItem] = useState<Item | null>(initialItem);
  const [loading, setLoading] = useState(initialItem === null);
  const [error, setError] = useState<string | null>(null);
  const previousIdRef = useRef<string | undefined>(id);

  useEffect(() => {
    // Handle id changes (client-side navigation)
    if (previousIdRef.current !== id && id) {
      previousIdRef.current = id;
      // Reset state when navigating to a different item
      setItem(null);
      setError(null);
      setLoading(true);
    }

    if (!loading || !id) return;

    async function fetchItem() {
      try {
        const res = await fetch(`${API_BASE}/items/${id}`);
        if (res.status === 404) {
          setError("آیتم پیدا نشد");
          return;
        }
        if (!res.ok) {
          throw new Error("Failed to fetch item");
        }
        const data: Item = await res.json();
        setItem(data);
      } catch (err) {
        setError("مشکلی در دریافت اطلاعات به وجود امده است");
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, loading]);

  return { item, loading, error };
}
