import React from 'react';
import MovieCard from './MovieCard';
const MovieList = ({movies, className}) => (
	<div {...{className}}>
		{movies.map(({id, ...rest}) => <MovieCard key={id} {...{id}} {...rest} />)}
	</div>
);

export default MovieList;
