import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    color: inherit;
  }

  img {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
