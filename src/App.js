import React from 'react';
import MovieList from './components/MovieList';
import BottomPanel from './components/BottomPanel';
import Title from './components/Title';
import Provider from './components/Provider'
import './App.css';


const movies = [
	{
		name: 'Ad Astra',
		image: './images/adastra.jpg',
		id: '1'
	},
	{
		name: 'Moneyball',
		image: './images/moneyball.jpg',
		id: '2'
	},
	{
		name: 'Once upon a time in hollywood',
		image: './images/onceuponatimeinhollywood.jpg',
		id: '3'
	},
	{
		name: 'World War Z',
		image: './images/worldwarz.jpg',
		id: '4'
	},
	{
		name: 'Inglorious Bastards',
		image: './images/ingloriousbastards.jpg',
		id: '5'
	}
]
const App = ()=>(
	<div className="App">
		<Title>Brad Pitt Movies</Title>
		<Provider>
			<MovieList {...{movies}} className="moviecards" />
			<Title>Brad Pitt Movies to Watch</Title>
			<BottomPanel />
		</Provider>
	</div>
);


export default App;
