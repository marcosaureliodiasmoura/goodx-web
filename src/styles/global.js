import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {

  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: #283593;;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

`;

export default GlobalStyle;
