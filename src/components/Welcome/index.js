import React, { Component } from 'react';
import logo from './af-logo.png';
import './styles.css';

class Welcome extends Component {
	render() {
		return (
			<div className="welcome">
				<header className="welcome-header">
					<img src={logo} className="welcome-logo" alt="logo" />
					<h1 className="welcome-title">Welcome to Aria Fritta</h1>
				</header>
				<p className="welcome-intro">
					To get started, edit <code>src/components/Home/index.js</code> and
					save to reload.
				</p>
			</div>
		);
	}
}

export default Welcome;
