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
  
  body {
    font-family: "IBM Plex Sans KR", sans-serif;
    background-color: #FDFDFD;
  }

  img {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
