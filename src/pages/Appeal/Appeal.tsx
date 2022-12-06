import React from 'react';

import S from './Styled.Apeal';

import { AiFillStar } from 'react-icons/ai';
import ScrollVeiew from './items/ScrollVeiew';

import useAppeal from './useAppeal';

export default function Appeal() {
	const { parallax, showBox, observerRef } = useAppeal();

	return (
		<S.AppealContainer id='appeal'>
			<S.AppealTitleArea ref={observerRef} parallax={parallax}>
				<AiFillStar size='5rem' />
				<S.AppealTitle>Appeal</S.AppealTitle>
			</S.AppealTitleArea>
			<S.AppealBoxFlexPos showBox={showBox}>
				<ScrollVeiew />
			</S.AppealBoxFlexPos>
		</S.AppealContainer>
	);
}
