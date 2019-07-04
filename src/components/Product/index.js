import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Product extends Component {
	render() {
		const { title, description, image } = this.props;

		return (
			<div className="product">
				<h2>{title}</h2>
				<p class="desc">{description}</p>
				<img src={image} alt={'product-image'} />
				<a class = "button" href="mailto:foo@email.com">ORDER NOW</a>
			</div>
		);
	}
}

Product.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired
};

export default Product;
