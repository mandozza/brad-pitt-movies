import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Search() {
	return (
		<div className="search-panel">
			<input
				type="text"
				name="search"
				className="search-input"
				placeholder="Enter an actor or movie title"
			/>
			<FontAwesomeIcon icon={faSearch} className="search-icon" />
		</div>
	);
}
