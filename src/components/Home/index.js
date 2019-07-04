import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HomeDesktop from './desktop';
import data from 'data';

class Home extends Component {
	render() {
		const { meta_title, meta_description } = data.home;
		return (
			<div className="home">
				<Helmet>
					<title>{meta_title}</title>
					<meta name="description" content={meta_description} />
				</Helmet>
				<HomeDesktop />
			</div>
		);
	}
}

export default Home;
