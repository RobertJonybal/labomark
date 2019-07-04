import { formatRoute } from 'react-router-named-routes';
import { NavLink } from 'react-router-dom';

const routes = {
	root: '/',
	products: '/products',
	aboutus: '/aboutus',
	contacts: '/contacts'
};

export { NavLink };
export default function(routeName, routeProps = {}) {
	const selectedRoute = routes[ routeName ];
	if (!selectedRoute) {
		throw new Error(`Can't find route for route name '${routeName}'`);
	}
	return formatRoute(selectedRoute, routeProps);
}
