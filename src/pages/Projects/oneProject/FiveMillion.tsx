import React from 'react';

import S from '../Styled.Projects';

export default function FiveMillion() {
	return (
		<a
			href='https://github.com/kimjuno97/36-2nd-5MILLION-frontend'
			target='_blank'
			rel='noreferrer'>
			<S.ProjectBox>
				<S.ProjectName>FiveMillion</S.ProjectName>
				<S.ProjectImg
					src={`${process.env.PUBLIC_URL}/img/fivemillion.gif`}
					alt='fivemillion'
				/>
				<S.Discription defaultValue={''} />
			</S.ProjectBox>
		</a>
	);
}
