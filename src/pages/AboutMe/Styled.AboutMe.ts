import styled from 'styled-components';

const AboutMeContainer = styled.div`
	display: grid;
	grid-template-areas:
		'header header'
		'vIcon vText'
		'gIcon gText'
		'pIcon pText'
		'eIcon eText';
	grid-template-columns: 5rem 30rem;
	align-items: center;
	column-gap: 5rem;
	row-gap: 4rem;
	min-width: 30rem;
	margin: 0 auto;
	padding: 12rem 6rem;
	background: tomato;
`;

const AboutMeTitle = styled.h1`
	grid-area: header;
	font-size: 5rem;
	font-weight: bold;
`;

const AboutContents = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
`;

const AbuotText = styled.a<TypeGrid>`
	grid-area: ${({ gridArea }) => gridArea};
	font-size: 3rem;
`;

const S = { AboutMeContainer, AboutMeTitle, AboutContents, AbuotText };

export default S;

interface TypeGrid {
	gridArea: 'vText' | 'pText' | 'eText' | 'gText';
}
