import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faUserCog } from '@fortawesome/free-solid-svg-icons';

export default function UserPanel() {
	return (
		<div className="user-panel">
			<Button cssname="btn-film">
				<FontAwesomeIcon icon={faFilm} className="film-icon" />
			</Button>
			<Button cssname="btn-cog">
				<FontAwesomeIcon icon={faUserCog} className="cog-icon" />
			</Button>
		</div>
	);
}
