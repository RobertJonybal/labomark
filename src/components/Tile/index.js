import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Tile extends Component {
	render() {
		const { children, image, top, alt } = this.props;

		return (
			<div className="tile">
				<img className="tile-image" src={image} alt={alt} />
				<div
					className="tile-text"
					style={{
						top: top ? `${top}%` : '50%'
					}}
				>
					{children}
				</div>
			</div>
		);
	}
}

Tile.propTypes = {
	image: PropTypes.any.isRequired,
	alt: PropTypes.string.isRequired,
	top: PropTypes.number
};

export default Tile;
