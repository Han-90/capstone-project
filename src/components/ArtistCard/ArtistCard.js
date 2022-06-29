import {ArtistCard as Card, Song, Information, ArtistName, Cover} from './ArtistCard.styled';

export default function ArtistCard({name, title, image}) {
	return (
		<>
			<Card>
				<Cover src={image} />
				<Information>
					<ArtistName>{name}</ArtistName>
					<Song>{title}</Song>
				</Information>
			</Card>
		</>
	);
}
