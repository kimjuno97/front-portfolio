import S from "./Styled.AboutMe";

import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";

import useAboutMe from "./useAboutMe";

interface AboutMeProperty {
  url: string;
  text: string;
}

const BLOG: AboutMeProperty = {
  url: "https://kimjunho97.tistory.com",
  text: "Juno's Technical blog",
};

const GITHUB: AboutMeProperty = {
  url: "https://github.com/kimjuno97",
  text: "Rogan",
};

export default function AboutMe() {
  const { parallax, observerRef } = useAboutMe();

  const commonIconCssProperty: React.CSSProperties = {
    transition: "2s",
    opacity: parallax >= 95 ? 1 : 0,
    transform: parallax > 95 ? "translateY(0%)" : "translateY(50%)",
  };

  return (
    <S.AboutMeContainer id="about" ref={observerRef}>
      <S.AboutMeTitle parallax={parallax}>☎︎ ABOUT ME</S.AboutMeTitle>
      <a href={BLOG.url} target="_blank" rel="noreferrer">
        <FaBloggerB
          size="4rem"
          style={{
            gridArea: "vIcon",
            ...commonIconCssProperty,
          }}
        />
      </a>
      <S.AboutText
        href={BLOG.url}
        target="_blank"
        gridArea="vText"
        parallax={parallax}
      >
        {BLOG.text}
      </S.AboutText>
      <a href={GITHUB.url} target="_blank" rel="noreferrer">
        <BsGithub
          size="4rem"
          style={{
            gridArea: "gIcon",
            ...commonIconCssProperty,
          }}
        />
      </a>
      <S.AboutText
        href={GITHUB.url}
        target="_blank"
        gridArea="gText"
        parallax={parallax}
      >
        {GITHUB.text}
      </S.AboutText>

      <MdEmail
        size="4rem"
        style={{
          gridArea: "eIcon",
          ...commonIconCssProperty,
        }}
      />
      <S.AboutText gridArea="eText" parallax={parallax}>
        jh241093@gmail.com
      </S.AboutText>
    </S.AboutMeContainer>
  );
}
