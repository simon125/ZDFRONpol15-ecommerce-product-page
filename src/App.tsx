import { AppRoutes } from "AppRoutes";
import { Header } from "components/Header/Header";
import { Order } from "pages/ProductDetails/types";
import { FC, useState } from "react";

/**
 * http://localhost:3000/products/283esyxu89328x3x
 */

const App: FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleDeleteClick = (productId: string) => {
    const newOrders = orders.filter((order) => order.product.id !== productId);
    setOrders(newOrders);
  };

  const handleAddOrderClick = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <>
      <Header orders={orders} onDeleteClick={handleDeleteClick} />
      <AppRoutes onAddOrderClick={handleAddOrderClick} />
    </>
  );
};

export default App;
