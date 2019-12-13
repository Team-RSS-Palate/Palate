import React from 'react';
import { Link } from 'react-router-dom';

function Post({ title, description, image, categories, createdAt, id }) {
	return (
		<div className="card h-100">
			<Link to={'/posts/' + id}>
				<img src={image} className="card-img-top" alt={title} />
			</Link>

			<div className="card-body">
				<div className="card-title">
					<Link to={'/posts/' + id} style={{ color: 'black', textDecoration: 'none' }}>
						<h5 style={{ fontWeight: 'bold' }}>{title}</h5>
					</Link>
				</div>
				<a className="ui basic label">
					<i className="utensils  icon" />
					{categories.map((category, index) => <span>{category + '  '}</span>)}
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
