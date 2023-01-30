import { selectProduct } from "pages/ProductDetails/state/productDetailsSlice";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import classes from "./Price.module.css";

export const Price: FC = () => {
  const product = useSelector(selectProduct);

  const price = Number(product?.price) * Number(product?.discount) || 0;

  return (
    <div className={classes.container}>
      <span className={classes.price}>${price}</span>
      {product?.discount ? (
        <span className={classes.discount}>
          {Number(product.discount) * 100}%
        </span>
      ) : (
        ""
      )}
      {product?.discount ? (
        <span className={classes.previousPrice}>${product.price}</span>
      ) : (
        ""
      )}
    </div>
  );
};
