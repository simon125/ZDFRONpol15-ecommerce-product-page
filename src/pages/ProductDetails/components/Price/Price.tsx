import React, { FC } from "react";

import classes from "./Price.module.css";

export const Price: FC = () => {
  return (
    <div className={classes.container}>
      <span className={classes.price}>$200</span>

      <span className={classes.discount}>20%</span>

      <span className={classes.previousPrice}>$400</span>
    </div>
  );
};
