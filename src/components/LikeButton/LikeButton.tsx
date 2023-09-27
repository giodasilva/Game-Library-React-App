import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import React, { useState } from "react";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [likeVisibility, setLikeVisibility] = useState(false);

  const toggle = () => {
    setLikeVisibility(!likeVisibility);
    onClick();
  };

  return likeVisibility ? (
    <BsFillSuitHeartFill onClick={toggle} size={40} color="#ff6b81" />
  ) : (
    <BsSuitHeart onClick={toggle} size={40} />
  );
};

export default LikeButton;
