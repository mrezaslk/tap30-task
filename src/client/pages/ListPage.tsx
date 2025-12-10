import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Item } from "@shared/types";
import { API_BASE } from "@client/constant/global";
import { useInitialData } from "@client/InitialDataContext";

export const ListPage: React.FC = () => {
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

  if (loading) {
    return <main className="bg-blue-300">در حال بارگذاری</main>;
  }
  if (error) {
    return <main className="bg-blue-300">{error}</main>;
  }
  return (
    <main className="bg-blue-200 h-screen">
      <h1>لیست آیتم‌ها</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "8px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ marginBottom: "4px" }}>{item.title}</h2>
            <p style={{ marginBottom: "8px" }}>{item.description}</p>
            <Link to={`/items/${item.id}`}>مشاهده جزئیات</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
