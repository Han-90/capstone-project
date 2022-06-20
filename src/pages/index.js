import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import Button from '../components/Button';
import Layout from '../components/Layout';
import useFetch from '../hooks/useFetch';
import useStore from '../hooks/useStore';

export default function HomePage() {
	// Data
	const {data, loading, error} = useFetch('/api/hello');

	// Local state
	const [id, setId] = useState(null);

	// Global state

	return (
		<Layout>
			<Helmet>
				<title key="title">My Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Home!</h1>
		</Layout>
	);
}
