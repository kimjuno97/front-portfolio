import React from 'react';

import S from '../Styled.Projects';

export default function Ussop({ showBox }: { showBox: boolean }) {
	return (
		<a
			href='https://github.com/kimjuno97/36-1st-Usopp-frontend'
			target='_blank'
			rel='noreferrer'>
			<S.ProjectBox showBox={showBox}>
				<S.ProjectName>Ussop</S.ProjectName>
				<S.ProjectImg
					src={`${process.env.PUBLIC_URL}/img/ussop.gif`}
					alt='todolist'
				/>
				{/* <S.Discription defaultValue={``} /> */}
			</S.ProjectBox>
		</a>
	);
}
