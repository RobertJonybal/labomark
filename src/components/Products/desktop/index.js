import React, { Component } from 'react';
import Product from 'components/Product';
import images from 'images';
import './styles.css';

class Products extends Component {
	constructor(props) {
		super(props);

		this.products = [
			{
				text: 'UF - Spectroelectrochemistry',
				component: this.uf,
				title: this.uftitle
			},
			{
				text: 'OXY - Determination Kits',
				component: this.oxy,
				title: this.oxytitle
			}
		];
	}

	state = {
		selected: 0
	};

	render() {
		const { selected } = this.state;
		return (
			<div className="products-desktop">
				<div className="switch-products">
					{this.products.map((product, index) => (
						<div
							className="switch"
							onClick={() => {
								this.setState({ selected: index });
							}}
						>
							<div className={'txt'}>
								<h2>{product.text}</h2>
							</div>
						</div>
					))}
				</div>
				{this.products[ selected ].component()}
			</div>
		);
	}

	uf = () => (
		<div className="uf">
			<Product
				title="UF - SEC KIT"
				description="Spectroelectrochemistry has never been so EASY"
				image={images.uf_sec_kit}
			/>
			<div className="info">
				<img alt="spectrometer" src={images.uf_spectro} />
			</div>
			<div className="info product">
				<h2>Details</h2>
				<div className="products-preview">
					<div>
						<div>
							 <p>The UF-SEC makes possible to conduct thin layer Spectroelectrochemistry experiments in a simple and efficient way.</p>

							 <p>Being extremely versatile, any single component can be taken to pieces in a few seconds, for example in case of maintenance and/or windows / spacer changes.</p>

							 <p>The spacer, that contains the electrodes, can be rapidly changed by simply disassembling the cell.</p>

							 <p>UF-SEC FULL KIT can be used inside a common spectrophotometer or on a common laboratory table using optic fibers and the dedicated adaptor.</p>
						</div>
					</div>
					<div>
						<div>
							<img alt="uf_details" src={images.uf_details} />
						</div>
					</div>
				</div>
			</div>
			<div className="info">
				<img alt="uf_footer" src={images.uf_footer} />
			</div>
			<Product
				title="UF - CUVETTE HOLDER"
				description="for different Spectroelectrochemistry"
				image={images.uf_cuvette}
			/>
			<div className="info">
				<img alt="uf_components" src={images.uf_components} />
				<div className="component-text">
					<text>
						<h3>Components & Plugins</h3><br></br>
						Beautiful things are never alone
					</text>
				</div>
			</div>
			<div className="info components">
				<img alt="component1" class="cmpimg" src={images.uf_p_1} />
				<div class="overlay">
					<div class="overlaytext">
						<h3>Product Name</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ut orci at ultrices.</p>
						<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
						<a class = "button" href="mailto:foo@email.com">ORDER NOW</a>
					</div>
				</div>
			</div>
			<div className="info components">
				<img alt="component2" class="cmpimg" src={images.uf_p_2} />
				<div class="overlay">
					<div class="overlaytext">
						<h3>Optical Fiber Adapter</h3>
						<p>The UF-OFA adapter permits you to conduct Spectroelectrochemistry and Spectroelectrochemistry experiments using optic fibers.</p>
						<p>The adapter is 100% made of Derlin and can match with the following LabOmak products: </p>
						<a class = "button" href="mailto:foo@email.com">ORDER NOW</a>
					</div>
				</div>
			</div>
			<div className="info components">
				<img alt="component3" class="cmpimg" src={images.uf_p_3} />
				<div class="overlay">
					<div class="overlaytext">
						<h3>Product Name</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ut orci at ultrices.</p>
						<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
						<a class = "button" href="mailto:foo@email.com">ORDER NOW</a>
					</div>
				</div>
			</div>
			<div className="info components">
				<img alt="component4" class="cmpimg" src={images.uf_p_4} />
				<div class="overlay">
					<div class="overlaytext">
						<h3>Product Name</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit ut orci at ultrices.</p>
						<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
						<a class = "button" href="mailto:foo@email.com">ORDER NOW</a>
					</div>
				</div>
			</div>
		</div>
	);

	oxy = () => (
		<div className="oxy">
			<Product
				title="OXY - F&G"
				description="GSH Determination has never been so EASY"
				image={images.oxy_fast}
			/>
			<div className="info">
				<figure>
					<img alt="cell_culture" src={images.cell_culture} />
					<figcaption>Cell Culture</figcaption>
				</figure>
				<figure>
  				<img alt="animal_tissue" src={images.animal_tissue} />
  				<figcaption>Animal Tissue</figcaption>
				</figure>
				<figure>
				  <img alt="blood" src={images.blood} />
				  <figcaption>Blood</figcaption>
				</figure>
			</div>
			<div id="rectangle"></div>
			<Product
				title="OXY - ACCU"
				description="GSH Determination has never been so ACCURATE"
				image={images.oxy_accu_gsh}
			/>
			<div className="info">
				<figure>
				  <img alt="cell_culture" src={images.cell_culture} />
				  <figcaption>Cell Culture</figcaption>
				</figure>
				<figure>
				  <img alt="animal_tissue" src={images.animal_tissue} />
				  <figcaption>Animal Tissue</figcaption>
				</figure>
				<figure>
				  <img alt="blood" src={images.blood} />
				  <figcaption>Blood</figcaption>
				</figure>
			</div>
			<hr></hr>
		</div>
	);
}

export default Products;
