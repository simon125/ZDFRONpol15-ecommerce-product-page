import { LoadingStatus } from "types";
import { Order, Product } from "../types";

export interface ProductDetailsState {
  status: LoadingStatus;
  product: Product | null;
}

export interface OrderState {
  status: LoadingStatus;
  orders: Order[];
  amount: string;
}
