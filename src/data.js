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
	},
	{
		id: nanoid(),
		cover: direStraits,
		interpret: 'Dire Straits',
		song: 'Sultans of Swing',
	},
	{
		id: nanoid(),
		cover: frankiVallie,
		interpret: 'Frankie Vallie',
		song: 'December 1963',
	},
	{
		id: nanoid(),
		cover: ludovicoEinaudi,
		interpret: 'Ludovico Einaudi',
		song: 'Islands',
	},
];
export {inspirations};
