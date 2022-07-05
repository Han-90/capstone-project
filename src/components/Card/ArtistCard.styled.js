import styled from 'styled-components';

const ArtistCard = styled.section`
	width: 45%;
	height: fit-content;
	margin: 2.5%;
	background-color: hsl(1, 0%, 30%);
	border-radius: 10%;
`;

const Cover = styled.img`
	width: 100%;
	height: 150px;
	border-top-left-radius: 10%;
	border-top-right-radius: 10%;
`;

const Information = styled.section`
	display: grid;
	width: 100%;
	grid-template-columns: 60% 40%;
	grid-template-rows: 1fr 1fr;
`;

const ArtistName = styled.p`
	display: grid;
	color: whitesmoke;
	grid-column: 1;
	grid-row: 1;
	margin: 0;
	white-space: nowrap;
	padding-left: 1rem;
`;

const Song = styled.p`
	display: grid;
	color: whitesmoke;
	grid-column: 1;
	grid-row: 2;
	margin: 0;
	white-space: nowrap;
	padding-left: 1rem; ;
`;

export {ArtistCard, Song, Information, ArtistName, Cover};
