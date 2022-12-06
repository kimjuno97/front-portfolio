import React from 'react';

import S from './Styled.Projects';

import { AiFillSwitcher } from 'react-icons/ai';

import TodoList from './oneProject/TodoList';
import FiveMillion from './oneProject/FiveMillion';
import Ussop from './oneProject/Ussop';

import useProjects from './useProjects';

export default function Projects() {
	const { parallax, showBox, observerRef } = useProjects();

	return (
		<S.ProjectsContainer id='projects'>
			<S.ProjectsTitleArea ref={observerRef} parallax={parallax}>
				<AiFillSwitcher size='5rem' />
				<S.ProjectsTitle>Projects</S.ProjectsTitle>
			</S.ProjectsTitleArea>
			<S.ProjectBoxFlexPos showBox={showBox}>
				<TodoList />
				<FiveMillion />
				<Ussop />
			</S.ProjectBoxFlexPos>
		</S.ProjectsContainer>
	);
}
