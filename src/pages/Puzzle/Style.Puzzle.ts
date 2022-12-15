import styled from 'styled-components';

const Container = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(20deg, rgb(33, 33, 33), rgb(66, 66, 66));
	// TODO: 라우팅 전 애니메이션 넣어보기
	transition: 1s;
`;

const Position = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-areas:
		'leftTop midTop rightTop'
		'left mid right'
		'leftBot midBot rightBot';
	margin: 150px auto;
	z-index: 3;
	transition: 1s;
	transform: scale(1);
`;

const GRID_AREA: { [key: number]: string } = {
	0: 'leftTop',
	1: 'midTop',
	2: 'rightTop',
	3: 'left',
	4: 'mid',
	5: 'right',
	6: 'leftBot',
	7: 'midBot',
	8: 'rightBot',
};

const PuzzleBox = styled.div<{ gridArea: number; hoverScale: boolean }>`
	grid-area: ${({ gridArea }) => GRID_AREA[gridArea]};
	width: 200px;
	height: 200px;
	background: white;
	border: 1px solid gray;
	cursor: pointer;
	transition: 0.4s;
	:hover {
		transform: ${({ hoverScale }) => hoverScale && 'scale(120%)'};
	}
`;

const PuzzleImg = styled.img`
	width: 100%;
	height: 100%;
`;

const S = {
	Container,
	Position,
	PuzzleBox,
	PuzzleImg,
};

export default S;
