import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ContactsDesktop from './desktop';
import data from 'data';

class Contacts extends Component {
	render() {
		const { meta_title, meta_description } = data.contacts;
		return (
			<div className="contacts">
				<Helmet>
					<title>{meta_title}</title>
					<meta name="description" content={meta_description} />
				</Helmet>
				<ContactsDesktop />
			</div>
		);
	}
}

export default Contacts;
