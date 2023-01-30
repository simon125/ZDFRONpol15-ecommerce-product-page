import { Product } from "pages/ProductDetails/types";
import React, { FC } from "react";

import classes from "./Price.module.css";

interface PriceProps {
  product: Product | null;
}

export const Price: FC<PriceProps> = (props) => {
  const { product } = props;

  if (product === null) {
    return <div />;
  }

  const dicountToDisplay = product.discount * 100;
  const finalPrice = product.price * product.discount;

  return (
    <div className={classes.container}>
      <span className={classes.price}>${finalPrice}</span>

      {!!product.discount && (
        <span className={classes.discount}>{dicountToDisplay}%</span>
      )}

      <span className={classes.previousPrice}>${product.price}</span>
    </div>
  );
};
