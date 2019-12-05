import React, { Component } from 'react';
import { storage } from '../firebase';

class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			url: '',
			progress: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}
	//update the image state
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
							this.setState({ url });
						});
					}
				);
			}
		);
	};

	render() {
		return (
			<div>
				<progress value={this.state.progress} max="100" />
				<input type="file" onChange={this.handleChange} />
				<div className="ui small rounded image">
					<img src={this.state.url} />
				</div>
			</div>
		);
	}
}

export default ImageUpload;
