import React from 'react';

const CategoryList = (props) => {
	const categories = props.categories.map((category, index) => {
		return (
			<div className="ui horizontal list " key={index}>
				<button className="ui labeled icon teal button" type="button" onClick={(e) => props.remove(category)}>
					<i className="close icon" />
					{category}
				</button>
			</div>
		);
	});

	return <div>{categories}</div>;
};

export default CategoryList;
