import { FC, ReactNode } from "react";
import classes from "./Badge.module.css";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

export const Badge: FC<BadgeProps> = ({ className = "", children }) => {
  return <span className={`${classes.badge} ${className}`}>{children}</span>;
};
