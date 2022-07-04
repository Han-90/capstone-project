import {Helmet} from 'react-helmet';

import Card from '../components/Card/Card';
import Layout from '../components/Layout';

export default function HomePage({inspirations}) {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Music Box</h1>
			<Card inspirations={inspirations} />
		</Layout>
	);
}
