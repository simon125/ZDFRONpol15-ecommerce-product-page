import { selectProduct } from "pages/ProductDetails/state/productDetailsSlice";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import classes from "./Description.module.css";

export const Description: FC = () => {
  const product = useSelector(selectProduct);

  return (
    <div>
      <h2 className={classes.heading}>{product?.company}</h2>
      <p className={classes.subHeading}>{product?.name}</p>
      <p className={classes.description}>{product?.description}</p>
    </div>
  );
};
