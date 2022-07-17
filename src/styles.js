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
		font-family: sans-serif;
		font-size: 1rem;
		
	}
`;
