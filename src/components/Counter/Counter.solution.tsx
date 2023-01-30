// @ts-nocheck
import { FC } from "react";
import classes from "./Counter.module.css";

interface CounterProps {
  onChange: (value: string) => void;
  value: string;
  min?: string;
  classNames?: {
    container?: string;
    value?: string;
  };
}

export const Counter: FC<CounterProps> = ({
  onChange,
  value,
  min = "0",
  classNames,
}) => {
  return (
    <div className={`${classes.container} ${classNames?.container || ""}`}>
      <button
        onClick={() =>
          Number(value) > Number(min) && onChange(`${Number(value) - 1}`)
        }
        className={classes.button}
      >
        -
      </button>
      <span className={`${classes.value} ${classNames?.value || ""}`}>
        {value}
      </span>
      <button
        onClick={() => onChange(`${Number(value) + 1}`)}
        className={classes.button}
      >
        +
      </button>
    </div>
  );
};
