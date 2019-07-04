import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import route from 'route';
import images from 'images';
import './styles.css';

class FooterDesktop extends Component {
	render() {
		return (
			<div className="footer-desktop">
				<div>
					<img src={images.logoFooter} alt="logo-footer" />
					<div>
						LabOmak Copyright @ 2015 All rights reserved
						<br />
						SIENA - ITALY
						<br />
						P.IVA 	01374500526
					</div>
				</div>
				<div className="Navbar">
					<NavLink exact to={route('root')}>
						<a>HOME</a>
					</NavLink>
					<NavLink exact to={route('aboutus')}>
						<a>ABOUT US</a>
					</NavLink>
					<NavLink exact to={route('products')}>
						<a>PRODUCTS</a>
					</NavLink>
					<NavLink exact to={route('contacts')}>
						<a>CONTACTS</a>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default FooterDesktop;
