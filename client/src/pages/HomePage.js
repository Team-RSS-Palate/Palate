import React from 'react';
import ChoiceSlider from '../components/ChoiceSlider';
import Post from '../components/Post';
import '../styles/Slider.css';

class HomePage extends React.Component {
	state = {
		posts: []
	};

	componentDidMount() {
		fetch('/api/posts')
			.then((res) => res.json())
			.then((posts) => {
				this.setState({
					// loading: false,
					posts: posts.map((p, ii) => <Post {...p} key={ii} />)
				});
			})
			.catch((err) => console.log('API ERROR: ', err));
	}
	render() {
		return (
			<div>
				<ChoiceSlider />
				<div className="container">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
						<div className="col mb-4">{this.state.posts}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
