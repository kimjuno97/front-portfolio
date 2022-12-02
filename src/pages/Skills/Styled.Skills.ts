import styled from 'styled-components';

const SkillsContainer = styled.div`
	padding: 8rem 6rem;
	background: #ffd447e6;
`;

const SkillsTitleArea = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 3rem;
`;

const SkiillsTitle = styled.h1`
	font-size: 5rem;
	font-weight: bold;
`;

const SkillsBoxFlexPos = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 3rem;
	min-width: 15rem;
	transition: 1s;
`;

const SkillsBox = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	min-width: 24rem;
	max-width: 40rem;
	border-radius: 1rem;
	background: white;
	padding: 8rem 3rem 3rem 3rem;
	transition: 0.5s;
	box-shadow: 1rem 1rem 1rem 0;
	:hover {
		transform: translateY(-6%);
	}
`;

const SkillName = styled.div`
	position: absolute;
	top: 3rem;
	color: #f68265;
	font-size: 2.3rem;
	font-weight: bold;
`;

const S = {
	SkillsContainer,
	SkillsTitleArea,
	SkiillsTitle,
	SkillsBoxFlexPos,
	SkillsBox,
	SkillName,
};

export default S;
