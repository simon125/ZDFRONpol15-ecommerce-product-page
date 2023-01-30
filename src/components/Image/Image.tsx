import { FC, ImgHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./Image.module.css";

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const Image: FC<ImageProps> = ({ ...rest }) => {
  return (
    <img
      {...rest}
      className={`${classes.image} ${rest.className || ""}`}
      alt={rest.alt}
    />
  );
};
