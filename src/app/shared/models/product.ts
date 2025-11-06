export interface Product {
  model: string;
  brand: string;
  description: string;
  price: number;
  imageUrl: string;
  memory: number;
  ram: number;
  os: string;
  createdAt: Date;
  isPopular?: boolean; // <-- добавьте эту строку
}
