import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from 'libraries/registerServiceWorker';
import route from 'route';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Home from 'components/Home';
import TopMenu from 'components/TopMenu';
import Footer from 'components/Footer';
import Products from 'components/Products';
import Contacts from 'components/Contacts';
import Aboutus from 'components/Aboutus';

ReactDOM.render(
	<div className="app">
		<BrowserRouter>
			<ScrollToTop>
				<div>
					<TopMenu />
					<Switch>
						<Route exact path={route('products')} component={Products} />
						<Route exact path={route('root')} component={Home} />
						<Route exact path={route('contacts')} component={Contacts} />
						<Route exact path={route('aboutus')} component={Aboutus} />
					</Switch>
					<Footer />
				</div>
			</ScrollToTop>
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
