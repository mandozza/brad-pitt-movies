import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Button from './Button';

const MovieCard = ({ name, image, id, movieStatus }) => {
	const { userMovieList, setUserMovieList } = useContext(UserContext);
	const addToWatchList = () => {
		setUserMovieList([
			...userMovieList,
			{
				name,
				image,
				id,
				movieStatus: 'watch'
			}
		]);
	};
	return (
		<li key={id} className="moviecard {{statusStyle}}">
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<Button cssname="btn-add" handleClick={addToWatchList}>
				{movieStatus === 'watch'
					? 'Remove from Watchlist'
					: 'Add to Watch List'}
			</Button>
		</li>
	);
};

export default MovieCard;
