import {useParams} from 'react-router-dom';

export default function Details({inspirations}) {
	const {id} = useParams();
	const thisInspiration = inspirations.find(inspiration => inspiration.id === id);
	return (
		<>
			<h2>{thisInspiration.interpret}</h2>
			<p>{thisInspiration.lyrics}</p>
			<img src={thisInspiration.cover} alt="Inspirationcards Images" />
		</>
	);
}
