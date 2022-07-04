import {useParams} from 'react-router-dom';

export default function Detailspage({song, lyrics, musicsheet, inspirations}) {
	const {inspirationId} = useParams();
	const thisInspiration = inspirations.find(inspiration => inspiration.id === inspirationId);
	console.log(2, inspirations);
	return (
		<>
			<p>{thisInspiration.lyrics}</p>
		</>
	);
}
