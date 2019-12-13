import React from 'react';
import Post from '../components/Post';
import { Redirect } from 'react-router-dom';

class ShowPostPage extends React.Component {
	state = {
		post: null,
		notFound: false
	};

	componentDidMount() {
		const { id } = this.props.match.params;
		fetch('/api/posts/' + id)
			.then((res) => res.json())
			.then((post) => {
				this.setState({
					post: <Post {...post} />
				});
			})
			.catch((err) => {
				this.setState({
					notFound: true
				});
			});
	}
	show = () => {
		console.log(this.state.post.props.image);
	};
	render() {
		if (this.state.notFound) return <Redirect to="/" />;
		return (
			<div className="container">
				{this.state.post ? (
					<img src={this.state.post.props.image} className="img-fluid" alt="Responsive image" />
				) : null}
				<button onClick={this.show}>touch me</button>
			</div>
		);
	}
}

export default ShowPostPage;
