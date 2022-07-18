import {nanoid} from 'nanoid';

import direStraits from './images/DireStraits.jpg';
import frankiVallie from './images/FrankiValli.jpeg';
import frankSinatra from './images/FrankSinatra.jpeg';
import ludovicoEinaudi from './images/LudovicoEinaudi.jpeg';
const inspirations = [
	{
		id: '30773b84-e382-4665-b3af-624fb6ded94f',
		cover: frankSinatra,
		interpret: 'Frank Sinatra',
		song: 'Fly me to the moon',
		lyrics: 'https://genius.com/Frank-sinatra-fly-me-to-the-moon-lyrics',
		musicsheet: 'https://musescore.com/user/2538606/scores/4455576',
	},
	{
		id: '99967672-ffa2-4536-9c10-6041eab7eb46',
		cover: direStraits,
		interpret: 'Dire Straits',
		song: 'Sultans of Swing',
		lyrics: 'https://genius.com/Dire-straits-sultans-of-swing-lyrics',
		musicsheet: 'https://musescore.com/user/7788266/scores/3199221',
	},
	{
		id: '2aa01ee3-6ea4-4c74-832c-91dbbe5ed333',
		cover: frankiVallie,
		interpret: 'Frankie Vallie',
		song: 'December 1963',
		lyrics: 'https://genius.com/The-four-seasons-december-1963-oh-what-a-night-lyrics',
		musicsheet: 'https://musescore.com/garrettw/december-1963',
	},
	{
		id: 'db8c019c-2668-4198-8b53-727812124f47',
		cover: ludovicoEinaudi,
		interpret: 'Ludovico Einaudi',
		song: 'I Giorni',
		lyrics: 'There are no lyrics for this song',
		musicsheet: 'https://www.stretta-music.de/einaudi-islands-essential-einaudi-nr-587028.html',
	},
];
export {inspirations};
