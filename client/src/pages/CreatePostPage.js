import React from 'react';
import { Redirect } from 'react-router-dom';
import { storage } from '../firebase';

import CategoryList from '../components/CategoryList';
import IngredientList from '../components/IngredientList';
import CookingDirectionsList from '../components/CookingDirectionsList';
// import ImageUpload from '../components/ImageUpload';

import buildingBlocks from '../images/building_blocks.svg';
import foto from '../images/undraw_searching_p5ux.png';
import '../styles/PostStyles.css';

class CreatePostPage extends React.Component {
	state = {
		postTitle: '',
		postTitleError: '',
		postDescription: '',
		category: '',
		categoryList: [],
		ingredient: '',
		ingredientList: [],
		ingredientsError: '',
		step: '',
		stepsList: [],
		ingredientsError: '',
		categoryError: '',
		success: false,
		error: false,
		image: '',
		imageURL: '',
		progress: 0
	};
	handleChange = (e) => {
		const image = e.target.files[0];
		this.setState(
			() => ({ image }),
			() => {
				const { image } = this.state;
				const uploadTask = storage.ref(`images/${image.name}`).put(image);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						// progress function ....
						const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
						this.setState({ progress });
					},
					(error) => {
						// error function ....
						console.log(error);
					},
					() => {
						// complete function ....
						storage.ref('images').child(image.name).getDownloadURL().then((url) => {
							console.log(url);
							this.setState({ imageURL: url });
						});
					}
				);
			}
		);
	};
	// validateForm = () => {
	// 	let postTitleError = '';
	// 	let categoryError = '';
	// 	let ingredientsError = '';

	// 	if (!this.state.postTitle) {
	// 		postTitleError = 'Please enter a recipe name';
	// 	}
	// 	if (postTitleError) {
	// 		this.setState({ postTitleError });
	// 		return false;
	// 	}
	// 	if (!this.state.category) {
	// 		categoryError = 'Please enter a category';
	// 	}
	// 	if (categoryError) {
	// 		this.setState({ categoryError });
	// 		return false;
	// 	}
	// 	if (!this.state.ingredient) {
	// 		ingredientsError = 'Please enter ingredients';
	// 	}
	// 	if (ingredientsError) {
	// 		this.setState({ ingredientsError });
	// 		return false;
	// 	}
	// 	return true;
	// };

	onFormSubmit = (e) => {
		e.preventDefault();
		// const isValid = this.validateForm();

		// if (isValid) {
		// 	console.log(this.state);
		// }
	};
	//update recipeName
	onTitleChange = (e) => {
		this.setState({ postTitle: e.target.value });
	};
	onTitleChange = (e) => {
		this.setState({ postTitle: e.target.value });
	};
	onDescriptionChange = (e) => {
		this.setState({ description: e.target.value });
	};
	//add to the ingredients array
	onAddIngredient = (e) => {
		this.setState({ ingredientList: this.state.ingredientList.concat(this.state.ingredient) }, () => {
			this.setState({ ingredient: '' });
		});
	};
	onDeleteIngredient = (e) => {
		const newList = this.state.ingredientList.filter((ingredient) => {
			return ingredient !== e;
		});

		this.setState({
			ingredientList: [ ...newList ]
		});
	};

	onAddStep = (e) => {
		this.setState({ stepsList: this.state.stepsList.concat(this.state.step) }, () => {
			this.setState({ step: '' });
		});
	};

	onDeleteStep = (e) => {
		const newList = this.state.stepsList.filter((step) => {
			return step !== e;
		});
		this.setState({ stepsList: [ ...newList ] });
	};

	//add to the category array
	onAddCategory = (e) => {
		this.setState({ categoryList: this.state.categoryList.concat(this.state.category) }, () => {
			this.setState({ category: '' });
		});
	};
	onDeleteCategory = (e) => {
		const newList = this.state.categoryList.filter((category) => {
			return category !== e;
		});

		this.setState({
			categoryList: [ ...newList ]
		});
	};

	onSavePost = (event) => {
		fetch('/api/posts/', {
			//fetch data from the API || get the posts from the database
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: this.state.postTitle,
				description: this.state.description,
				ingredients: this.state.ingredientList,
				instructions: this.state.stepsList,
				image: this.state.imageURL,
				categories: this.state.categoryList
			})
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error('Content validation');
			})
			.then((post) => {
				this.setState({ success: true });
			})
			.catch((err) => {
				this.setState({ error: true });
			});
	};

	render() {
		if (this.state.success) return <Redirect to="/" />;

		let errorMessage = null;
		if (this.state.error) {
			errorMessage = <div className="alert alert-danger">"There was an error saving this post."</div>;
		}
		return (
			<div>
				{errorMessage}
				<div style={{ background: '#FAFAFA' }}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-6">
								<div className="heading">Build your own recipe!</div>
								<p className="paragraphStyles">
									Craft your own master piece and share it with the world!
								</p>
							</div>
							<div className="col-sm-12 col-md-12 col-lg-6 rightSide">
								<img
									alt="Bricks"
									style={{
										width: '100%',
										height: '100%'
									}}
									src={buildingBlocks}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="container formContainer">
					<form className="ui big form " onSubmit={this.onFormSubmit}>
						<div className="fields">
							<div className="col-sm-12 col-lg-6 field">
								<div className="subHeading">Recipe name</div>
								<input
									name="recipe name"
									onChange={this.onTitleChange} // possibly remove this since value of it will be the title
									type="text"
									placeholder="Recipe Name"
								/>
								{this.state.postTitleError ? (
									<div className="ui pointing red basic label">{this.state.postTitleError}</div>
								) : null}
							</div>

							<div className="col-sm-12 col-lg-6 field">
								<div className="subHeading">Description</div>
								<textarea
									rows="2"
									name="recipe name"
									onChange={this.onDescriptionChange} // possibly remove this since value of it will be the title
									type="text"
									placeholder="Describe your Recipe in a few words"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-6 field">
								<div className="subHeading">Ingredients</div>
								<div className="ui action input">
									<textarea
										rows="3"
										value={this.state.ingredient}
										type="text"
										onChange={(e) => this.setState({ ingredient: e.target.value })}
										placeholder="2 eggs"
									/>
									<button className="ui icon button" type="button" onClick={this.onAddIngredient}>
										<i className="plus icon" />
									</button>
								</div>

								{this.state.ingredientsError ? (
									<div className="ui pointing red basic label">{this.state.ingredientsError}</div>
								) : null}
								<IngredientList
									remove={this.onDeleteIngredient}
									ingredients={this.state.ingredientList}
								/>
							</div>

							<div className="col-sm-12 col-md-12 col-lg-6 field">
								<div className="subHeading">Cooking Directions</div>
								<div className="ui action input">
									<textarea
										rows="3"
										name="step"
										value={this.state.step}
										type="text"
										onChange={(e) => this.setState({ step: e.target.value })}
										placeholder="Please add each direction step by step"
									/>
									<button className="ui icon button" type="button" onClick={this.onAddStep}>
										<i className="plus icon" />
									</button>
								</div>

								{/* {this.state.ingredientsError ? (
									<div className="ui pointing red basic label">{this.state.ingredientsError}</div>
								) : null} */}
								<CookingDirectionsList remove={this.onDeleteStep} ingredients={this.state.stepsList} />
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-6 field">
								<div className="subHeading">Add tags to your recipe!</div>
								<div className="ui action input">
									<input
										value={this.state.category}
										type="text"
										onChange={(e) => this.setState({ category: e.target.value })}
										placeholder="Salad, Breakfast, Soup"
									/>
									<button className="ui icon button" type="button" onClick={this.onAddCategory}>
										<i className="plus icon" />
									</button>
								</div>
								{this.state.categoryError ? (
									<div className="ui pointing red basic label">{this.state.categoryError}</div>
								) : null}
								<CategoryList remove={this.onDeleteCategory} categories={this.state.categoryList} />
							</div>

							<div className="col-sm-12 col-md-12 col-lg-6 ">
								<div className="subHeading">Upload image</div>
								<input type="file" onChange={this.handleChange} />
								<div>
									{' '}
									<progress value={this.state.progress} max="100" />
									<img
										className="ui small centered round image"
										src={
											this.state.imageURL || 'https://semantic-ui.com/images/wireframe/image.png'
										}
										alt="Uploaded image"
									/>
								</div>
							</div>
						</div>
						<div style={{ marginTop: '3%' }}>
							<button
								style={{ background: '#FB5B63' }}
								className="ui right floated large  teal button"
								type="submit"
								onClick={this.onSavePost}
							>
								Save Recipe
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CreatePostPage;
