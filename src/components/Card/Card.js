import {Link} from 'react-router-dom';

import ArtistCard from '../ArtistCard/ArtistCard';

import {InspirationCard} from './Card.styled';
export default function Card({inspirations}) {
	return (
		<>
			<InspirationCard>
				{inspirations.map(inspiration => (
					<>
						<Link to={`/details/${inspiration.id}`}></Link>
						<ArtistCard
							key={inspiration.id}
							name={inspiration.interpret}
							title={inspiration.song}
							image={inspiration.cover}
						/>
					</>
				))}
			</InspirationCard>
		</>
	);
}
