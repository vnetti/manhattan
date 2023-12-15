import { createBrowserRouter } from 'react-router-dom';
import Layout from '~@components/layout';
import Home from "~@screens/Home";
import Menu from "~@screens/Home/Menu";

const routers = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Layout></Layout>,
		children: [
			{
				path: '/',
				element: <Home/>
			},
			{
				path: '/menu',
				element: <Menu/>
			}
		]
	}
]);

export default routers;
