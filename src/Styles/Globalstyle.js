import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Pretendard';
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  input:focus {
    outline: none;
  }

  html,
  body,
  #root {
    height: 616px;
    top:24px;
    width: 360px;
  }
`;

export default GlobalStyle;
