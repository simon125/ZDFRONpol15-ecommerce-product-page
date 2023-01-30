import { FC, useState } from "react";
import classes from "./Counter.module.css";

interface CounterProps {
  onChange: (value: number) => void;
  value: number;
  min?: number;
  classNames?: {
    container?: string;
    value?: string;
  };
}

export const Counter: FC<CounterProps> = ({
  onChange,
  value,
  min = 0,
  classNames,
}) => {
  return (
    <div className={`${classes.container} ${classNames?.container || ""}`}>
      <button onClick={() => onChange(value - 1)} className={classes.button}>
        -
      </button>
      <span className={`${classes.value} ${classNames?.value || ""}`}>
        {value}
      </span>
      <button onClick={() => onChange(value + 1)} className={classes.button}>
        +
      </button>
    </div>
  );
};
