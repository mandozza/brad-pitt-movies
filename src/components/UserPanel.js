import React from 'react'
import Button from './Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faUserCog } from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'

export default function UserPanel() {
  return (
    <div className="user-panel">
      <Button type="btnfilm">
        <FontAwesomeIcon icon={faFilm} className="film-icon" />
      </Button>
      <Button type="btncog">
        <FontAwesomeIcon icon={faUserCog} className="cog-icon" />
      </Button>
    </div>
  )
}
