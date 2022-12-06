import React from 'react';

import S from './Styled.Apeal';

import { AiFillStar } from 'react-icons/ai';
import ScrollVeiew from './items/ScrollVeiew';

export default function Appeal() {
	return (
		<S.AppealContainer id='appeal'>
			<S.AppealTitleArea>
				<AiFillStar size='5rem' />
				<S.AppealTitle>Appeal</S.AppealTitle>
			</S.AppealTitleArea>
			<S.AppealBoxFlexPos>
				<ScrollVeiew />
			</S.AppealBoxFlexPos>
		</S.AppealContainer>
	);
}
