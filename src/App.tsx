import React from 'react';
import Router from './Router';
import GlobalStyle from './Styles/GlobalStyle';

export default function App() {
	console.info(
		'안녕하십니까 프론트 엔드 개발자 김준호입니다\n해당 포토폴리오는 디자인 부분부터 직접 기획하며 구현하였습니다. \n재미있게 봐주셨으면 저 좀 뽑아주세요!!'
	);
	return (
		<>
			<GlobalStyle />
			<Router />
		</>
	);
}
