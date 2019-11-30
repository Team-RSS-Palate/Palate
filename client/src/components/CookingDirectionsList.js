import React from 'react';

const CookingDirectionsList = (props) => {
	const steps = props.ingredients.map((step, index) => {
		return (
			<div>
				<button onClick={(e) => props.remove(step)}>
					<i className="close icon" />
				</button>
				<p className="ui segment" key={index}>
					Step {index + 1} {step}
				</p>
			</div>
		);
	});

	return <div>{steps}</div>;
};

export default CookingDirectionsList;
