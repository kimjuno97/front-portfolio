import React from 'react';

import S from './Styled.Contact';

import { SiMinutemailer } from 'react-icons/si';
import useContact from './useContact';

export default function Contact() {
	const { inputValues, inputValuesHandler, postMessage } = useContact();
	return (
		<S.FormContainer id='contact'>
			<S.FormHeaderArea>
				<SiMinutemailer size='5rem' />
				<S.FormTitle>Contact</S.FormTitle>
			</S.FormHeaderArea>
			<form method='post'>
				<S.FormArea>
					<S.ValueInput
						name='name'
						placeholder='보내는 이'
						value={inputValues.name}
						onChange={inputValuesHandler}
					/>
					<S.TextArea
						name='message'
						placeholder='본문을 입력하세요'
						value={inputValues.message}
						onChange={inputValuesHandler}
					/>
					<S.FormButton type='submit' onClick={postMessage}>
						전송
					</S.FormButton>
				</S.FormArea>
			</form>
		</S.FormContainer>
	);
}
