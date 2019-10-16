import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import MovieCard from './MovieCard';

export default function WatchList(props) {
	const { userMovieList } = useContext(UserContext);
	console.log(userMovieList);
	return (
		<div className={props.className}>
			{userMovieList.map((movie) => (
				<MovieCard
					key={movie.id}
					name={movie.name}
					image={movie.image}
					id={movie.id}
					movieStatus={movie.movieStatus}
				/>
			))}
		</div>
	);
}
