/* eslint-disable indent */
// COLOR VARIABLES
// $color-primary: #c69963;
// $color-primary-dark: #B28451;

// $color-secondary: #101d2c;

// $color-grey-light-1: #f9f7f6;
// $color-grey-light-2: #aaa;

// $color-grey-dark-1: #54483A;
// $color-grey-dark-2: #6D5D4B;

// FONT VARIABLES
// $font-primary: 'Nunito', sans-serif;
// $font-display: 'Josefin Sans', sans-serif;

import { css } from 'styled-components';

// Headings styles
export function headingsGlobalStyle() {
  return css`
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 1.9rem;
  `;
}
export function h4GlobalStyle() {
  return css`
    color: ${props => {
      if (props.className === 'dark') {
        return 'var(--color-grey-dark-1)';
      }
      if (props.className === 'ligth') {
        return 'var(--color-grey-light-1)';
      }
      return '';
    }};
  `;
}

export function h3GlobalStyle() {
  return css`
    font-size: 1.6rem !important;
    color: var(--color-primary);
    text-transform: uppercase;
  `;
}

export function h2GlobalStyle() {
  return css`
    color: ${props => {
      if (props.className === 'dark') {
        return 'var(--color-grey-dark-1)';
      }
      if (props.className === 'ligth') {
        return 'var(--color-grey-light-1)';
      }
      return '';
    }};
  `;
}

export function h1GlobalStyle() {
  return css`
    font-size: 4.5rem;
    color: var(--color-grey-light-1);
    line-height: 1;
  `;
}

// Margin styles
export function marginBottomSmall() {
  return css`
    margin-bottom: 2rem;
  `;
}

export function marginBottomMedium() {
  return css`
    margin-bottom: 3rem;
  `;
}

export function marginBottomLarge() {
  return css`
    margin-bottom: 4rem;
  `;
}

export function marginBottomHuge() {
  return css`
    margin-bottom: 8rem;
  `;
}

// Responsive Breakpoints

export function media(content, bp) {
  return css`
    @media only screen and (max-width: ${bp}) {
      ${content}
    }
  `;
}

export function bps() {
  return {
    largest: `75em`, // 1200px
    large: '62.5em', // 1000px
    medium: '50em', // 800px
    small: '37.5em', // 600px
  };
}
