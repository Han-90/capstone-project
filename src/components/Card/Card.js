import {inspirations} from '../../data';
import ArtistCard from '../ArtistCard/ArtistCard';

import {InspirationCard} from './Card.styled';
export default function Card() {
	return (
		<>
			<InspirationCard>
				{inspirations.map(inspiration => (
					<ArtistCard
						key={inspiration.id}
						name={inspiration.interpret}
						title={inspiration.song}
						image={inspiration.cover}
					/>
				))}
			</InspirationCard>
		</>
	);
}
