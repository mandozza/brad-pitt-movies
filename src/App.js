import React, { useState } from 'react';
import { UserContext } from './components/UserContext';
import MovieList from './components/MovieList';
import BottomPanel from './components/BottomPanel';
import Title from './components/Title';
import './App.css';

function App() {
	const [userMovieList, setUserMovieList] = useState([]);
	const [listType, setListType] = useState('Using State');
	const [lastUpdated, setLastUpdated] = useState('Never');
	return (
		<div className="App">
			<Title>Brad Pitt Movies</Title>
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
				<Title>Brad Pitt Movies to Watch</Title>
				<BottomPanel />
			</UserContext.Provider>
		</div>
	);
}

export default App;
