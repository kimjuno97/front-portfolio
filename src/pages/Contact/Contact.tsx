import React from 'react';

import S from './Styled.Contact';

import { SiMinutemailer } from 'react-icons/si';

import useContact from './useContact';

export default function Contact() {
	const {
		inputValues,
		inputValuesHandler,
		postMessage,
		parallax,
		observerRef,
	} = useContact();

	return (
		<S.FormContainer id='contact' ref={observerRef}>
			<S.FormHeaderArea parallax={parallax}>
				<SiMinutemailer size='5rem' />
				<S.FormTitle>Contact</S.FormTitle>
			</S.FormHeaderArea>
			<form
				method='post'
				style={{
					opacity: (parallax + 10) / 100,
					transition: '2s',
					transform: `translateX(-${100 - parallax}%)`,
				}}>
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
