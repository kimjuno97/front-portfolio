import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
    font-size: 100%; /* 1rem 을 10px로 변환한 코드*/
    transition:0.5s;
	scroll-behavior: smooth;
    }
    @media(max-width: 800px) {
        html{
            font-size: 62.5%;
        }   
    }
    body > div {
        width:100vw;
        overflow-x: hidden;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    li {
    list-style: none;
    }
`;

export default GlobalStyle;
