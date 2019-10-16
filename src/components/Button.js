import React from 'react';

export default function Button(props) {
	return (
		<div className={props.cssname} onClick={props.handleClick}>
			{props.children}
		</div>
	);
}
