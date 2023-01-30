import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import { ShoppingCartIcon } from "assets";
import classes from "./Button.module.css";

const BUTTON_ICONS: Record<ButtonIcon, ReactNode> = {
  shoppingCart: <ShoppingCartIcon />,
};

type ButtonVariant = "orange";

type ButtonIcon = "shoppingCart";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ButtonIcon;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({
  icon,
  children,
  variant,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${classes.button} ${className || ""} ${
        !!variant ? classes[variant] : ""
      }`}
    >
      {!!icon && BUTTON_ICONS[icon]}
      {children}
    </button>
  );
};
