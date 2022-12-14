import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function usePuzzle() {
	const navigate = useNavigate();

	const dragItem = useRef<number | null>(null);
	const dragOverItem = useRef<number | null>(null);

	const [scale, setScale] = useState(true);

	const [puzzle, setPuzzle] = useState([
		{ num: 3, url: '/img/cat/001.jpeg' },
		{ num: 7, url: '/img/cat/002.jpeg' },
		{ num: 1, url: '/img/cat/003.jpeg' },
		{ num: 2, url: '/img/cat/004.jpeg' },
		{ num: 5, url: '/img/cat/006.jpeg' },
		{ num: 4, url: '/img/cat/005.jpeg' },
		{ num: 8, url: '/img/cat/007.jpeg' },
		{ num: 9, url: '/img/cat/008.jpeg' },
		{ num: 6, url: '/img/cat/009.jpeg' },
	]);

	const dragStart = (idx: number) => {
		dragItem.current = idx;
		setScale(false);
	};
	const dragEnter = (idx: number) => {
		dragOverItem.current = idx;
	};

	const drop = () => {
		setTimeout(() => setScale(true), 800);
		if (
			typeof dragItem.current === 'number' &&
			typeof dragOverItem.current === 'number'
		) {
			const copyListItems = [...puzzle];

			const dragItemContent = [...puzzle][dragItem.current];
			const changTargetItemContent = [...puzzle][dragOverItem.current];
			copyListItems[dragItem.current] = changTargetItemContent;
			copyListItems[dragOverItem.current] = dragItemContent;

			dragItem.current = null;
			dragOverItem.current = null;
			setPuzzle(copyListItems);
		}
	};

	useEffect(() => {
		let pass = '';
		puzzle.forEach(({ num }) => (pass += num));
		if (pass === '691542873' || pass === '698542173') {
			navigate('/main');
		}
	}, [navigate, puzzle]);

	return { puzzle, dragStart, dragEnter, drop, scale };
}
