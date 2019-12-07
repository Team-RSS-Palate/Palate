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

	render() {
		if (this.state.notFound) return <Redirect to="/" />;
		return this.state.post;
	}
}

export default ShowPostPage;
