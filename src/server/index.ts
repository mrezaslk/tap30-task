import express from "express";
import cors from "cors";
import { getAllItems, getItemById } from "./db";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running .... ");
});

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

app.listen(PORT, () => {
  console.log(`Server is running on localhost: ${PORT}`);
});
