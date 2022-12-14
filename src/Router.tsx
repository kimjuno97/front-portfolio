import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Profile from './pages/Profile/Profile';
import Puzzle from './pages/Puzzle/Puzzle';

export default function Roter() {
	const [accordionToggle, setAccordionToggle] = useState(false);
	return (
		<BrowserRouter basename='/front-portfolio'>
			<Header
				accordionToggle={accordionToggle}
				setAccordionToggle={setAccordionToggle}
			/>
			<Routes>
				<Route path='/' element={<Puzzle />} />
				<Route
					path='/main'
					element={<Profile accordionToggle={accordionToggle} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
