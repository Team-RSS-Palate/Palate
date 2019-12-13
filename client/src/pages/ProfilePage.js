import React from 'react';
import ComingSoon from '../images/comingSoon.png';

class ProfilePage extends React.Component {
	render() {
		const headingStyles = {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '52px',
			color: 'rgba(0, 0, 0, 0.85)'
		};

		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<h1 style={headingStyles} className="text-center">
							Coming Soon
						</h1>
						<img className="img-fluid" alt="coming soon image" src={ComingSoon} />
					</div>
				</div>
			</div>
		);
	}
}

export default ProfilePage;
