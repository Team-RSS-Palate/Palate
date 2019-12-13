import React from 'react';
import Post from '../components/Post';
import { Redirect } from 'react-router-dom';
import '../styles/ShowPage.css';
import Guy from '../images/guyPic.jpg';
import Girl from '../images/girlPic.jpg';

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
					<div className="row">
						<div className="col-sm-12 col-md-12 col-lg-6">
							<div>
								<h1 style={{ marginTop: '5%' }} className="title">
									{this.state.post.props.title}
								</h1>
							</div>
							<div className="itemContainer">
								<h2 className="showPageSubHeading">Description</h2>
								<p className="description">{this.state.post.props.description}</p>
							</div>
							<div className="itemContainer">
								<h2 className="showPageSubHeading">Ingredients</h2>
								<ul>
									{this.state.post.props.ingredients.map((ingredient, i) => (
										<li style={{ listStyleType: 'none' }}>
											<div key="iii" className="ui checkbox">
												<input
													style={{ height: '15px', width: '15px', marginRight: '2%' }}
													type="checkbox"
												/>
												<label className="itemList">{ingredient} </label>
											</div>
										</li>
									))}
								</ul>
							</div>
							<div className="itemContainer">
								<h2 className="showPageSubHeading">Cooking Instructions</h2>
								<ul>
									{this.state.post.props.instructions.map((instruction, index) => (
										<div key="index" className="ui checkbox" style={{ marginTop: '3%' }}>
											<li style={{ listStyleType: 'none' }}>
												{/* <p >}</p> */}
												<input
													style={{ height: '15px', width: '15px', marginRight: '2%' }}
													type="checkbox"
												/>

												<label className="itemList">
													<span className="stepStyle">Step {index + 1}</span> {instruction}
												</label>
											</li>
										</div>
									))}
								</ul>
							</div>
							<div className="itemContainer">
								<h2 className="showPageSubHeading">Comments</h2>

								<div class="ui comments">
									<div class="comment">
										<a class="avatar">
											<img src={Guy} />
										</a>
										<div class="content">
											<a class="author">Joe Henderson</a>
											<div class="metadata">
												<div class="date">1 day ago</div>
											</div>
											<div class="text">
												<p>
													The hours, minutes and seconds stand as visible reminders that your
													effort put them all there.{' '}
												</p>
												<p>
													Preserve until your next run, when the watch lets you see how
													Impermanent your efforts are.
												</p>
											</div>
											<div class="actions">
												<a class="reply">Reply</a>
											</div>
										</div>
									</div>
									<div class="comment">
										<a class="avatar">
											<img src={Girl} />
										</a>
										<div class="content">
											<a class="author">Christian Rocha</a>
											<div class="metadata">
												<div class="date">2 days ago</div>
											</div>
											<div class="text">I re-tweeted this.</div>
											<div class="actions">
												<a class="reply">Reply</a>
											</div>
										</div>
									</div>
									<form class="ui reply form">
										<div class="field">
											<textarea />
										</div>
										<div class="ui primary submit labeled icon button">
											<i class="icon edit" /> Add Comment
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="col-sm-12 col-md-12 col-lg-6">
							<img style={{ marginTop: '8%' }} src={this.state.post.props.image} className="img-fluid ui round image" alt="Responsive image" />
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default ShowPostPage;
