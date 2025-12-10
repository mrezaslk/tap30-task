export type ItemId = string;

export interface Item {
  id: ItemId;
  title: string;
  description: string;
  specialization: string;
  location: string;
}

export type RouteName = "list" | "detail";

export interface initialData {
  route: RouteName;
  items?: Item[];
  item?: Item | null;
}
