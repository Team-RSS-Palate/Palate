import React from 'react';
import foto from '../images/undraw_searching_p5ux.png';

const ChoiceSlider = () => {
	// Create a loop that will render each slide item with its right image

	return (
		<div className="scrollingWrapper">
			<div className="card ui raised card">
				<div className="">
					<img className="ui massive image" src={foto} />
				</div>
				<div className="content">
					<h2 className="header">Breakfast</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="image">
					<img src={foto} />
				</div>
				<div className="content">
					<h2 className="header">Healthy</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="image">
					<img src={foto} />
				</div>
				<div className="content">
					<h2 className="header">Burgers</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="image">
					<img src={foto} />
				</div>
				<div className="content">
					<h2 className="header">Dessert</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="image">
					<img src={foto} />
				</div>
				<div className="content">
					<h2 className="header">Dessert</h2>
				</div>
			</div>
		</div>
	);
};

export default ChoiceSlider;
