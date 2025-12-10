import { Item, ItemId } from "../shared/types";

const items: Item[] = [
  {
    id: "1",
    title: "دکتر علی محمدی",
    description: "متخصص قلب و عروق با بیش از ۱۵ سال سابقه فعالیت در تهران",
    specialization: "قلب و عروق",
    location: "تهران",
  },
  {
    id: "2",
    title: "دکتر سارا حسینی",
    description: "پزشک عمومی و مشاور تغذیه در بیمارستان میلاد",
    specialization: "پزشک عمومی",
    location: "تهران - بیمارستان میلاد",
  },
  {
    id: "3",
    title: "دکتر رضا موسوی",
    description: "جراح مغز و اعصاب با تجربه در انجام جراحی‌های پیشرفته",
    specialization: "جراحی مغز و اعصاب",
    location: "تهران",
  },
  {
    id: "4",
    title: "دکتر لیلا احمدی",
    description: "دندانپزشک متخصص کودکان و نوجوانان در کلینیک لبخند زیبا",
    specialization: "دندانپزشکی کودکان و نوجوانان",
    location: "کلینیک لبخند زیبا - تهران",
  },
  {
    id: "5",
    title: "دکتر پژمان عباسی",
    description: "فوق تخصص گوارش و کبد، استاد دانشگاه علوم پزشکی شیراز",
    specialization: "گوارش و کبد",
    location: "شیراز - دانشگاه علوم پزشکی",
  },
];

export function getAllItems(): Item[] {
  return items;
}

export function getItemById(id: ItemId): Item | undefined {
  return items.find((item) => item.id === id);
}
