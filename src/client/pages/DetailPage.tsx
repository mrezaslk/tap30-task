import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Item } from "@shared/types";
import { API_BASE } from "@client/constant/global";

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
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
  }, [id]);

  if (loading) {
    return <main style={{ padding: "16px" }}>در حال بارگذاری...</main>;
  }

  if (error) {
    return (
      <main style={{ padding: "16px" }}>
        <p>{error}</p>
        <Link to="/">⬅ برگشت به لیست</Link>
      </main>
    );
  }
  if (!item) {
    return (
      <main style={{ padding: "16px" }}>
        <p>آیتم پیدا نشد.</p>
        <Link to="/">برگشت به لیست</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "16px" }}>
      <h1>{item.title}</h1>
      <p style={{ margin: "12px 0" }}>{item.description}</p>
      <Link to="/">⬅ برگشت به لیست</Link>
    </main>
  );
};
