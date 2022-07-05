import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {inspirations} from './data';
import Details from './pages/Details';
import Events from './pages/Events';
import Home from './pages/index';
export default function App() {
	console.log(inspirations);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home inspirations={inspirations} />} />
					</Route>
					<Route path="/details/:id" element={<Details inspirations={inspirations} />} />
					<Route path="/events" element={<Events />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
