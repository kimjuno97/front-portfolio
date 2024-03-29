import styled from "styled-components";

import { TypeParallax, TypeGrid } from "../../types";

const AboutMeContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "vIcon vText"
    "gIcon gText"
    "eIcon eText";
  grid-template-columns: 5rem 30rem;
  align-items: center;
  column-gap: 5rem;
  row-gap: 4rem;
  min-width: 30rem;
  height: 100vh;
  margin: 0 auto;
  padding: 12rem 6rem;
  background: tomato;
`;

const AboutMeTitle = styled.h1<TypeParallax>`
  grid-area: header;
  font-size: 5rem;
  font-weight: bold;
  transition: 0.5s;
  opacity: ${({ parallax }) => parallax / 100};
  transform: ${({ parallax }) =>
    parallax <= 85 ? `translateX(-${150 - parallax}%)` : `translateX(0%)`};
`;

const AboutContents = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const AboutText = styled.a<TypeGrid>`
  grid-area: ${({ gridArea }) => gridArea};
  font-size: 3rem;
  transition: 2s;
  opacity: ${({ parallax }) => (parallax >= 95 ? 1 : 0)};
  transform: ${({ parallax }) =>
    parallax >= 95 ? "translateY(0%)" : "translateY(50%)"};
`;

const S = { AboutMeContainer, AboutMeTitle, AboutContents, AboutText };

export default S;
