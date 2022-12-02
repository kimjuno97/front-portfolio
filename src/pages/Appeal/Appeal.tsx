import React from 'react';

import S from './Styled.Apeal';

import { AiFillStar } from 'react-icons/ai';

export default function Appeal() {
	return (
		<S.AppealContainer id='appeal'>
			<S.AppealTitleArea>
				<AiFillStar size='5rem' />
				<S.AppealTitle>Appeal</S.AppealTitle>
			</S.AppealTitleArea>
			<S.AppealBoxFlexPos>
				<S.AppealBox>
					<S.AppealName>
						<a
							href='https://www.npmjs.com/package/react-catbow-scrollview'
							target='_blank'
							rel='noreferrer'>
							Catbow-ScrollView
						</a>
					</S.AppealName>
					<S.ScrollViewDiv />
					<S.ScrollContents>
						Scroll 인터랙션을 제공하는 리액트 라이브러리이다.
					</S.ScrollContents>
					<S.ScrollContents>
						<S.NpmTag
							href='https://www.npmjs.com/package/react-catbow-scrollview'
							target='_blank'
							rel='noreferrer'>
							설치 : npm i react-catbow-scrollview
						</S.NpmTag>
					</S.ScrollContents>
					<S.ScrollContents>
						<S.DocsTag
							href='https://catbow.github.io/catbow-docs/'
							target='_blank'>
							공식문서 보러가기
						</S.DocsTag>
					</S.ScrollContents>
				</S.AppealBox>
			</S.AppealBoxFlexPos>
		</S.AppealContainer>
	);
}
