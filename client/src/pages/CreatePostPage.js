import React from 'react';
import '../styles/PostStyles.css';
import CategoryList from '../components/CategoryList';
import IngredientList from '../components/IngredientList';
import CookingDirectionsList from '../components/CookingDirectionsList';

import buildingBlocks from '../images/building_blocks.svg';
import foto from '../images/undraw_searching_p5ux.png';
import axios from 'axios';

class CreatePostPage extends React.Component {
	state = {
		category: '',
		categoryList: [],
		ingredient: '',
		ingredientList: [],
		ingredientsError: '',
		step: '',
		stepsList: [],
		ingredientsError: '',
		selectedFile: null,
		postTitle: '',
		postTitleError: '',
		categoryError: ''
	};
	validateForm = () => {
		let postTitleError = '';
		let categoryError = '';
		let ingredientsError = '';

		if (!this.state.postTitle) {
			postTitleError = 'Please enter a recipe name';
		}
		if (postTitleError) {
			this.setState({ postTitleError });
			return false;
		}
		if (!this.state.category) {
			categoryError = 'Please enter a category';
		}
		if (categoryError) {
			this.setState({ categoryError });
			return false;
		}
		if (!this.state.ingredient) {
			ingredientsError = 'Please enter ingredients';
		}
		if (ingredientsError) {
			this.setState({ ingredientsError });
			return false;
		}
		return true;
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		const isValid = this.validateForm();

		// if (isValid) {
		// 	console.log(this.state);
		// }
	};
	//update recipeName
	onTitleChange = (e) => {
		this.setState({ postTitle: e.target.value });
	};
	//add to the ingredients array
	onAddIngredient = (e) => {
		this.setState(
			{
				ingredientList: this.state.ingredientList.concat(this.state.ingredient)
			},
			() => {
				this.setState({ ingredient: '' });
			}
		);
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
		this.setState(
			{
				stepsList: this.state.stepsList.concat(this.state.step)
			},
			() => {
				this.setState({ step: '' });
			}
		);
	};

	onDeleteStep = (e) => {
		const newList = this.state.stepsList.filter((step) => {
			return step !== e;
		});

		this.setState({
			stepsList: [ ...newList ]
		});
	};

	//add to the category array
	onAddCategory = (e) => {
		this.setState(
			{
				categoryList: this.state.categoryList.concat(this.state.category)
			},
			() => {
				this.setState({ category: '' });
			}
		);
	};
	onDeleteCategory = (e) => {
		const newList = this.state.categoryList.filter((category) => {
			return category !== e;
		});

		this.setState({
			categoryList: [ ...newList ]
		});
	};

	//update the state to the first index in the array, which is the picture
	onFileSelected = (e) => {
		this.setState({ selectedFile: e.target.files[0] });
	};
	// onFileUpload = (e) => {
	// 	const fd = new FormData();
	// 	fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
	// 	axios.post('');
	// };

	show = () => {
		console.log(this.state.ingredientList);
	};
	render() {
		return (
			<div>
				<div style={{ background: '#FAFAFA' }}>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-12 col-lg-6">
								<div className="header">Build your own recipe!</div>
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
									value={this.state.postTitle}
									name="recipe name"
									onChange={this.onTitleChange}
									type="text"
									placeholder="Recipe Name"
								/>
								{this.state.postTitleError ? (
									<div className="ui pointing red basic label">{this.state.postTitleError}</div>
								) : null}
							</div>

							<div className="col-sm-12 col-lg-3 field">
								<div className="subHeading">Number of servings</div>
								<input type="text" placeholder="Number of servings" />
							</div>

							<div className="col-sm-12 col-lg-3 field">
								<div className="subHeading">Cook time</div>
								<input type="text" placeholder="Cook Time" />
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
							<div style={{ marginTop: '3%' }} className="col-sm-12 col-md-12 col-lg-6 ">
								<div className="ui placeholder segment">
									<div className="ui icon header">
										<i className="file image outline icon" />
										Recipe Image Upload
										<input onChange={this.onFileSelected} type="file" />
										{/* <button className="ui primary button" onClick={this.onFileUpload} /> */}
									</div>
								</div>
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
						</div>
						<button onClick={this.show} className="ui medium orange button" type="submit">
							submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default CreatePostPage;
