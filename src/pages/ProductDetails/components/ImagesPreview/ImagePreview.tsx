import { FC, useState } from "react";
import { Image } from "components/Image/Image";

import classes from "./ImagePreview.module.css";
import { Image as ImageType } from "pages/ProductDetails/types";

/**
 * 1) przenieś zmienną acitveIdx do stanu tzn. użyj hooka useState zaimportowanego z reacta
 * 2) stwórz funckje np handleThumbnailClick która będzie ustawiała stan activeIdx
 * jako wartosć użyj indexu z mapowanej tablicy (patrz map(img,index)) <=== to ten index  )
 * 3) rozszerz className komponentowi Image (temu drugiemu) dodając odpowiednią klase cssową
 * ale dodawaj ją tylko wtedy gdy index jest równy activeIdx
 */

interface ImagePreviewProps {
  images: ImageType[];
}

export const ImagePreview: FC<ImagePreviewProps> = (props) => {
  const { images } = props;
  // const activeIdx = 3;
  const [activeIdx, setActiveIdx] = useState(0);

  const handleThumbnailClick = (newActiveIdx: number) => {
    setActiveIdx(newActiveIdx);
  };

  return (
    <div>
      <div>
        <Image
          className={classes.previewImage}
          src={images[activeIdx]?.image}
        />
      </div>
      <div className={classes.thumbnailsContainer}>
        {images.map((img, index) => (
          <button
            onClick={() => handleThumbnailClick(index)}
            key={img.id}
            className={classes.thumbnailButton}
          >
            {/* TODO: dodaj ramkę aktywnemy thumbnailowi - przejżyj jakie są dostęne klasy w pliku ze stylami */}
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
