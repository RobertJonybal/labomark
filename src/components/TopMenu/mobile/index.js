import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import route from 'route';
import images from 'images';
import Hamburger from 'react-hamburgers';
import { CSSTransition } from 'react-transition-group';
import './styles.css';
import './hamburgers.css';

class TopMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}
	render() {
		const { showMenu } = this.state;
		return (
			<header className="top-menu-mobile">
				<div>
					<section className="logo">
						<NavLink to={route('root')}>
							<img alt="logo" src={images.logo} />
						</NavLink>
					</section>
					<section>
						<Hamburger
							active={showMenu}
							type="spring"
							onClick={() => this.setState({ showMenu: !showMenu })}
						/>
					</section>
				</div>
				<CSSTransition
					in={showMenu}
					timeout={300}
					classNames="top-menu-mobile-links"
					unmountOnExit
				>
					<nav
						onClick={() => {
							this.setState({ showMenu: false });
						}}
					>
						<ul>
							<li>
								<NavLink exact to={route('root')}>
									HOME
								</NavLink>
							</li>
							<li>
								<NavLink exact to={route('products')}>
									PRODUCTS
								</NavLink>
							</li>
							<li>
								<NavLink exact to={route('aboutus')}>
									ABOUT US
								</NavLink>
							</li>
							<li>
								<NavLink exact to={route('contacts')}>
									CONTACTS
								</NavLink>
							</li>
							{/*
								<li>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="facebook-link"
									>
										<img
											alt="img"
											src={images.facebook}
											width="30"
											height="30"
											border="0"
										/>
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											alt="img"
											src={images.instagram}
											width="30"
											height="30"
											border="0"
										/>
									</a>
								</li>
								*/}
						</ul>
					</nav>
				</CSSTransition>
			</header>
		);
	}
}

export default TopMenu;
