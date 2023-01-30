import { SneakersLogo } from "assets";
import { Avatar } from "components/Avatar/Avatar";
import { Navigation } from "components/Navigation/Navigation";
import { ShoppingCart } from "components/ShoppingCart/ShoppingCart";
import { FC } from "react";

import classes from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={classes.container}>
      <div className={classes.leftColumn}>
        <SneakersLogo />
        <Navigation />
      </div>
      <div className={classes.rightColumn}>
        <ShoppingCart />
        <Avatar />
      </div>
    </header>
  );
};
