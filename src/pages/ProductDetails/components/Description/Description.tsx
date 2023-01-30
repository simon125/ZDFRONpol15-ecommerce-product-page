import { Product } from "pages/ProductDetails/types";
import React, { FC } from "react";
import classes from "./Description.module.css";

interface DescriptionProps {
  product: Product | null;
}

export const Description: FC<DescriptionProps> = (props) => {
  const { product } = props;

  return (
    <div>
      <h2 className={classes.heading}>{product?.company}</h2>
      <p className={classes.subHeading}>{product?.name}</p>
      <p className={classes.description}>{product?.description}</p>
    </div>
  );
};
