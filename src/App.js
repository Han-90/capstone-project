import {nanoid} from 'nanoid';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {inspirations} from './data';
import Detailspage from './pages/Detailspage';
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
						<Route path="/events" element={<Events />} />
						<Route
							path="/details/:id"
							element={<Detailspage inspirations={inspirations} />}
						/>

						{/* <Route path="library/" element={<library/>} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
