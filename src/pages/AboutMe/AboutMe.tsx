import React from 'react';

import S from './Styled.AboutMe';

import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { FaBloggerB } from 'react-icons/fa';

export default function AboutMe() {
	return (
		<S.AboutMeContainer id='about'>
			<S.AboutMeTitle>☎︎ ABOUT ME</S.AboutMeTitle>
			<FaBloggerB size='4rem' style={{ gridArea: 'vIcon' }} />
			<S.AbuotText
				href='https://velog.io/@juno97'
				target='_blank'
				gridArea='vText'>
				juno97.log
			</S.AbuotText>
			<BsGithub size='4rem' style={{ gridArea: 'gIcon' }} />
			<S.AbuotText
				href='https://github.com/kimjuno97'
				target='_blank'
				gridArea='gText'>
				kimjuno97
			</S.AbuotText>
			<IoMdCall size='4rem' style={{ gridArea: 'pIcon' }} />
			<S.AbuotText gridArea='pText'>010-4558-6895</S.AbuotText>
			<MdEmail size='4rem' style={{ gridArea: 'eIcon' }} />
			<S.AbuotText gridArea='eText'>jh241093@gmail.com</S.AbuotText>
		</S.AboutMeContainer>
	);
}
