import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({movies, className}) => (
	<div {...{className}}>
		{movies.map(({id, name, image, movieStatus}) => (
			<MovieCard
				key={id}
				{...{name}}
				{...{image}}
				{...{id}}
				{...{movieStatus}}
			/>
		))}
	</div>
);

export default MovieList;
