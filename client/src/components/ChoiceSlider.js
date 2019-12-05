import React from 'react';
import foto from '../images/undraw_searching_p5ux.png';
import Breakfast from '../images/breakfastImage.jpg';
import Healthy from '../images/healthyImage.jpg';
import Burger from '../images/burgerImage.jpg';
import Dessert from '../images/dessertImage.jpg';
import Mexican from '../images/mexicanImage.jpg';

const ChoiceSlider = () => {
	// Create a loop that will render each slide item with its right image

	return (
		<div className="scrollingWrapper">
			<div className="card ui raised card">
				<div className="image">
					<img style={{ height: '240px' }} className="ui medium image" src={Breakfast} />
				</div>
				<div className="content">
					<h2 className="header">Breakfast</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="ui medium image">
					<img style={{ height: '240px' }} src={Healthy} />
				</div>
				<div className="content">
					<h2 className="header">Healthy</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="ui medium image">
					<img style={{ height: '240px' }} src={Mexican} />
				</div>
				<div className="content">
					<h2 className="header">Mexican</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="ui medium image">
					<img style={{ height: '240px' }} src={Dessert} />
				</div>
				<div className="content">
					<h2 className="header">Dessert</h2>
				</div>
			</div>
			<div className="card ui raised card">
				<div className="ui medium image">
					<img style={{ height: '240px' }} src={Burger} />
				</div>
				<div className="content">
					<h2 className="header">Burger</h2>
				</div>
			</div>
		</div>
	);
};

export default ChoiceSlider;
