import { useEffect, useState, useRef } from 'react';

export default function useProfile() {
	const [text, setText] = useState({
		top: '',
		bot: '',
	});
	const countRef = useRef({
		top: -1,
		bot: -1,
	});
	useEffect(() => {
		setTimeout(() => {
			if (text.top !== PROFILE_TOP) {
				countRef.current.top += 1;
				setText(prev => ({
					...prev,
					top: PROFILE_TOP.substring(0, countRef.current.top),
				}));
			}
			if (text.top === PROFILE_TOP && text.bot !== PROFILE_BOT) {
				countRef.current.bot += 1;
				setText(prev => ({
					...prev,
					bot: PROFILE_BOT.substring(0, countRef.current.bot),
				}));
			}
		}, 100);
	}, [text]);
	return { text };
}

const PROFILE_TOP = '인터랙티브한 경험을 나누는';

const PROFILE_BOT = '프론트엔드 개발자 김준호입니다';
