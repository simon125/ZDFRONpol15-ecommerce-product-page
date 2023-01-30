import { FC, useState } from "react";
import { Image } from "components/Image/Image";

import classes from "./ImagePreview.module.css";

const imgs = [
  {
    id: 1,
    image: "/product/image-product-1.jpg",
    thumbnail: "/product/image-product-1-thumbnail.jpg",
  },
  {
    id: 2,
    image: "/product/image-product-2.jpg",
    thumbnail: "/product/image-product-2-thumbnail.jpg",
  },
  {
    id: 3,
    image: "/product/image-product-3.jpg",
    thumbnail: "/product/image-product-3-thumbnail.jpg",
  },
  {
    id: 4,
    image: "/product/image-product-4.jpg",
    thumbnail: "/product/image-product-4-thumbnail.jpg",
  },
] as const;

export const ImagePreview: FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div>
      <div>
        <Image className={classes.previewImage} src={imgs[activeIdx].image} />
      </div>
      <div className={classes.thumbnailsContainer}>
        {imgs.map((img, index) => (
          <button
            key={img.id}
            className={classes.thumbnailButton}
            onClick={() => setActiveIdx(index)}
          >
            <Image
              className={`${classes.thumbnail} ${
                activeIdx === index ? classes.active : ""
              }`}
              src={img.thumbnail}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
