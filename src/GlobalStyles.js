import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

:root{--bgcolor:#35383F
	
}
	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-color:hsla(252, 0%, 76%, 0.51);
		font-family: sans-serif;
		font-size: 1rem;
		
	}
`;

export const theme = {
	colors: {
		primary: 'white',
		secondary: '#FFF5D6',
		text: '#FFE085',
		background: 'green',
	},
	boxShadow: {
		shadowLight: '5px 5px 10px grey',
		shadowHeavy: '5px 5px 10px black',
	},
};
