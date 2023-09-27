import { useEffect, useState, useRef } from "react";

export default function useProfile() {
  const [text, setText] = useState({
    top: "",
    bot: "",
  });
  const countRef = useRef({
    top: -1,
    bot: -1,
  });
  useEffect(() => {
    setTimeout(() => {
      if (text.top !== PROFILE_TOP) {
        countRef.current.top += 1;
        setText((prev) => ({
          ...prev,
          top: PROFILE_TOP.substring(0, countRef.current.top),
        }));
      }
      if (text.top === PROFILE_TOP && text.bot !== PROFILE_BOT) {
        countRef.current.bot += 1;
        setText((prev) => ({
          ...prev,
          bot: PROFILE_BOT.substring(0, countRef.current.bot),
        }));
      }
    }, 100);
  }, [text]);
  return { text };
}

const PROFILE_TOP = `안녕하세요, 
소프트웨어 개발자 김준호입니다. 
저는 서비스 개발을 할 때 
'만 원 내고 쓸 수 있는 서비스인가'를 
늘 고민을 하고 개선합니다.`;

const PROFILE_BOT = `개발자 포지션에서 
먼저 만 원 내고 쓸 수 있는 서비스를 만들면,
다른 업종의 전문가와 협업을 하면 
그 가치는 충분히 만 배 이상 띌 것이라고 생각합니다.`;
