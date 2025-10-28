export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  createdAt: string; // ISO-рядок дати
}
