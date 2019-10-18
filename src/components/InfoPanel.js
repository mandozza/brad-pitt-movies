import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Button from './Button';

export default function InfoPanel({className}) {
	const {
		userMovieList,
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

	const btns = [{
		cssname:"btn-save",
		handleClick: localStorageClicked,
		copy:"Save to Local Storage"
	},
	{
		cssname:"btn-clear",
		handleClick: deleteLocalStorage,
		copy: "Delete Local Storage"
	}]

	const copy = [`${userMovieList.length} of movies to Watch`, `Using Local Storage:${listType}`, `Last updated:${lastUpdated}`]
	return (
		<div {...{className}}>
			<h3>Info panel</h3>
			{copy.map((text, i)=><div key={i}>{text}</div>)}
			{btns.map(({copy, ...rest}, i)=><Button key={i} {...rest}>{copy}</Button>)}
		</div>
	);
}
