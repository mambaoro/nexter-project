/* eslint-disable indent */
import { createGlobalStyle, css } from 'styled-components';
import { media, bps } from './index';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #c69963;
    --color-primary-dark: #B28451;
    --color-primary-rgba: rgba(198, 153, 99, 0.5);

    --color-secondary: #101d2c;
    --color-secondary-rgba: rgba(16, 29, 44, 0.93);

    --color-grey-light-1: #f9f7f6;
    --color-grey-light-2: #aaa; 

    --color-grey-dark-1: #54483A;
    --color-grey-dark-2: #6D5D4B;

    --font-primary: 'Nunito', sans-serif;
    --font-display: 'Josefin Sans', sans-serif;

    --bp-largest: 75em;
  }
  
  *,
  *::after,
  *::before,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html,
  body {
    font-family: var(--font-primary);
    box-sizing: border-box;
    font-size: 62.5%;
    color: var(--color-grey-dark-2);
    font-weight: 300;
    line-height: 1.6;
    ${media(
      css`
        font-size: 50%;
      `,
      bps().largest,
    )}
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
