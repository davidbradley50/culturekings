import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
