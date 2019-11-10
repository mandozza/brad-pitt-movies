import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 80%;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: inherit;
`

const SearchIcon = styled(FontAwesomeIcon)`
  height: 60px;
  width: 60px;
`

const SearchInput = styled.input`
  height: 30px;
  width: 90%;
  border-radius: 6px;
  margin: 0 10px;
  padding: 0 10px;
  font-size: 16px;
`

export default function Search() {
  return (
    <SearchPanel>
      <SearchInput
        type="text"
        name="search"
        placeholder="Enter an actor or movie title"
      />
      <SearchIcon icon={faSearch} />
    </SearchPanel>
  )
}
