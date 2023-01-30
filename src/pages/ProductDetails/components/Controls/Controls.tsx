import { Button } from "components";
import { Counter } from "components/Counter/Counter";
import { Order, Product } from "pages/ProductDetails/types";
import { FC, useState } from "react";
import classes from "./Controls.module.css";

export const Controls: FC<{
  product: Product | null;
  onAddOrderClick: (order: Order) => void;
}> = (props) => {
  const { onAddOrderClick, product } = props;
  const [counter, setCounter] = useState(5);

  if (product === null) {
    return <div />;
  }

  return (
    <>
      <Counter value={counter} onChange={(newValue) => setCounter(newValue)} />
      <Button
        onClick={() => {
          onAddOrderClick({
            amount: counter,
            product: product,
          });
        }}
        className={classes.addToCartButton}
        icon="shoppingCart"
        variant="orange"
      >
        Add to cart
      </Button>
    </>
  );
};
