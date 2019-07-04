import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ProductsDesktop from './desktop';
import data from 'data';

class Products extends Component {
	render() {
		const { meta_title, meta_description } = data.home;
		return (
			<div className="products">
				<Helmet>
					<title>{meta_title}</title>
					<meta name="description" content={meta_description} />
				</Helmet>
				<ProductsDesktop />
			</div>
		);
	}
}

export default Products;
