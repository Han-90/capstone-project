import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledButton = styled.button`
	padding: 0.5em 1em;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: ${pxToRem(4)};
	background: black;
	color: white;
	font-size: 1em;

	&:hover {
		background: green;
	}

	&:active {
		background: green;
	}
`;

export default StyledButton;
