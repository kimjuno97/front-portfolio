import styled, { keyframes } from 'styled-components';

const Container = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	backdrop-filter: blur(5px);
	z-index: 2;
`;

const HeaderContent = styled.a`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 8rem;
	margin: 0 auto;
	padding: 1.6rem 3rem;
`;

const HeaderTitle = styled.div`
	font-size: 2.4rem;
	font-weight: 700;
`;

const AccordionIcon = styled.div`
	padding: 0.4rem;
	border: 1px solid gray;
	border-radius: 0.25rem;
	font-size: 5rem;
	cursor: pointer;
`;

const Accordion = styled.div<TypeAccordionIcon>`
	height: ${({ accordionToggle }) => (accordionToggle ? '25rem' : '0rem')};
	overflow: hidden;
	margin-top: -10px;
	padding: 0rem 3rem;
	transition: 1s;
`;

const colorAni = keyframes`
  0% {
    color:white;
  }
  100% {
    color: black;
  }
`;

const AccordionContent = styled.div`
	padding: 1.4rem 0;
	color: white;
	font-size: 2rem;
	line-height: 1.25rem;
	font-weight: 700;
	cursor: pointer;
	animation: ${colorAni} 2s infinite alternate;
`;

const S = {
	Container,
	HeaderContent,
	HeaderTitle,
	AccordionIcon,
	Accordion,
	AccordionContent,
};

export default S;

interface TypeAccordionIcon {
	accordionToggle: boolean;
}
