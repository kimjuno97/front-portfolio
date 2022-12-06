import React from 'react';
import S from '../Styled.Projects';

export default function TodoList({ showBox }: { showBox: boolean }) {
	return (
		<a
			href='https://kimjuno97.github.io/wanted-pre-onboarding-frontend/'
			target='_blank'
			rel='noreferrer'>
			<S.ProjectBox showBox={showBox}>
				<S.ProjectName>Todolist</S.ProjectName>
				<S.ProjectImg
					src={`${process.env.PUBLIC_URL}/img/todolist.gif`}
					alt='todolist'
				/>
			</S.ProjectBox>
		</a>
	);
}
