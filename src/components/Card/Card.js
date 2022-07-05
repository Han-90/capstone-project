import Button from '../Button';

import {ArtistCard as StyledCard, Song, Information, ArtistName, Cover} from './ArtistCard.styled';
export default function Card({inspiration}) {
	return (
		<>
			<StyledCard>
				<Cover src={inspiration.cover} />
				<Information>
					<ArtistName>{inspiration.name}</ArtistName>
					<Song>{inspiration.interpret}</Song>
					<Button>More</Button>
				</Information>
			</StyledCard>
		</>
	);
}
