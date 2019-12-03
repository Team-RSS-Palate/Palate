import React from 'react';

const CookingDirectionsList = (props) => {
	const steps = props.ingredients.map((step, index) => {
		return (
			<div className="item" key={index}>
				<i className=" close icon" onClick={(e) => props.remove(step)} />
				<div className="content">
					<p className="medium header">Step {index + 1}</p>
					<p>{step}</p>
				</div>
			</div>
		);
	});

	return <div className="ui middle aligned divided list">{steps}</div>;
};

export default CookingDirectionsList;
