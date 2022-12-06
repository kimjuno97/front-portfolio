import styled from 'styled-components';

import { TypeShowBox, TypeParallax } from '../../types';

const ProjectsContainer = styled.div`
	padding: 8rem 6rem;
	background: #f5bbda;
`;

const ProjectsTitleArea = styled.div<TypeParallax>`
	display: flex;
	gap: 2rem;
	margin-bottom: 4rem;
	transition: 2s;
	opacity: ${({ parallax }) => parallax / 100};
`;

const ProjectsTitle = styled.h1`
	font-size: 5rem;
	font-weight: bold;
`;

const ProjectBoxFlexPos = styled.div<TypeShowBox>`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 4rem;
	min-width: 15rem;
	transition: 2s;
	opacity: ${({ showBox }) => (showBox ? 1 : 0)};
	transform: ${({ showBox }) =>
		showBox ? 'translateY(0)' : 'translateY(-50%)'};
`;

const ProjectBox = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	min-width: 24rem;
	max-width: 40rem;
	border-radius: 1rem;
	background: white;
	padding: 8rem 3rem 3rem 3rem;
	transition: 0.5s;
	box-shadow: 1rem 1rem 1rem 0;
	cursor: pointer;
	:hover {
		transform: translateY(-6%);
	}
`;

const ProjectName = styled.div`
	position: absolute;
	top: 3rem;
	color: #02b60a;
	font-size: 2.3rem;
	font-weight: bold;
`;

const ProjectImg = styled.img`
	width: 24rem;
`;

const Discription = styled.textarea`
	min-width: 20rem;
	max-width: 28rem;
	min-height: 10rem;
	padding: 2rem;
	border: none;
	font-size: 1.6rem;
	outline: none;
	cursor: pointer;
`;

const S = {
	ProjectsContainer,
	ProjectsTitleArea,
	ProjectsTitle,
	ProjectBoxFlexPos,
	ProjectBox,
	ProjectName,
	ProjectImg,
	Discription,
};

export default S;
