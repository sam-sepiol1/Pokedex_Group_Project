import { useState } from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Liked from './Components/Liked/Liked';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
	const [search, setSearch] = useState('');
	const [sortType, setSortType] = useState('id');

	const handleInputChange = (event) => {
		setSearch(event.target.value);
	};

	const handleSortChange = () => {
		setSortType((prevSortType) => (prevSortType === 'id' ? 'name' : 'id'));
	};

	return (
		<Router>
			<Header search={search} handleInputChange={handleInputChange} handleSortChange={handleSortChange} sortType={sortType} />
			<Routes>
				<Route path="/" element={<Card filter={search} sortType={sortType} />} />
				<Route path="/liked" element={<Liked search={search} sortType={sortType} />} />
			</Routes>
		</Router>
	);


}

export default App;
