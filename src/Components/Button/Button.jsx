import { useState } from "react";
import "./_button.scss";
import heartImage from '../../images/heart.png';
import transparentHeartImage from '../../images/transparent-heart.png';

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`heart-button ${liked ? "liked" : ""}`}
      onClick={toggleLike}
    >
      <img
        src={liked ? heartImage  : transparentHeartImage}
        alt={liked ? "Unliked heart" : "Liked heart"}
        className="heart-image"
      />
    </button>
  );
};

export default HeartButton;
