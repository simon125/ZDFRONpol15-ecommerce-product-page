import { FC } from "react";
import { Controls } from "./components/Controls/Controls";
import { Description } from "./components/Description/Description";
import { ImagePreview } from "./components/ImagesPreview/ImagePreview";
import { Price } from "./components/Price/Price";
import classes from "./ProductDetails.module.css";

export const ProductDetails: FC = () => {
  const id = 123; // Skąd wziąć ID??? hint: URL/react-router-dom

  return (
    <div className={classes.container}>
      <div className={classes.imagePreviewContainer}>
        <ImagePreview />
      </div>
      <div className={classes.productDetailsContainer}>
        <Description />
        <Price />
        <div className={classes.controlsContainer}>
          <Controls />
        </div>
      </div>
    </div>
  );
};
