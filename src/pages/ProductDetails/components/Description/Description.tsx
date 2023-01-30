import React, { FC } from "react";
import classes from "./Description.module.css";

export const Description: FC = () => {
  const product = {
    company: "XYZ",
    name: "Unknown Brand XYZ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, beatae.",
  };

  return (
    <div>
      <h2 className={classes.heading}>{product?.company}</h2>
      <p className={classes.subHeading}>{product?.name}</p>
      <p className={classes.description}>{product?.description}</p>
    </div>
  );
};
