import React, { Component } from 'react';
import Helmet from 'react-helmet';
import AboutusDesktop from './desktop';
import data from 'data';

class Aboutus extends Component {
	render() {
		const { meta_title, meta_description } = data.contacts;
		return (
			<div className="aboutus">
				<Helmet>
					<title>{meta_title}</title>
					<meta name="description" content={meta_description} />
				</Helmet>
				<AboutusDesktop />
			</div>
		);
	}
}

export default Aboutus;
