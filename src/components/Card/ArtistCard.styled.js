import styled from 'styled-components';

const ArtistCard = styled.section`
	width: 45%;
	height: fit-content;
	margin: 2.5%;
	border-radius: 10%;
	background-color: hsl(1, 0%, 30%);
`;

const Cover = styled.img`
	width: 100%;
	height: 150px;
	border-top-left-radius: 10%;
	border-top-right-radius: 10%;
`;

const Information = styled.section`
	display: grid;
	grid-template-columns: 60% 40%;
	grid-template-rows: 1fr 1fr;
	width: 100%;
`;

const ArtistName = styled.p`
	display: grid;
	grid-column: 1;
	grid-row: 1;
	color: whitesmoke;
	margin: 0;
	padding-left: 1rem;
	white-space: nowrap;
`;

const Song = styled.p`
	display: grid;
	grid-column: 1;
	grid-row: 2;
	color: whitesmoke;
	margin: 0;
	padding-left: 1rem;
	white-space: nowrap;
`;

export {ArtistCard, Song, Information, ArtistName, Cover};
