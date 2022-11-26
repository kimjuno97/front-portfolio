import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Profile from './pages/Profile/Profile';

export default function Roter() {
	const [accordionToggle, setAccordionToggle] = useState(false);
	return (
		<BrowserRouter>
			<Header
				accordionToggle={accordionToggle}
				setAccordionToggle={setAccordionToggle}
			/>
			<Routes>
				<Route
					path='/'
					element={<Profile accordionToggle={accordionToggle} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
