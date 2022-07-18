import {Button} from '@mui/material';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
export default function Details({inspirations}) {
	const {id} = useParams();
	const thisInspiration = inspirations.find(inspiration => inspiration.id === id);
	return (
		<>
			<h2>{thisInspiration.interpret}</h2>
			<p>{thisInspiration.song}</p>
			<Button variant="contained">
				<a href={thisInspiration.lyrics}>Lyrics</a>
			</Button>
			<Button variant="contained">
				<a href={thisInspiration.musicsheet}>Musicsheet</a>
			</Button>
			<br />
			<img
				src={thisInspiration.cover}
				width="400px"
				height="400px"
				alt="Inspirationcards Images"
			/>
		</>
	);
}
