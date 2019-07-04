import React, { Component } from 'react';
import TopMenuDesktop from './desktop/index';
import TopMenuMobile from './mobile/index';
import Responsive from 'responsive';

class TopMenu extends Component {
	render() {
		return (
			<div className="tophome">
				<Responsive device="desktop">
					<TopMenuDesktop />
				</Responsive>
				<Responsive device="!desktop">
					<TopMenuMobile />
				</Responsive>
			</div>
		);
	}
}

export default TopMenu;
