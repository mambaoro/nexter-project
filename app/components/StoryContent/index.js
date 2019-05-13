/**
 *
 * StoryContent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  headingsGlobalStyle,
  h2GlobalStyle,
  marginBottomSmall,
  marginBottomMedium,
  marginBottomLarge,
  media,
  bps
} from '../../index';

function StoryContent() {
  return (
    <Div>
      <H3Heading3>Happy Customers</H3Heading3>
      <H2Heading2 className="dark">
        &ldquo;The best decision of our lives&rdquo;
      </H2Heading2>
      <ParagraphStoryText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </ParagraphStoryText>
      <ButtonBtn>Find your own home</ButtonBtn>
    </Div>
  );
}

const Div = styled.div`
  background-color: var(--color-grey-light-1);
  grid-column: col-start 5 / full-end;
  padding: 6rem 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${media(
    css`
      grid-column: 1 / -1;
      grid-row: 5 / 6;
      padding: 9rem 8vw;
    `,
    bps().medium,
  )}
`;

const H3Heading3 = styled.h3`
  ${headingsGlobalStyle}
  ${marginBottomSmall}
  font-size: 1.6rem;
  color: var(--color-primary);
  text-transform: uppercase;
`;

const H2Heading2 = styled.h2`
  ${headingsGlobalStyle}
  ${h2GlobalStyle}
  ${marginBottomMedium}
  font-size: 4rem;
  font-style: italic;
  line-height: 1;
`;

const ParagraphStoryText = styled.p`
  ${marginBottomLarge}
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
`;

const buttonStyle = css`
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background-color: var(--color-primary-dark);
  }
`;

const ButtonBtn = styled.button`
  ${buttonStyle}
`;

StoryContent.propTypes = {};

export default StoryContent;

export { buttonStyle };
