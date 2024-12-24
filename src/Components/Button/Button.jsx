/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './_button.scss';
import heartImage from '../../images/heart.png';
import transparentHeartImage from '../../images/transparent-heart.png';

const HeartButton = ({ name }) => {
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

		if (!liked) {
			if (!Array.isArray(favorites)) {
				favorites = [];
			}

			if (!favorites.includes(name)) {
				favorites.push(name);
			}
		} else {
			const index = favorites.indexOf(name);
			if (index > -1) {
				favorites.splice(index, 1);
			}
		}
		localStorage.setItem('favorites', JSON.stringify(favorites));
	};

	return (
		<button className={`heart-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
			<img src={liked ? heartImage : transparentHeartImage} alt={liked ? 'Liked heart' : 'Unliked heart'} className='heart-image' />
		</button>
	);
};

export default HeartButton;
