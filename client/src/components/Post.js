import React from 'react';
import { Link } from 'react-router-dom';

function Post({ title, description, image, categories, createdAt, id }) {
	return (
		<div class="card">
			<div class="image">
				<img src={image} />
			</div>
			<div class="content">
				<div class="header">{title}</div>
				<div class="meta">
					<a>{categories}</a>
				</div>
				<div class="description">{description}</div>
			</div>
			<div class="extra content">
				<span class="right floated">{createdAt}</span>
				{/* <span>
					<i class="user icon" />
					75 Friends
				</span> */}
			</div>
		</div>
	);
}

export default Post;
