import React from 'react';

import S from './Styled.Projects';

import { AiFillSwitcher } from 'react-icons/ai';

import TodoList from './oneProject/TodoList';
import FiveMillion from './oneProject/FiveMillion';
import Ussop from './oneProject/Ussop';

import useProjects from './useProjects';

export default function Projects() {
	const { parallax, observerRef } = useProjects();

	return (
		<S.ProjectsContainer id='projects' ref={observerRef}>
			<S.ProjectsTitleArea parallax={parallax}>
				<AiFillSwitcher size='5rem' />
				<S.ProjectsTitle>Projects</S.ProjectsTitle>
			</S.ProjectsTitleArea>
			<S.ProjectBoxFlexPos>
				<TodoList showBox={parallax > 33} />
				<FiveMillion showBox={parallax > 66} />
				<Ussop showBox={parallax > 99} />
			</S.ProjectBoxFlexPos>
		</S.ProjectsContainer>
	);
}
