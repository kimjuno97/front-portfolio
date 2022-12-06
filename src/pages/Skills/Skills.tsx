import React from 'react';

import S from './Styled.Skills';

import { BsStack, BsGithub } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript } from 'react-icons/di';
import { SiTypescript, SiStyledcomponents } from 'react-icons/si';
import { FaSass, FaReact, FaJira, FaFigma } from 'react-icons/fa';

import useSkills from './useSkills';

export default function Skills() {
	const { parallax, showBox, observerRef } = useSkills();

	return (
		<S.SkillsContainer id='skills'>
			<S.SkillsTitleArea ref={observerRef} parallax={parallax}>
				<BsStack size='4rem' />
				<S.SkiillsTitle>Skills</S.SkiillsTitle>
			</S.SkillsTitleArea>
			<S.SkillsBoxFlexPos showBox={showBox}>
				<S.SkillsBox>
					<S.SkillName>Frontend</S.SkillName>
					<AiFillHtml5 size='7rem' fill='red' />
					<DiCss3 size='7rem' fill='blue' />
					<DiJavascript size='7rem' fill='#F1BF26' />
					<SiTypescript size='7rem' fill='#3178C6' />
					<FaSass size='7rem' fill='#CD6799' />
					<FaReact size='7rem' fill='#19D8FC' />
					<SiStyledcomponents size='7rem' fill='pink' />
				</S.SkillsBox>
				<S.SkillsBox>
					<S.SkillName>Communication</S.SkillName>
					<BsGithub size='7rem' />
					<FaJira size='7rem' fill='#2684FF' />
					<FaFigma size='7rem' fill='#be1667' />
				</S.SkillsBox>
			</S.SkillsBoxFlexPos>
		</S.SkillsContainer>
	);
}
