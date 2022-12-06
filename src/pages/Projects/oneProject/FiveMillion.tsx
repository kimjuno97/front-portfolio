import React from 'react';

import S from '../Styled.Projects';

export default function FiveMillion({ showBox }: { showBox: boolean }) {
	return (
		<a
			href='https://github.com/kimjuno97/36-2nd-5MILLION-frontend'
			target='_blank'
			rel='noreferrer'>
			<S.ProjectBox showBox={showBox}>
				<S.ProjectName>FiveMillion</S.ProjectName>
				<S.ProjectImg
					src={`${process.env.PUBLIC_URL}/img/fivemillion.gif`}
					alt='fivemillion'
				/>
			</S.ProjectBox>
		</a>
	);
}
