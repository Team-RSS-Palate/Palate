import React from 'react';
import buildingBlocks from '../images/building_blocks.svg';

const rightSide = {
	marginTop: '13%',
	paddingBottom: '88px'
};
const leftSide = {
	marginTop: '10%',
	fontSize: '48px',
	fontFamily: 'Roboto',
	color: 'rgba(0, 0, 0, 0.85)',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: '61px',
	overflow: 'hidden'
};

const paragraphStyles = {
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: '20px',
	lineHeight: '28px',
	color: '#5B5B5B',
	height: '56px'
};
class CreatePostPage extends React.Component {
	render() {
		return (
			<div>
				<div style={{ background: '#FAFAFA' }}>
					<div className="ui container ">
						<div className="ui grid">
							<div className="eight wide column">
								<h1 style={leftSide}>Build your own recipe!</h1>
								<p style={paragraphStyles}>Create your own recipes and share it with the world!</p>
							</div>
							<div style={rightSide} className="eight wide column">
								<img
									alt="Bricks"
									style={{
										width: '484px',
										height: '302px'
									}}
									src={buildingBlocks}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="ui form">
					<div className="inline fields">
						<div className="eight wide field">
							<label>Name</label>
							<input type="text" placeholder="First Name" />
						</div>
						<div className="three wide field">
							<input type="text" placeholder="Middle Name" />
						</div>
						<div className="five wide field">
							<input type="text" placeholder="Last Name" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreatePostPage;
