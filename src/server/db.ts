import { randomUUID } from "crypto";
import { Item, ItemId } from "../shared/types";

const items: Item[] = [
  {
    id: randomUUID(),
    title: "this is the first title",
    description: "this is a first description",
  },
  {
    id: randomUUID(),
    title: "this is the second title",
    description: "this is a second description",
  },
  {
    id: randomUUID(),
    title: "this is the third title",
    description: "this is a third description",
  },
];

export function getAllItems(): Item[] {
  return items;
}

export function getItemById(id: ItemId): Item | undefined {
  return items.find((item) => item.id === id);
}
