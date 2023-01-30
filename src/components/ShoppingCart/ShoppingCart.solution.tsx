import { FC, useRef, useState } from "react";
import { ShoppingCartIcon } from "assets";
import { Badge } from "components/Bagde/Badge";
import classes from "./ShoppingCart.module.css";
import { useEffect } from "react";
import { Button } from "components/Button/Button";
import { useSelector } from "react-redux";
import { selectOrderAmount } from "pages/ProductDetails/state/orderSlice";

interface ShoppingCartProps {}

export const ShoppingCart: FC<ShoppingCartProps> = ({}) => {
  const amount = useSelector(selectOrderAmount);

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
        {Number(amount) > 0 && (
          <Badge className={classes.productsAmountIndicator}>{amount}</Badge>
        )}
      </button>
      {isOpen && (
        <div className={classes.popup}>
          <h2 className={classes.popupHeading}>Cart</h2>
          <div className={classes.popupContent}>
            <Button variant="orange">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};
