import { Button } from "components";
import { Counter } from "components/Counter/Counter";
import { FC } from "react";
import classes from "./Controls.module.css";

export const Controls: FC = () => {
  return (
    <>
      <Counter value={"2"} onChange={() => {}} />
      <Button
        className={classes.addToCartButton}
        icon="shoppingCart"
        variant="orange"
      >
        Add to cart
      </Button>
    </>
  );
};
