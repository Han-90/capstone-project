import styled from 'styled-components';

const ArtistCard = styled.section`
	width: 45%;
	background-color: hsl(1, 0%, 30%);
	margin: 2.5%;
	height: fit-content;
	border-radius: 10%;
`;

const Cover = styled.img`
	width: 100%;
	height: 150px;
	border-top-left-radius: 10%;
	border-top-right-radius: 10%;
`;

const Information = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: 60% 40%;
	grid-template-rows: 1fr 1fr;
`;

const ArtistName = styled.p`
	color: whitesmoke;
	display: grid;
	grid-column: 1;
	grid-row: 1;
	white-space: nowrap;
	margin: 0;
	padding-left: 1rem;
`;

const Song = styled.p`
	color: whitesmoke;
	display: grid;
	grid-column: 1;
	grid-row: 2;
	white-space: nowrap;
	margin: 0;
	padding-left: 1rem; ;
`;

export {ArtistCard, Song, Information, ArtistName, Cover};
