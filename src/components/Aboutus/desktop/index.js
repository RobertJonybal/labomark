import React, { Component } from 'react';
import images from 'images';
import './styles.css';


class Aboutus extends Component {
	render() {
		return (
			<div className="aboutus-desktop">
				<div className="divimg city">
					<img src={images.city} alt={'city'}/>
					<div class="top-left-city">
						<text>
							LabOmak is<br></br>
							Science and Research
						</text>
					</div>
					<div class="top-right">
						<text>
							Our team is composed of<br></br>
							the best researchers &<br></br>
							PHD professors in the country
						</text>
					</div>
				</div>
				<div className="profile">
					<h2 className="head">Founder</h2>
					<div className="founder">
						<img src={images.founder} alt={'founder'}/>
					</div>
					<br></br>
					<h2>Rino Gattuso</h2>
					<br></br>
					<text>
						"In my PHD, I had the opportunity to meet fantastic
						<br></br>
						people, best local professors and companies, they
						<br></br>
						gave me access to this world. Day after day it's
						<br></br>
						become my passion and now with LabOmak is my life."
					</text>
				</div>
				<div className="divimg plane">
					<img src={images.plane} alt={'plane'}/>
					<div className="contact-button">
						{/* Link Required */}
						<a href="#">
							<button>Contact Us</button>
						</a>
					</div>
					<div className="top-left-plane">
						<text>
							Have you ideas and<br></br>
							projects in the garage, which<br></br>
							you can't finish alone?
						</text>
					</div>
				</div>
			</div>
		);
	}
}

export default Aboutus;
