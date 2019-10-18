import React, { useContext } from 'react';
import MoveList from './MovieList';
import InfoPanel from './InfoPanel';
import { UserContext } from './UserContext';

export default function BottomPanel(){
	const { userMovieList: movies }  = useContext(UserContext);
	return(
		<div className="bottompanel">
			<MoveList {...{movies}} className="watchlist" />
			<InfoPanel className="infopanel" />
		</div>
	)
};
