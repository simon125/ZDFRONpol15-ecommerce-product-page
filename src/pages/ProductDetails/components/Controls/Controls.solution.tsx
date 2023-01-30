import { Button } from "components";
import { Counter } from "components/Counter/Counter";
import {
  selectOrderAmount,
  setAmount,
} from "pages/ProductDetails/state/orderSlice";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import classes from "./Controls.module.css";

export const Controls: FC = () => {
  const [state, setState] = useState("0");
  const dispatch = useAppDispatch();
  const handleChange = () => {
    dispatch(setAmount(state));
  };

  return (
    <>
      {/* <Counter value={state} onChange={setState} /> */}
      <Button
        onClick={handleChange}
        className={classes.addToCartButton}
        icon="shoppingCart"
        variant="orange"
      >
        Add to cart
      </Button>
    </>
  );
};
