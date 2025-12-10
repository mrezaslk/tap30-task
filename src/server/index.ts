import { generateETag } from "./etag";
import express from "express";
import cors from "cors";
import { getAllItems, getItemById } from "./db";
import { renderHtml } from "./ssr";
import { initialData } from "@shared/types";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/items", (req, res) => {
  const items = getAllItems();
  res.json(items);
});

app.get("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const item = getItemById(id);
  if (!item) {
    return res.status(404).json({ message: "Item not Found" });
  }
  return res.json(item);
});

app.get(["/", "/items/:id"], (req, res) => {
  let initialData: initialData;
  if (req.path === "/") {
    const items = getAllItems();
    initialData = {
      route: "list",
      items,
    };
  } else {
    const { id } = req.params;
    const item = id ? getItemById(id) ?? null : null;
    initialData = {
      route: "detail",
      item,
    };
  }
  const html = renderHtml(req.url, initialData);
  const etag = generateETag(html);
  const ifNoneMatch = req.headers["if-none-match"];
  if (ifNoneMatch === etag) {
    return res.status(304).set("ETag", etag).end();
  }
  res.status(200).set("Content-Type", "text/html; charset=utf-8").set('ETag',etag).set('Cache-Control', 'no-cache').send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost: ${PORT}`);
});
