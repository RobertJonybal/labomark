import React, { Component } from 'react';
// import images from 'images';
// import Tile from 'components/Tile';
import './styles.css';

class Contacts extends Component {
	render() {
		return (
			<div className="contacts-desktop">
				<div>
					<h2 class="title">Contacts</h2>
				</div>
				<div className="ContactCard">
					<text>
						<h2 class="name">Sede Legale</h2>
						<p>Strada di guistrigona 3, Guistringona</p>
						<p>Castenuovo Berardena - Siena</p>
					</text>
				</div>
				<div className="contact-button">
					{/* Link Required */}
					<a href="#">
						<button>Contact Us</button>
					</a>
				</div>
				<div className="ContactCard">
					<text>
						<h2 class="name">Info</h2>
						<p>Copyright © 2015 LabOmak</p>
						<p>P.IVA 01374500526</p>
						<p>Tel: +39 338 8677807</p>
					</text>
				</div>

			</div>
		);
	}
}

export default Contacts;
