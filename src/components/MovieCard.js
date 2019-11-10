import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import Button from './Buttons'

const MovieCard = ({ name, image, id, movieStatus }) => {
  const { userMovieList, setUserMovieList } = useContext(UserContext)
  const addToWatchList = e => {
    console.log('here')
    setUserMovieList([
      ...userMovieList,
      {
        name: name,
        image: image,
        id: id,
        movieStatus: 'watch',
      },
    ])
  }

  return (
    <li key={id} className="moviecard {{statusStyle}}">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <Button type="btnadd" onClick={() => addToWatchList()}>
        {movieStatus === 'watch'
          ? 'Remove from Watchlist'
          : 'Add to Watch List'}
      </Button>
    </li>
  )
}

export default MovieCard
