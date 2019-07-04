import React, { Component } from 'react';
import { Player } from 'video-react';
import images from 'images';
import Tile from 'components/Tile';
import './styles.css';
import { NavLink } from 'react-router-dom';
import route from 'route';
import 'video-react/dist/video-react.css';

class Home extends Component {
	render() {
		return (
			<div className="home-desktop">
				<Player
					ref="player"
					autoPlay
					loop
				>
					<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
				</Player>
				<div className="products-preview">
					<div>
						<div>
							<h1>UF</h1>
							<NavLink exact to={route('products')}>
								<h3>Spectroelectrochemistry</h3>
							</NavLink>
						</div>
					</div>
					<div>
						<div>
							<h1>OXY</h1>
							<NavLink exact to={route('products')}>
								<h3>Determination Kits</h3>
							</NavLink>
						</div>
					</div>
				</div>
				<Tile image={images.montain} alt={'montain'}>
					<h1>
						Climbing heights of complexity
						<br />
						<br />
						to give you USER FRIENDLY products
					</h1>
				</Tile>
				<div className="dark">
					<div className="map-info">
						<strong>Spreading science around the world</strong>
						<img src={images.map} alt={'map'} />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
