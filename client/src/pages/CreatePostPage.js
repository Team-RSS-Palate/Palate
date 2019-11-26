import React from 'react';
import '../styles/PostStyles.css';
import CategoryList from '../components/CategoryList';

import buildingBlocks from '../images/building_blocks.svg';

class CreatePostPage extends React.Component {
	state = {
		category: '',
		categoryList: []
	};

	onAddItem = (e) => {
		this.setState({
			categoryList: this.state.categoryList.concat(this.state.category)
		});
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
					<form className="ui big form ">
						<div className="fields">
							<div className="col-sm-12 col-lg-6 field">
								<div className="subHeading">Recipe name</div>
								<input type="text" placeholder="Recipe Name" />
							</div>

							<div className="col-sm-12 col-lg-3 field">
								<div className="subHeading">Number of servings</div>
								<input type="text" placeholder="State" />
							</div>

							<div className="col-sm-12 col-lg-3 field">
								<div className="subHeading">Cook time</div>
								<input type="text" placeholder="Zip" />
							</div>
						</div>
						<div className="fields">
							<div className="col-sm-12 col-lg-6 field">
								<div className="subHeading">Add tags to your recipe!</div>
								<div className="ui action input">
									<input
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
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default CreatePostPage;
