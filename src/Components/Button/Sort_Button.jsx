/* eslint-disable react/prop-types */
import './_button.scss';

const Sort_Button = ({ sortType, handleSortChange }) => {
	const handleSort = () => {
		const newSortType = sortType === 'id' ? 'name' : 'id';
		handleSortChange(newSortType);
	};

	return (
		<button className='button' onClick={handleSort}>
			Sort by {sortType === 'id' ? 'Name' : 'ID'}
		</button>
	);
};

export default Sort_Button;
