import React, { useState } from 'react'
import { Reset } from 'styled-reset'
import { createGlobalStyle } from 'styled-components'
import { UserContext } from './components/UserContext'
import MovieList from './components/MovieList'
import HeaderPanel from './components/HeaderPanel'
import SidePanel from './components/SidePanel'
import './App.css'

const GlobalStyles = createGlobalStyle`
	body {
		@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
		font-family: 'Righteous', cursive;
	}
  `

function App() {
  const [userMovieList, setUserMovieList] = useState([])
  const [listType, setListType] = useState('Using State')
  const [lastUpdated, setLastUpdated] = useState('Never')
  return (
    <div className="App">
      <Reset />
      <GlobalStyles />
      <HeaderPanel />
      <UserContext.Provider
        value={{
          userMovieList,
          setUserMovieList,
          listType,
          setListType,
          lastUpdated,
          setLastUpdated,
        }}
      >
        <MovieList />
        <SidePanel className="right-panel" />
      </UserContext.Provider>
    </div>
  )
}

export default App
