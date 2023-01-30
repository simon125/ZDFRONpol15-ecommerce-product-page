import { SneakersLogo } from "assets";
import { Avatar } from "components/Avatar/Avatar";
import { Navigation } from "components/Navigation/Navigation";
import { ShoppingCart } from "components/ShoppingCart/ShoppingCart";
import { Order } from "pages/ProductDetails/types";
import { FC } from "react";

import classes from "./Header.module.css";

interface HeaderProps {
  orders: Order[];
  onDeleteClick: (prodcutId: string) => void;
}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={classes.container}>
      <div className={classes.leftColumn}>
        <SneakersLogo />
        <Navigation />
      </div>
      <div className={classes.rightColumn}>
        <ShoppingCart
          orders={props.orders}
          onDeleteClick={props.onDeleteClick}
        />
        <Avatar />
      </div>
    </header>
  );
};
