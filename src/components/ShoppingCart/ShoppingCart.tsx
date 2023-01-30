import { FC, useRef, useState } from "react";
import { ShoppingCartIcon } from "assets";
import { Badge } from "components/Bagde/Badge";
import classes from "./ShoppingCart.module.css";
import { useEffect } from "react";
import { Button } from "components/Button/Button";
import { Order } from "pages/ProductDetails/types";

interface ShoppingCartProps {
  orders: Order[];
  onDeleteClick: (prodcutId: string) => void;
}

export const ShoppingCart: FC<ShoppingCartProps> = (props) => {
  const { orders, onDeleteClick } = props;
  const amount = orders.reduce((sum, order) => {
    return sum + order.amount;
  }, 0);

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className={classes.container} ref={containerRef}>
      <button className={classes.cartButton} onClick={toggleIsOpen}>
        <ShoppingCartIcon />
        {/* TODO: Dodaj warunek który pozwoli na wyświetlanie Badge wtedy gdy amount jest większe niż 0 */}
        <Badge className={classes.productsAmountIndicator}>{amount}</Badge>
      </button>
      {isOpen && (
        <div className={classes.popup}>
          <h2 className={classes.popupHeading}>Cart</h2>
          <div className={classes.popupContent}>
            {orders.map((order) => (
              <div key={order.product.id}>
                {order.product.name}
                <button
                  onClick={() => {
                    onDeleteClick(order.product.id);
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
            <Button variant="orange">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};
