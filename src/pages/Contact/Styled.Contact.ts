import styled from 'styled-components';

const FormContainer = styled.div`
	padding: 8rem 6rem;
	background: #80ec84;
`;

const FormHeaderArea = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 3rem;
`;

const FormTitle = styled.div`
	font-size: 5rem;
	font-weight: bold;
`;

const FormArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3rem;
	min-width: 24rem;
	max-width: 40rem;
	padding: 6rem 3rem 3rem 3rem;
	font-size: 3rem;
	background: white;
	border-radius: 1rem;
	box-shadow: 1rem 1rem 1rem 0;
`;

const ValueInput = styled.input`
	width: auto;
	height: 3rem;
	padding-left: 1rem;
	font-size: 2rem;
	outline: none;
`;

const TextArea = styled.textarea`
	width: auto;
	height: 20rem;
	padding: 1rem 0 0 1rem;
	font-size: 2rem;
	resize: none;
	outline: none;
`;

const FormButton = styled.button`
	height: 4rem;
	border: none;
	border-radius: 2rem;
	cursor: pointer;
	outline: none;
	transition: 1s;
	:focus {
		background: tomato;
	}
`;

const S = {
	FormContainer,
	FormHeaderArea,
	FormTitle,
	FormArea,
	ValueInput,
	TextArea,
	FormButton,
};

export default S;
