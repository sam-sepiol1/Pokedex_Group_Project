import { useState, useEffect  } from "react";
import "./_button.scss";
import heartImage from '../../images/heart.png';
import transparentHeartImage from '../../images/transparent-heart.png';

const HeartButton = ({name}) => {
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(name)) {
      setLiked(true);
    }
  }, [name]);


  const toggleLike = () => {
    setLiked(!liked);
    console.log(`here is ${name}`);


  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // if (favorites.includes(name)){
  //   setLiked(!liked);
  //   console.log(`status ${liked}`);
  // }
    



if (!liked){

  
  // Ensure it's an array (in case of corrupted data)
  if (!Array.isArray(favorites)) {
    favorites = [];
  }
  
  // Add the new favorite name only if it's not already in the list
  if (!favorites.includes(name)) {
    favorites.push(name);
  }
} else {
  const index = favorites.indexOf(name);
  if (index > -1) {
    favorites.splice(index, 1);
  }
}

// Save the updated list of favorites back to local storage
localStorage.setItem('favorites', JSON.stringify(favorites));


  };
  // function handleClick(type) {
  //   setContentType(type);
  // }
  // console.log(isActive);

  return (
    <button
      className={`heart-button ${liked ? "liked" : ""}`}
      onClick={toggleLike}
      >
      <img
        src={liked ? heartImage  : transparentHeartImage}
        alt={liked ? "Liked heart" : "Unliked heart"}
        className="heart-image"
      />
    </button>
  );
};


export default HeartButton;
