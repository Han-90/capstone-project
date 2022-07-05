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
				</ul>
			</nav>
		</FooterWrapper>
	);
}
