export interface ProductImage {
  id: number;
  image: string;
  thumbnail: string;
}

export interface Product {
  id: string;
  company: string;
  name: string;
  price: string;
  discount: string;
  description: string;
  images: ProductImage[];
}

export interface Order {
  product: Product;
  amount: string;
}
