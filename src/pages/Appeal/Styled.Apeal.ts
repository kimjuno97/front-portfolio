import styled, { keyframes } from 'styled-components';

const AppealContainer = styled.div`
	padding: 8rem 6rem;
	background: #1df4f9;
`;

const AppealTitleArea = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 4rem;
`;

const AppealTitle = styled.h1`
	font-size: 5rem;
	font-weight: bold;
`;

const AppealBoxFlexPos = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 3rem;
	min-width: 15rem;
	transition: 1s;
`;

const AppealBox = styled.div`
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
	:hover {
		transform: translateY(-6%);
	}
`;

const AppealName = styled.div`
	position: absolute;
	top: 3rem;
	color: #c51d9ec4;
	font-size: 2.3rem;
	font-weight: bold;
`;

const ScrollContents = styled.p`
	font-size: 1.3rem;
`;

const ScrollViewDiv = styled.div`
	background-image: url('${process.env.PUBLIC_URL}/img/scrollview.gif');
	background-size: cover;
	width: 22.125rem;
	height: 26rem;
`;

const DocsTag = styled.a`
	font-weight: bold;
	padding: 0 4px 2px 4px;
	border-bottom: 1px solid black;
`;

const linkAni = keyframes`
  0% {
    color:blue;
  }
  100% {
    color: red;
  }
`;

const NpmTag = styled.a`
	font-weight: bold;
	animation: ${linkAni} 3s infinite alternate;
`;

const S = {
	AppealContainer,
	AppealTitleArea,
	AppealTitle,
	AppealBoxFlexPos,
	AppealBox,
	AppealName,
	ScrollContents,
	ScrollViewDiv,
	DocsTag,
	NpmTag,
};

export default S;
