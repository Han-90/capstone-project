import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function Events() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Events</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Events</h1>
		</Layout>
	);
}
