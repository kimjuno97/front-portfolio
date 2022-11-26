import styled from 'styled-components';

const AppealContainer = styled.div`
	padding: 12rem 6rem;
	background: #1df4f9;
`;

const AppealTitleArea = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 3rem;
`;

const AppealTitle = styled.h1`
	font-size: 5rem;
	font-weight: bold;
`;

const AppealBoxFlexPos = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 2rem;
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
	transition: 1s;
	box-shadow: 1rem 1rem 1rem 0;
`;

const AppealName = styled.div`
	position: absolute;
	top: 3rem;
	color: #c51d9ec4;
	font-size: 2.3rem;
	font-weight: bold;
`;

const ScrollBox = styled.div`
	height: 300px;
	overflow: auto;
`;

const ScrollContents = styled.p`
	font-size: 1.3rem;
`;

const S = {
	AppealContainer,
	AppealTitleArea,
	AppealTitle,
	AppealBoxFlexPos,
	AppealBox,
	AppealName,
	ScrollBox,
	ScrollContents,
};

export default S;
