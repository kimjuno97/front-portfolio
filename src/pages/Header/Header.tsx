import React from 'react';

import S from './Styled.Header';

interface TypeHeader {
	accordionToggle: boolean;
	setAccordionToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
	accordionToggle,
	setAccordionToggle,
}: TypeHeader) {
	return (
		<S.Container>
			<S.HeaderContent>
				<S.HeaderTitle>Juno's Portfolio</S.HeaderTitle>
				<S.AccordionIcon onClick={() => setAccordionToggle(prev => !prev)}>
					🟰
				</S.AccordionIcon>
			</S.HeaderContent>
			<S.Accordion accordionToggle={accordionToggle}>
				{CONTENTS.map(({ text, url }, idx) => (
					<S.AccordionContent
						onClick={() => setAccordionToggle(prev => !prev)}
						key={idx}>
						<a href={url}>{text}</a>
					</S.AccordionContent>
				))}
			</S.Accordion>
		</S.Container>
	);
}

const CONTENTS = [
	{ text: 'Profile', url: '#profile' },
	{ text: 'About me', url: '#about' },
	{ text: 'Skills', url: '#skills' },
	{ text: 'Appeal', url: '#appeal' },
	{ text: 'Projects', url: '#projects' },
];
