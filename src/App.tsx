import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import routers from '~@configs/routers';
import { store } from '~@store';

function App() {
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={routers} />
			</Provider>
		</>
	);
}

export default App;
