import { selectProduct } from "pages/ProductDetails/state/productDetailsSlice";
import React, { FC } from "react";
import { useSelector } from "react-redux";

export const Description: FC = () => {
  // const product = useSelector(selectProduct);
  const product = {
    company: "XYZ",
    name: "Unknown Brand XYZ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, beatae.",
  };
  return (
    <div>
      <h2>{product?.company}</h2>
      <p>{product?.name}</p>
      <p>{product?.description}</p>
    </div>
  );
};
