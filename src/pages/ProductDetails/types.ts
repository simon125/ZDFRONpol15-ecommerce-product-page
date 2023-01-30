/**
 * Na podstawie responsów z BE ustal model danych, "zamodeluj obiekty",
 * "ustal kontrakt"
 */

export interface Image {
  id: number;
  image: string;
  thumbnail: string;
}

export interface Product {
  id: string;
  company: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  images: Image[];
}

export interface Order {
  product: Product;
  amount: number;
}
