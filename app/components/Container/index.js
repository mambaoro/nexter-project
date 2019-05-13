/**
 *
 * Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Sidebar from '../Sidebar/Loadable';
import Header from '../Header/Loadable';
import Realtors from '../Realtors/Loadable';
import Features from '../Features/Loadable';
import StoryPictures from '../StoryPictures/Loadable';
import StoryContent from '../StoryContent/Loadable';
import Homes from '../Homes/Loadable';
import Gallery from '../Gallery/Loadable';
import Footer from '../Footer/Loadable';
import { media, bps } from '../../index';

function Container() {
  return (
    <Div>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </Div>
  );
}

const Div = styled.div`
  display: grid;
  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] minmax(6rem, 1fr) [full-end];
  ${media(
    css`
      grid-template-rows: 6rem calc(80vh - 6rem) min-content 40vw repeat(
          3,
          min-content
        );
      grid-template-columns:
        [full-start] minmax(6rem, 1fr)
        [center-start] repeat(
          8,
          [col-start] minmax(min-content, 14rem) [col-end]
        )
        [center-end] minmax(6rem, 1fr) [full-end];
    `,
    bps().large,
  )}
  ${media(
    css`
      grid-template-rows: 6rem calc(80vh - 6rem) repeat(3, min-content) 40vw repeat(
          3,
          min-content
        );
      grid-template-columns:
        [full-start] minmax(6rem, 1fr)
        [center-start] repeat(
          8,
          [col-start] minmax(min-content, 14rem) [col-end]
        )
        [center-end] minmax(6rem, 1fr) [full-end];
    `,
    bps().medium,
  )}
`;

Container.propTypes = {};

export default Container;
