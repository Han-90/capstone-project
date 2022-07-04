import React from 'react';
import {Link} from 'react-router-dom';

import {FooterWrapper} from './styled';

export default function NavBar() {
	return (
		<FooterWrapper>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>

					<li>
						<Link to="/events">Events</Link>
					</li>
					{/* <Link to="/library">Library</Link> */}
					{/* <li>Other</li> */}
				</ul>
			</nav>
		</FooterWrapper>
	);
}
