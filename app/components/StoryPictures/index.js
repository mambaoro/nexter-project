/**
 *
 * StoryPictures
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import back from '../../images/back.jpg';
import story1 from '../../images/story-1.jpeg';
import story2 from '../../images/story-2.jpeg';
import { media, bps } from '../../index';

function StoryPictures() {
  return (
    <Div>
      <ImgStory1 src={story1} alt="Couple with new house" />
      <ImgStory2 src={story2} alt="New house" />
    </Div>
  );
}

const Div = styled.div`
  background-color: var(--color-primary);
  grid-column: full-start / col-end 4;
  background-image: linear-gradient(
      var(--color-primary-rgba),
      var(--color-primary-rgba)
    ),
    url(${back});
  background-size: cover;
  display: grid;
  grid-template-columns: [full-start] 1fr repeat(4, [col-start] 1fr [col-end]) 1fr [full-end];
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  ${media(
    css`
      grid-column: 1 / -1;
      grid-row: 6 / 7;
      padding: 3rem;
    `,
    bps().medium,
  )}
`;

const ImgStory1 = styled.img`
  width: 100%;
  grid-column: col-start 1 / col-end 4;
  grid-row: 2 / span 4;
  box-shadow: 0 2rem 5rem rgba(#000, 0.1);
  ${media(
    css`
      grid-column: 1 / col-end 6;
      grid-row: 1 / -1;
      height: 100%;
      width: auto;
    `,
    bps().medium,
  )}
`;

const ImgStory2 = styled.img`
  width: 115%;
  grid-column: col-start 3 / -1;
  grid-row: 4 / -1;
  align-self: start;
  z-index: 10;
  box-shadow: 0 2rem 5rem rgba(#000, 0.2);
  ${media(
    css`
      grid-column: 4 / 7;
      grid-row: 1 / -1;
      width: 100%;
      align-self: center;
    `,
    bps().medium,
  )}
`;

StoryPictures.propTypes = {};

export default StoryPictures;
