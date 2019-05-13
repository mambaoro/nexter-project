/**
 *
 * Realtors
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  headingsGlobalStyle,
  h3GlobalStyle,
  h4GlobalStyle,
  media,
  bps,
} from '../../index';
import realtor1 from '../../images/realtor-1.jpeg';
import realtor2 from '../../images/realtor-2.jpeg';
import realtor3 from '../../images/realtor-3.jpeg';

function Realtors() {
  return (
    <Div>
      <H3Heading3>Top 3 Realtors</H3Heading3>
      <DivRealtorsList>
        <ImgRealtorsImg src={realtor1} alt="Realtor 1" />
        <DivRealtorsDetails>
          <H4Heading4 className="light">Erik Feinman</H4Heading4>
          <ParagraphRealtorsSold>245 Houses Sold</ParagraphRealtorsSold>
        </DivRealtorsDetails>
        <ImgRealtorsImg src={realtor2} alt="Realtor 2" />
        <DivRealtorsDetails>
          <H4Heading4 className="light">Kim Brown</H4Heading4>
          <ParagraphRealtorsSold>212 Houses Sold</ParagraphRealtorsSold>
        </DivRealtorsDetails>
        <ImgRealtorsImg src={realtor3} alt="Realtor 3" />
        <DivRealtorsDetails>
          <H4Heading4 className="light">Toby Ramsey</H4Heading4>
          <ParagraphRealtorsSold>198 Houses Sold</ParagraphRealtorsSold>
        </DivRealtorsDetails>
      </DivRealtorsList>
    </Div>
  );
}

const Div = styled.div`
  background-color: var(--color-secondary);
  grid-column: col-start 7 / full-end;
  padding: 3rem;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-row-gap: 2rem;
  ${media(
    css`
      grid-column: full-start / full-end;
    `,
    bps().medium,
  )}
`;

const H3Heading3 = styled.h3`
  ${headingsGlobalStyle}
  ${h3GlobalStyle}
  justify-self: center;
`;

const DivRealtorsList = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 2rem;
  grid-row-gap: 5vh;
  align-items: center;
  ${media(
    css`
      grid-template-columns: repeat(3, min-content max-content);
      justify-items: center;
    `,
    bps().medium,
  )}
  ${media(
    css`
      grid-template-columns: min-content max-content;
    `,
    bps().small,
  )}
`;

const ImgRealtorsImg = styled.img`
  width: 7rem;
  display: block;
  border-radius: 50%;
`;

const DivRealtorsDetails = styled.div``;

const H4Heading4 = styled.h4`
  ${headingsGlobalStyle}
  ${h4GlobalStyle}
  color: var(--color-grey-light-1);
`;

const ParagraphRealtorsSold = styled.p`
  text-transform: uppercase;
  color: var(--color-grey-light-2);
  margin-top: -3px;
  font-size: 1rem;
`;

Realtors.propTypes = {};

export default Realtors;
