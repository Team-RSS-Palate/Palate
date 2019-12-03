import React from 'react';

const IngredientList = (props) => {
	const ingredients = props.ingredients.map((ingredient, index) => {
		return (
			<div key={index}>
				<button onClick={(e) => props.remove(ingredient)}>
					<i className="close icon" />
				</button>
				<p className="ui segment">{ingredient}</p>
			</div>
		);
	});

	return <div>{ingredients}</div>;
};

export default IngredientList;
