import React from 'react';

import S from './Styled.Apeal';

import { AiFillStar } from 'react-icons/ai';
import ScrollView from 'react-catbow-scrollview';

export default function Appeal() {
	const option = {
		videoImageCount: 754, // 이미지 개수
		imgUrl: `${process.env.PUBLIC_URL}/images/`, // 이미지 경로
		startNum: 10000, // 이미지 시작 넘버
		extension: '.JPG', // 이미지 확장자
		scrollAreaY: '500px', // 스크롤 공간 확보
		viewPort: {
			// img style
			width: '100%',
			borderRadius: '15px',
		},
	};
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
					<S.ScrollBox>
						<ScrollView option={option} />
					</S.ScrollBox>
					<S.ScrollContents>
						scroll 인터랙션을 제공하는 리액트 라이브러리이다.
					</S.ScrollContents>
					<S.ScrollContents>
						현재 개발중이고, module파일 추가, 문서화 작업을 더 다듬고
					</S.ScrollContents>
					<S.ScrollContents>
						12월 중순 안에, 1.0.0 버전을 출시할 예정이다.
					</S.ScrollContents>
					<S.ScrollContents>
						<a
							href='https://www.npmjs.com/package/react-catbow-scrollview'
							target='_blank'
							rel='noreferrer'>
							설치: npm i react-catbow-scrollview
						</a>
					</S.ScrollContents>
				</S.AppealBox>
			</S.AppealBoxFlexPos>
		</S.AppealContainer>
	);
}
