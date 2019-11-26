import React from 'react';

const CategoryList = (props) => {
	const categories = props.categories.map((category, index) => {
		return (
			<p class="ui teal label" key={index}>
				{category}
			</p>
		);
	});

	return <div className="ui horizontal list ui red labels">{categories}</div>;
};

export default CategoryList;
