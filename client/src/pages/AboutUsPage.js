import React from 'react';
import Dayan from '../images/DayanProfile.png';
import Eric from '../images/EricProfile.jpg';
import Breakfast from '../images/Breakfast.jpg';
import Roboto from '../fonts/Roboto-Bold.ttf';
import CodePic from '../images/AboutHero.svg';

const AboutUsPage = (props) => {
	return (
		<div className="container">
			<div className="row" style={{ marginBottom: '20%' }} style={{ fontFamily: { Roboto } }}>
				<div className="col-sm-12 col-md-12 col-lg-5" style={{ marginTop: '10%' }}>
					<h1 className="ui huge header" style={{ fontSize: '40px' }}>
						About us
					</h1>

					<div className="content" style={{ fontSize: '16px', color: '#A6A6A6' }}>
						Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
						or web designs. The passage is attributed to an unknown typesetter in the 15th century who is
						thought to have scrambled parts{' '}
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-7" style={{ marginTop: '15%' }}>
					<img style={{ height: '100%', width: '100%' }} src={CodePic} />
				</div>
			</div>
			<h1 style={{ textAlign: 'center' }} className="ui header">
				Meet our team
			</h1>
			<h3 style={{ textAlign: 'center' }} className="ui header">
				Representing CUNY and CUNY tech prep
			</h3>
			<div className="row">
				<div class="ui three stackable cards">
					<div className="card">
						<div className="image">
							<img src={Eric} />
						</div>
						<div className="content">
							<a className="header">Eric Sze</a>
							<div className="meta">
								<span className="date">CUNY Baruch College</span>
							</div>
						</div>
						<div className="extra content">
							<div className="extra content">
								<a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/ericysze/">
									<i className="linkedin large icon" />
								</a>
								<a style={{ textDecoration: 'none' }} href="https://github.com/ericysze">
									<i className="github alternate large icon" />
								</a>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src={Dayan} />
						</div>
						<div className="content">
							<a className="header">Dayan Ramirez</a>
							<div className="meta">
								<span className="date">CUNY City Tech</span>
							</div>
						</div>
						<div className="extra content">
							<a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/dayan-ramirez/">
								<i className="linkedin large icon" />
							</a>
							<a style={{ textDecoration: 'none' }} href="https://github.com/Dramirez5191">
								<i className="github alternate large icon" />
							</a>
						</div>
					</div>
					<div className="card">
						<div className="image">
							<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" />
						</div>
						<div className="content">
							<a className="header">Tyron Samaroo</a>
							<div className="meta">
								<span className="date">CUNY Queens College</span>
							</div>
						</div>
						<div className="extra content">
							<div className="extra content">
								<a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/tyronsamaroo/">
									<i className="linkedin large icon" />
								</a>
								<a style={{ textDecoration: 'none' }} href="https://github.com/TyronSamaroo">
									<i className="github alternate large icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;
