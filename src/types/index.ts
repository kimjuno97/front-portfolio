export interface TypeShowBox {
	showBox: boolean;
}

export interface TypeParallax {
	parallax: number;
}

export interface TypeGrid extends TypeParallax {
	gridArea: 'vText' | 'pText' | 'eText' | 'gText';
}

export interface TypeAccordionIcon {
	accordionToggle: boolean;
}
