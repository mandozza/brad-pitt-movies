import React from 'react';
import Title from './Title';
export default function HeaderPanel() {
	return (
		<div className="header-panel">
			<div className="logo-container">
				<Title>
					<div className="logo-title">
						<span className="ku">Ku</span>
						<span className="jo">Jo</span>
					</div>
					<div className="tagline">Movie Manager</div>
				</Title>
			</div>
			<div classname="header-nav">panel options go here</div>
		</div>
	);
}
