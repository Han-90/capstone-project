import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import Card from '../components/Card/Card';
import Layout from '../components/Layout';
export default function HomePage({inspirations}) {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			{inspirations.map(inspiration => (
				<Link key={inspiration.id} to={`/details/${inspiration.id}`}>
					<Card key={inspiration.id} inspiration={inspiration} />
				</Link>
			))}
		</Layout>
	);
}
