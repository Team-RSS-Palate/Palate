import React from 'react';

const CategoryList = (props) => {
	const categories = props.categories.map((category, index) => {
		return (
			<p className="ui label" key={index}>
				{category}
			</p>
		);
	});

	return <div className="ui horizontal list ui teal labels">{categories}</div>;
};

export default CategoryList;
