/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Sort_Button from '../Button/Sort_Button';

import './_input.scss';

const Input = ({ search, handleInputChange, handleSortChange, sortType }) => {
	const [liked, setLiked] = useState(false);
	const navigate = useNavigate();

	const toggleLike = () => {
		setLiked(!liked);
		if (liked) {
			navigate('/');
		} else {
			navigate('/liked');
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
