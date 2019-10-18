import React, { useState } from 'react';
import { UserContext } from './UserContext';
function Provider({children}){
	const [userMovieList, setUserMovieList] = useState([]);
	const [listType, setListType] = useState('Using State');
	const [lastUpdated, setLastUpdated] = useState('Never');
	return (
		<UserContext.Provider
			value={{
				userMovieList,
				setUserMovieList,
				listType,
				setListType,
				lastUpdated,
				setLastUpdated
			}}
		>
			{children}
		</UserContext.Provider>
	)

}

export default Provider;