/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import heartImage from '../../images/heart.png';
import transparentHeartImage from '../../images/transparent-heart.png';
import Sort_Button from '../Button/Sort_Button';

import './_input.scss';

const Input = ({ search, handleInputChange, handleSortChange, sortType }) => {
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
		<div className='input__container'>
			<form className='form'>
				<input value={search} onChange={handleInputChange} className='input' type='text' placeholder='🔍 Search' />
			</form>
			<Sort_Button handleSortChange={handleSortChange} sortType={sortType}></Sort_Button>

			<button className={`button ${liked ? '' : 'liked'}`} onClick={toggleLike}>
				<Link className='button__link' to={liked ? '/liked' : '/'}>
					{liked ? 'Favorites' : 'All'}
				</Link>
			</button>
		</div>
	);
};

export default Input;
