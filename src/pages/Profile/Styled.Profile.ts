import styled from "styled-components";

import { TypeAccordionIcon } from "../../types";

const Container = styled.div`
  margin-top: 8rem;
  padding: 6rem 0;
  background: #2750e5c9;
  min-height: 46rem;
  @media (max-width: 700px) {
    min-height: 70rem;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;

const ProfileTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 700px) {
    min-width: 50rem;
    max-width: 50rem;
  }

  @media (max-width: 820px) {
    padding-left: 1rem;
  }
`;

const ProfileText = styled.div<TypeAccordionIcon>`
  width: auto;
  min-height: 2rem;
  color: white;
  font-size: 2.2rem;
  line-height: 3rem;
  font-weight: bold;
  transition: 1s;
  white-space: pre-wrap;
  opacity: ${({ accordionToggle }) => (accordionToggle ? "0" : "1")};
`;

const Profile = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 9999px;
  z-index: 1;
  @media (max-width: 820px) {
    margin-left: 50%;
    transform: translate(-50%, 0);
  }
`;

const S = {
  Container,
  ProfileContainer,
  ProfileTextArea,
  ProfileText,
  Profile,
};

export default S;
