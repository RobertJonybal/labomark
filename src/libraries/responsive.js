import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
class Responsive extends Component {
	render() {
		const { device, children } = this.props;
		switch (device) {
		case 'mobile':
			return <MediaQuery maxWidth={767}>{children}</MediaQuery>;
		case '!mobile':
			return <MediaQuery minWidth={768}>{children}</MediaQuery>;
		case 'table':
			return (
				<MediaQuery minWidth={768} maxWidth={991}>
					{children}
				</MediaQuery>
			);
		case 'desktop':
			return <MediaQuery minWidth={992}>{children}</MediaQuery>;
		case '!desktop':
			return <MediaQuery maxWidth={991}>{children}</MediaQuery>;
		default:
			throw new Error(`Error: Can't find responsive device '${device}'`);
		}
	}
}

export default Responsive;
