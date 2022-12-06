import React, { useEffect, useRef, useState } from 'react';

import S from './Styled.AboutMe';

import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { FaBloggerB } from 'react-icons/fa';
import percentageArray from '../../utills/percentageArray';

export default function AboutMe() {
	const observerRef = useRef<HTMLDivElement | null>(null);

	const [parallax, setParallax] = useState(0);

	console.log(parallax);
	useEffect(() => {
		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: '50px 0px 0px 0px',
			threshold: percentageArray(),
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setParallax(Math.round(entry.intersectionRatio * 100));
				}
			});
		}, options);

		if (observerRef.current) observer.observe(observerRef.current);
	}, []);
	return (
		<S.AboutMeContainer id='about' ref={observerRef}>
			<S.AboutMeTitle parallax={parallax}>☎︎ ABOUT ME</S.AboutMeTitle>
			<FaBloggerB
				size='4rem'
				style={{
					gridArea: 'vIcon',
					transition: '2s',
					opacity: parallax >= 95 ? 1 : 0,
					transform: parallax > 95 ? 'translateY(0%)' : 'translateY(50%)',
				}}
			/>
			<S.AbuotText
				href='https://velog.io/@juno97'
				target='_blank'
				gridArea='vText'
				parallax={parallax}>
				juno97.log
			</S.AbuotText>
			<BsGithub
				size='4rem'
				style={{
					gridArea: 'gIcon',
					transition: '2s',
					opacity: parallax >= 95 ? 1 : 0,
					transform: parallax > 95 ? 'translateY(0%)' : 'translateY(50%)',
				}}
			/>
			<S.AbuotText
				href='https://github.com/kimjuno97'
				target='_blank'
				gridArea='gText'
				parallax={parallax}>
				kimjuno97
			</S.AbuotText>
			<IoMdCall
				size='4rem'
				style={{
					gridArea: 'pIcon',
					transition: '2s',
					opacity: parallax >= 95 ? 1 : 0,
					transform: parallax > 95 ? 'translateY(0%)' : 'translateY(50%)',
				}}
			/>
			<S.AbuotText gridArea='pText' parallax={parallax}>
				010-4558-6895
			</S.AbuotText>
			<MdEmail
				size='4rem'
				style={{
					gridArea: 'eIcon',
					transition: '2s',
					opacity: parallax >= 95 ? 1 : 0,
					transform: parallax > 95 ? 'translateY(0%)' : 'translateY(50%)',
				}}
			/>
			<S.AbuotText gridArea='eText' parallax={parallax}>
				jh241093@gmail.com
			</S.AbuotText>
		</S.AboutMeContainer>
	);
}
