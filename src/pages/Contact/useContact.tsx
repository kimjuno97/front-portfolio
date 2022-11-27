import React, { useState } from 'react';
import postMail from '../../utils/postMail';

export default function useContact() {
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
	};
	return { inputValues, inputValuesHandler, postMessage };
}
