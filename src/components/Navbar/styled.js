import styled from 'styled-components';

const FooterWrapper = styled.footer`
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	& nav > ul {
		display: flex;
		justify-content: space-between;
		padding: 1em 1em 1em;
		background-color: hsl(1, 0%, 30%);
	}
`;

export {FooterWrapper};
