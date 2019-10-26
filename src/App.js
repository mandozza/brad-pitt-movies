import React, { useState } from 'react';
import { UserContext } from './components/UserContext';
import MovieList from './components/MovieList';
import HeaderPanel from './components/HeaderPanel';
import SidePanel from './components/SidePanel';
import Title from './components/Title';
import './App.css';

function App() {
	const [userMovieList, setUserMovieList] = useState([]);
	const [listType, setListType] = useState('Using State');
	const [lastUpdated, setLastUpdated] = useState('Never');
	return (
		<div className="App">
			<HeaderPanel />
			<UserContext.Provider
				value={{
					userMovieList,
					setUserMovieList,
					listType,
					setListType,
					lastUpdated,
					setLastUpdated
				}}
			>
				<MovieList />
				<SidePanel />
			</UserContext.Provider>
		</div>
	);
}

export default App;
