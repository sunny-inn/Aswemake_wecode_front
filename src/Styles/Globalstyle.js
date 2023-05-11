import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { flex } from './Mixin';

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

  @media (max-width: 768px) {
  html,
  body,
  #root {
    ${flex('center', 'center', 'column')}
    width: 100vw;
    height: 100vh;
  }
}
`;

export default GlobalStyle;
