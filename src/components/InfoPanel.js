import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Button from './Button';

export default function InfoPanel(props) {
	const {
		userMovieList,
		setUserMovieList,
		listType,
		setListType,
		lastUpdated,
		setLastUpdated
	} = useContext(UserContext);

	const localStorageClicked = (e) => {
		setListType('Yes!');
		let rightNow = new Date();
		console.log(rightNow);
		setLastUpdated('now');
	};

	const deleteLocalStorage = (e) => {
		console.log('clicked again');
		setListType('No!!!');
		let rightNow = new Date();
		console.log(rightNow);
		setLastUpdated('now');
	};

	return (
		<div className={props.className}>
			<h3>Info panel</h3>
			<div>{userMovieList.length} of movies to Watch</div>
			<div> Using Local Storage:{listType}</div>
			<div>Last updated:{lastUpdated}</div>
			<Button cssname="btn-save" handleClick={localStorageClicked}>
				Save to Local Storage
			</Button>
			<Button cssname="btn-clear" handleClick={deleteLocalStorage}>
				Delete Local Storage
			</Button>
		</div>
	);
}
