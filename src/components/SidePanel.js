import React from 'react';
import WatchList from './WatchList';
import InfoPanel from './InfoPanel';

export default function BottomPanel() {
	return (
		<div className="bottompanel">
			<WatchList className="watchlist" />
			<InfoPanel className="infopanel" />
		</div>
	);
}
