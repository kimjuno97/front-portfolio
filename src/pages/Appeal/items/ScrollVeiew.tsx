import React from 'react';

import S from '../Styled.Apeal';

export default function ScrollVeiew() {
	return (
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
				Scroll 인터랙션을 제공하는 리액트 라이브러리
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
				<S.DocsTag href='https://catbow.github.io/catbow-docs/' target='_blank'>
					공식문서 보러가기
				</S.DocsTag>
			</S.ScrollContents>
		</S.AppealBox>
	);
}
