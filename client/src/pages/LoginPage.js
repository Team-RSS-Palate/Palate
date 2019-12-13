import React from 'react';
import burger from '../images/undraw_Hamburger_8ge6.svg';

class LogInPage extends React.Component {
	render() {
		const headingStyles = {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '52px',
			lineHeight: '61px',
			color: '#000000',
			marginBottom: '10%'
		};
		const secondHeadingStyles = {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '32px',
			lineHeight: '61px',
			color: '#333',
			marginBottom: '0%'
		};
		const inputStyles = {
			border: '1px solid #D5D5D5',
			borderLeft: 'none',
			borderTop: 'none',
			borderRight: 'none',
			width: '395px',
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: '18px',
			lineHeight: '21px',
			letterSpacing: '0.02em',
			color: '#A9A9A9',
			outline: 'none'
		};
		const tinyLabelStyles = {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: '14px',
			lineHeight: '16px',
			color: '#767676'
		};
		const buttonStyles = {
			width: '397px',
			height: '60px',
			left: '122px',
			top: '682px',
			background: '#FD5C63',
			borderRadius: '100px',
			border: 'none',
			marginTop: '15%',
			fontWeight: '500',
			fontSize: '18px',
			textAlign: 'center',
			color: '#FFFFFF',
			outline: 'none'
		};
		const signupLabeltyles = {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '14px',
			lineHeight: '16px',
			textAlign: 'center',
			letterSpacing: '0.02em'
		};
		const signupLabeltylesRed = {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '14px',
			lineHeight: '16px',
			textAlign: 'center',
			letterSpacing: '0.02em',
			color: '#FD5C63'
		};

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div style={{ marginTop: '40%', marginBottom: '60%' }}>
							<h1 style={headingStyles}>Log in</h1>
							<div>
								<form>
									<div>
										<p style={tinyLabelStyles}>Email address</p>
										<input placeholder="JonSnow@gmail.com" style={inputStyles} type="Email" />
									</div>
									<div style={{ marginTop: '5%' }}>
										<p style={tinyLabelStyles}>Password</p>
										<input placeholder="Enter your password" style={inputStyles} type="password" />
									</div>
									<button style={buttonStyles}>Log in</button>
									<div style={{ marginTop: '10%' }}>
										<span style={signupLabeltyles}>Don’t have an account?</span>
										<span style={signupLabeltylesRed}> Sign up</span>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-6" style={{ background: 'rgba(253, 92, 99, 0.5)' }}>
						<div style={{ marginLeft: '100px', marginTop: '190px' }}>
							<h2 style={secondHeadingStyles}>Welcome back!</h2>
							<p style={{ fontSize: '18px', color: '#333', width: '229px', fontFamily: 'Roboto' }}>
								Enter your personal info to begin your journey with us
							</p>
							<img
								src={burger}
								alt="burger"
								style={{
									width: '100%',
									height: '100%'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LogInPage;
