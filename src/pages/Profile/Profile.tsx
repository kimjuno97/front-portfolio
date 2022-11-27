import React from 'react';

import S from './Styled.Profile';

import useProfile from './useProfile';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Appeal from '../Appeal/Appeal';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

interface TypeProfile {
	accordionToggle: boolean;
}

export default function Profile({ accordionToggle }: TypeProfile) {
	const { text } = useProfile();

	return (
		<>
			<S.Container id='profile'>
				<S.ProfileContainer>
					<S.ProfileTextArea>
						<S.ProfileText accordionToggle={accordionToggle}>
							{text.top}
						</S.ProfileText>
						<S.ProfileText accordionToggle={accordionToggle}>
							{text.bot}
						</S.ProfileText>
					</S.ProfileTextArea>
					<S.Profile
						src={`${process.env.PUBLIC_URL}/img/profile.jpg`}
						alt='profile'
					/>
				</S.ProfileContainer>
			</S.Container>
			<AboutMe />
			<Skills />
			<Appeal />
			<Projects />
			<Contact />
		</>
	);
}
