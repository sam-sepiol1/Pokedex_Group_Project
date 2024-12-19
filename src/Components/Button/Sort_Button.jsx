/* eslint-disable react/prop-types */
// import { useState } from "react";
import './_button.scss'

const Sort_Button = ({ sortType, handleSortChange }) => {
    const handleSort = () => {
        const newSortType = sortType === 'id' ? 'name' : 'id';
        handleSortChange(newSortType);
    };  

    return (
        <button className="button1" onClick={handleSort}>
            Sort by {sortType === 'id' ? 'Name' : 'ID'}
        </button>
    );
};

export default Sort_Button;