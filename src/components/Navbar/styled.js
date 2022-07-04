import styled from 'styled-components';

const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	& nav > ul {
		display: flex;
		justify-content: space-between;
		padding: 1em 1em 1em;
		background-color: hsl(1, 0%, 30%);
	}
`;

export {FooterWrapper};
