import { FC } from "react";

import AVATAR_IMAGE from "assets/images/Oval.png";

export const Avatar: FC = () => {
  return <img height={50} src={AVATAR_IMAGE} alt="AVATAR" />;
};
