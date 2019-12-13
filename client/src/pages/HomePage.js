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
				<div className=" h1 mx-auto" style={{ width: '300px', marginTop: '5%', marginBottom: '5%' }}>
					Browse by cuisine
				</div>
				<ChoiceSlider />
				<div className="container">
					<div style={{ marginTop: '5%' }} className="card-columns">
						{this.state.posts}
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
