/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import logo from '../../images/logo.png';
import bbc from '../../images/logo-bbc.png';
import forbes from '../../images/logo-forbes.png';
import tech from '../../images/logo-techcrunch.png';
import bi from '../../images/logo-bi.png';
import hero from '../../images/hero.jpeg';
import { buttonStyle } from '../StoryContent';
import {
  headingsGlobalStyle,
  h3GlobalStyle,
  h1GlobalStyle,
  media,
  bps,
} from '../../index';

function Header() {
  return (
    <HeaderElement>
      <ImgHeaderLogo src={logo} alt="Nexter logo" />
      <H3Heading3>Your own home:</H3Heading3>
      <H1Heading1>The ultimate personal freedom</H1Heading1>
      <ButtonBtn>View our properties</ButtonBtn>
      <DivHeaderSeenOnText>As seen on</DivHeaderSeenOnText>
      <DivHeaderSeenOnLogos>
        <img src={bbc} alt="Seen on logo 1" />
        <img src={forbes} alt="Seen on logo 1" />
        <img src={tech} alt="Seen on logo 1" />
        <img src={bi} alt="Seen on logo 1" />
      </DivHeaderSeenOnLogos>
    </HeaderElement>
  );
}

const HeaderElement = styled.header`
  background-color: var(--color-secondary);
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
      var(--color-secondary-rgba),
      var(--color-secondary-rgba)
    ),
    url(${hero});
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;
  display: grid;
  grid-template-rows: 1fr min-content minmax(min-content, 6rem) 1fr;
  grid-template-columns: minmax(min-content, max-content);
  grid-row-gap: 1.5rem;
  justify-content: center;
  ${media(
    css`
      grid-column: full-start / full-end;
    `,
    bps().medium,
  )}
  ${media(
    css`
      padding: 5rem;
      padding-top: 2.5rem;
    `,
    bps().small,
  )}
`;

const ImgHeaderLogo = styled.img`
  height: 3rem;
  justify-self: center;
`;

const H3Heading3 = styled.h3`
  ${headingsGlobalStyle}
  ${h3GlobalStyle}
`;

const H1Heading1 = styled.h1`
  ${headingsGlobalStyle}
  ${h1GlobalStyle}
`;

const ButtonBtn = styled.button`
  ${buttonStyle}
  justify-self: start;
  align-self: start;
  padding: 1.4rem 3rem !important;
`;

const DivHeaderSeenOnText = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-column-gap: 1.5rem;
  align-items: center;
  font-size: 1.6rem;
  color: var(--color-grey-light-2);
  align-self: start;
  ::before,
  ::after {
    content: '';
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

const DivHeaderSeenOnLogos = styled.div`
  img {
    max-height: 2.5rem;
    max-width: 100%;
    filter: brightness(70%);
  }
  display: grid;
  grid-template-columns: repeat(4, minmax(6rem, 1fr));
  grid-column-gap: 3rem;
  justify-items: center;
  align-items: center;
`;

Header.propTypes = {};

export default Header;
