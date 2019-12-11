import React from 'react';

const IngredientList = (props) => {
	const ingredients = props.ingredients.map((ingredient, index) => {
		return (
			<div className="item" key={index}>
				<i style={{ color: 'red' }} className="close icon" onClick={(e) => props.remove(ingredient)} />
				<div className="content">
					{/* <p className="medium header">Step {index + 1}</p> */}
					<p>{ingredient}</p>
				</div>
			</div>
		);
	});

	return <div className="ui middle aligned divided list">{ingredients}</div>;
};

export default IngredientList;
