import React from 'react';
import buildingBlocks from '../images/building_blocks.svg';

const rightSide = {
	marginTop: '15%'
};
const leftSide = {
	marginTop: '10%',
	fontSize: '52px',
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
	fontSize: '24px',
	lineHeight: '28px',
	color: '#5B5B5B'
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
			</div>
		);
	}
}

export default CreatePostPage;
