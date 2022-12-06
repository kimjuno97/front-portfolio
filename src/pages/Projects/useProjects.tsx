import { useState, useEffect, useRef } from 'react';
import percentageArray from '../../utills/percentageArray';

export default function useProjects() {
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

	const showBox = parallax === 100;

	return { parallax, showBox, observerRef };
}
