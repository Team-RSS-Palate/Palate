import React from 'react';
import { Link } from 'react-router-dom';

function Post({ title, description, image, categories, createdAt, id }) {
	return (
		<div className="card h-100">
			<img src={image} className="card-img-top" alt={title} />
			<div className="card-body">
				<div className="card-title">
					<h5 style={{ fontWeight: 'bold' }}>{title}</h5>
				</div>
				<a className="ui basic label">
					<i className="utensils  icon" />
					{categories}
				</a>
				<p className="card-text">{description}</p>
			</div>
			<div className="card-footer">
				<small className="text-muted">{createdAt}</small>
			</div>
		</div>
	);
}

export default Post;
