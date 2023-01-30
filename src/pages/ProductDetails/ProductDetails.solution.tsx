import { FC, useEffect } from "react";
import { Controls } from "./components/Controls/Controls";
import { Description } from "./components/Description/Description";
import { ImagePreview } from "./components/ImagesPreview/ImagePreview";
import { Price } from "./components/Price/Price";
import classes from "./ProductDetails.module.css";
import { fetchProduct } from "./state/productDetailsSlice";
import { useAppDispatch } from "store/store";
import { useParams } from "react-router-dom";

export const ProductDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

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
