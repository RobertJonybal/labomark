import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import route from 'route';
import images from 'images';
import './styles.css';

class TopMenu extends Component {
	render() {
		return (
			<header className="top-menu-desktop">
				<section className="logo">
					<NavLink to={route('root')}>
						<img alt="logo" src={images.logo} />
					</NavLink>
				</section>
				<nav>
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
						<li class="social">
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="media-link"
							>
								<img
									alt="img"
									src={images.facebook}
									width="35"
									height="35"
									border="0"
								/>
							</a>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="media-link"
							>
								<img
									alt="img"
									src={images.instagram}
									width="35"
									height="35"
									border="0"
								/>
							</a>
						</li>
					</ul>
				</nav>
			  <hr />
			</header>
		);
	}
}

export default TopMenu;
