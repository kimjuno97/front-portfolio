import React from 'react';

import S from './Styled.Projects';

import { AiFillSwitcher } from 'react-icons/ai';

export default function Projects() {
	return (
		<S.ProjectsContainer id='projects'>
			<S.ProjectsTitleArea>
				<AiFillSwitcher size='5rem' />
				<S.ProjectsTitle>Projects</S.ProjectsTitle>
			</S.ProjectsTitleArea>
		</S.ProjectsContainer>
	);
}
