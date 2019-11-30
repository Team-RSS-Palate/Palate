import React from 'react';

const CategoryList = (props) => {
	const categories = props.categories.map((category, index) => {
		return (
			<button
				key={index}
				className="ui labeled icon teal button"
				type="button"
				onClick={(e) => props.remove(category)}
			>
				<i className="close icon" />
				{category}
			</button>
		);
	});

	return <div className="ui horizontal list ">{categories}</div>;
};

export default CategoryList;
