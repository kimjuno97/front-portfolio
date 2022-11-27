import styled from 'styled-components';

const Container = styled.div`
	margin-top: 8rem;
	font-size: 100px;
	padding: 6rem 0;
	background: #2c4ec9;
`;
const ProfileContainer = styled.div`
	display: flex;
	justify-content: space-around;
	@media (max-width: 700px) {
		flex-direction: column-reverse;
		gap: 3rem;
	}
`;

const ProfileTextArea = styled.div`
	display: flex;
	min-width: 37rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const ProfileText = styled.div<TypeProfileText>`
	width: auto;
	min-height: 2rem;
	color: white;
	font-size: 2.2rem;
	line-height: 3rem;
	font-weight: bold;
	transition: 1s;
	opacity: ${({ accordionToggle }) => (accordionToggle ? '0' : '1')};
`;

const Profile = styled.img`
	width: 25rem;
	height: 25rem;
	border-radius: 9999px;
	z-index: 1;
	@media (max-width: 700px) {
		margin-left: 50%;
		transform: translate(-50%, 0);
	}
`;

const S = {
	Container,
	ProfileContainer,
	ProfileTextArea,
	ProfileText,
	Profile,
};

export default S;

interface TypeProfileText {
	accordionToggle: boolean;
}
