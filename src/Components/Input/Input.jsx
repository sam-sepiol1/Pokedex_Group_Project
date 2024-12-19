import './_input.scss'
import heartImage from "../../images/heart.png";
import { Link, useNavigate } from 'react-router-dom';
import transparentHeartImage from "../../images/transparent-heart.png";
import { useState } from "react";

const Input = ({ search, handleInputChange }) => {
    const [liked, setLiked] = useState(false); // State to track whether the item is liked
    const navigate = useNavigate(); // Initialize the navigate hook for programmatic navigation

    // Function to toggle the "liked" state
    const toggleLike = () => {
        setLiked(!liked); // Toggle the liked state
        // If the heart is already liked, navigate to home page
        if (liked) {
            navigate('/'); // Navigate back to the home page
        } else {
            navigate('/liked'); // Navigate to the liked page
        }
    };

    return (
        <div className="input__container">
            <form className="form">
                <input value={search} onChange={handleInputChange} className="input" type="text" placeholder="🔍 Search" />
            </form>
            <button className="button1">#</button>

            {/* Link is used to navigate, and button click will toggle liked state */}
            <Link to={liked ? '/' : '/liked'}>
                <button
                    className={`button ${liked ? "liked" : ""}`}
                    onClick={toggleLike} // Call toggleLike function on click
                >

                    <p>{liked ? "All" : "Favorites"}</p>
                    {/* <img
                        src={liked ? transparentHeartImage : heartImage}
                        alt={liked ? "Uniked heart" : "Liked heart"}
                        className="heart-image"
                    /> */}
                </button>
            </Link>
        </div>
    );
}

export default Input;
