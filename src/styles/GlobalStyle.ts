import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  a {
    color:#333
  }
  ul {
    list-style:none;
  }
`;

export default GlobalStyle;
