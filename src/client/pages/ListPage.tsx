import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Item } from "@shared/types";
import { API_BASE } from "@client/constant/global";

// const mockItems: Item[] = [
//   { id: "1", title: "اولین آیتم", description: "توضیحات کوتاه برای آیتم اول." },
//   { id: "2", title: "دومین آیتم", description: "توضیحات کوتاه برای آیتم دوم." },
//   { id: "3", title: "سومین آیتم", description: "توضیحات کوتاه برای آیتم سوم." },
// ];

export const ListPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
    return <main style={{ padding: '16px' }}>در حال بارگذاری</main>;
  }
  if (error) {
    return <main style={{ padding: "16px" }}>{error}</main>;
  }
  return (
    <main style={{ padding: "16px" }}>
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
