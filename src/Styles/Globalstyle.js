import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`  
* {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;  
  }
  a{
    text-decoration: none;
    color:black;
  }
  button{
      cursor: pointer;
    }
`;

export default GlobalStyle;
