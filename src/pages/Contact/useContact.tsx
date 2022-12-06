import React, { useState, useRef, useEffect } from 'react';

import percentageArray from '../../utills/percentageArray';
import postMail from '../../utills/postMail';

export default function useContact() {
	const observerRef = useRef<HTMLDivElement | null>(null);

	const [parallax, setParallax] = useState(0);

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

	const [inputValues, setInputValues] = useState({
		name: '',
		message: '',
	});

	const inputValuesHandler = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setInputValues(prev => ({ ...prev, [name]: value }));
	};

	const postMessage = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (window.confirm('송신하겠습니다?')) {
			postMail(inputValues);
		}
		setInputValues(prev => ({ name: '', message: '' }));
	};
	return {
		inputValues,
		inputValuesHandler,
		postMessage,
		parallax,
		observerRef,
	};
}
