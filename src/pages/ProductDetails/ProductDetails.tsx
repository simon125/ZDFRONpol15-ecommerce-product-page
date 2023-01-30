import { FC, useEffect, useState } from "react";
import { Controls } from "./components/Controls/Controls";
import { Description } from "./components/Description/Description";
import { ImagePreview } from "./components/ImagesPreview/ImagePreview";
import { Price } from "./components/Price/Price";
import classes from "./ProductDetails.module.css";
import { Order, Product } from "./types";

import { useParams } from "react-router-dom";

export const ProductDetails: FC<{
  onAddOrderClick: (order: Order) => void;
}> = (props) => {
  const { id } = useParams<{ id: string }>();
  // http://localhost:3005/products/283esyxu89328x3x

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3005/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className={classes.container}>
      <div className={classes.imagePreviewContainer}>
        <ImagePreview images={product?.images || []} />
      </div>
      <div className={classes.productDetailsContainer}>
        <Description product={product} />
        <Price product={product} />
        <div className={classes.controlsContainer}>
          <Controls product={product} onAddOrderClick={props.onAddOrderClick} />
        </div>
      </div>
    </div>
  );
};
