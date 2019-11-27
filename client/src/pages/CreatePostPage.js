import React from 'react';
import '../styles/PostStyles.css';
import CategoryList from '../components/CategoryList';
import axios from 'axios';
import buildingBlocks from '../images/building_blocks.svg';

class CreatePostPage extends React.Component {
	state = {
		category: '',
		categoryList: [],
		selectedFile: null,
		postTitle: '',
		postTitleError: '',
		categoryError: ''
	};
	validateForm = () => {
		let postTitleError = '';
		let categoryError = '';

		if (!this.state.postTitle) {
			postTitleError = 'A recipe must have a name';
		}
		if (postTitleError) {
			this.setState({ postTitleError });
			return false;
		}
		return true;
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		const isValid = this.validateForm();
		if (isValid) {
			console.log(this.state);
		}
	};
	//update recipeName
	onTitleChange = (e) => {
		this.setState({ postTitle: e.target.value });
	};

	onAddItem = (e) => {
		this.setState({
			categoryList: this.state.categoryList.concat(this.state.category)
		});
	};

	onFileSelected = (e) => {
		this.setState({ selectedFile: e.target.files[0] });
	};
	// onFileUpload = (e) => {
	// 	const fd = new FormData();
	// 	fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
	// 	axios.post('');
	// };
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
								<div className="subHeading">Add tags to your recipe!</div>
								<div className="ui action input">
									<input
										value={this.state.CategoryList}
										type="text"
										onChange={(e) => this.setState({ category: e.target.value })}
										placeholder="Salad, Breakfast, Soup"
									/>
									<button className="ui icon button" type="button" onClick={this.onAddItem}>
										<i className="plus icon" />
									</button>
								</div>
								<CategoryList categories={this.state.categoryList} />
							</div>
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
						<button type="submit">submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default CreatePostPage;
