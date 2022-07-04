import {nanoid} from 'nanoid';

import direStraits from './images/DireStraits.jpg';
import frankiVallie from './images/FrankiValli.jpeg';
import frankSinatra from './images/FrankSinatra.jpeg';
import ludovicoEinaudi from './images/LudovicoEinaudi.jpeg';
const inspirations = [
	{
		id: nanoid(),
		cover: frankSinatra,
		interpret: 'Frank Sinatra',
		song: 'Fly me to the moon',
		lyrics: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
		musicsheet: 'https://musescore.com/user/2538606/scores/4455576',
	},
	{
		id: nanoid(),
		cover: direStraits,
		interpret: 'Dire Straits',
		song: 'Sultans of Swing',
		lyrics: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
		musicsheet: 'https://musescore.com/user/2538606/scores/4455576',
	},
	{
		id: nanoid(),
		cover: frankiVallie,
		interpret: 'Frankie Vallie',
		song: 'December 1963',
		lyrics: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
		musicsheet: 'https://musescore.com/user/2538606/scores/4455576',
	},
	{
		id: nanoid(),
		cover: ludovicoEinaudi,
		interpret: 'Ludovico Einaudi',
		song: 'Islands',
		lyrics: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
		musicsheet: 'https://musescore.com/user/2538606/scores/4455576',
	},
];
export {inspirations};
