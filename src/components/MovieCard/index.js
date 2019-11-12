import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import styled from 'styled-components'
import Button from '../Buttons'

const MovieCardPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ccc;
  border-radius: 10px;
  box-shadow: 6px 6px 5px -4px rgba(0, 0, 0, 0.28);
  margin: 10px;
  padding: 10px 0px;
  width: 180px;
`

const MovieCardTitle = styled.h3`
  Font-Family: 'Lora', Serif;
  word-wrap: normal;
  font-size: 16px;
  padding: 5px 10px;
`

const MovieCardImage = styled.img`
  max-width: 200px;
  max-height: 200px;
`

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
    <MovieCardPanel key={id} className="{{statusStyle}}">
      <MovieCardImage src={image} alt={name} />
      <MovieCardTitle>{name}</MovieCardTitle>
      <Button type="btnadd" onClick={() => addToWatchList()}>
        {movieStatus === 'watch'
          ? 'Remove from Watchlist'
          : 'Add to Watch List'}
      </Button>
    </MovieCardPanel>
  )
}

export default MovieCard
