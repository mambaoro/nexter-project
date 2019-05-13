/**
 *
 * Gallery
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import gal1 from '../../images/gal-1.jpeg';
import gal2 from '../../images/gal-2.jpeg';
import gal3 from '../../images/gal-3.jpeg';
import gal4 from '../../images/gal-4.jpeg';
import gal5 from '../../images/gal-5.jpeg';
import gal6 from '../../images/gal-6.jpeg';
import gal7 from '../../images/gal-7.jpeg';
import gal8 from '../../images/gal-8.jpeg';
import gal9 from '../../images/gal-9.jpeg';
import gal10 from '../../images/gal-10.jpeg';
import gal11 from '../../images/gal-11.jpeg';
import gal12 from '../../images/gal-12.jpeg';
import gal13 from '../../images/gal-13.jpeg';
import gal14 from '../../images/gal-14.jpeg';

function Gallery() {
  return (
    <Section>
      <FigureGalleryItem className="item-1">
        <ImgGalleryImg src={gal1} alt="Gallery image 1" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-2">
        <ImgGalleryImg src={gal2} alt="Gallery image 2" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-3">
        <ImgGalleryImg src={gal3} alt="Gallery image 3" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-4">
        <ImgGalleryImg src={gal4} alt="Gallery image 4" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-5">
        <ImgGalleryImg src={gal5} alt="Gallery image 5" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-6">
        <ImgGalleryImg src={gal6} alt="Gallery image 6" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-7">
        <ImgGalleryImg src={gal7} alt="Gallery image 7" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-8">
        <ImgGalleryImg src={gal8} alt="Gallery image 8" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-9">
        <ImgGalleryImg src={gal9} alt="Gallery image 9" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-10">
        <ImgGalleryImg src={gal10} alt="Gallery image 10" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-11">
        <ImgGalleryImg src={gal11} alt="Gallery image 11" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-12">
        <ImgGalleryImg src={gal12} alt="Gallery image 12" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-13">
        <ImgGalleryImg src={gal13} alt="Gallery image 13" />
      </FigureGalleryItem>
      <FigureGalleryItem className="item-14">
        <ImgGalleryImg src={gal14} alt="Gallery image 14" />
      </FigureGalleryItem>
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--color-grey-light-1);
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;
`;

const FigureGalleryItem = styled.figure`
  &.item-1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  }
  &.item-2 {
    grid-row: 1 / span 3;
    grid-column: 3 / 6;
  }
  &.item-3 {
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
  }
  &.item-4 {
    grid-row: 1 / span 2;
    grid-column: 7 / -1;
  }
  &.item-5 {
    grid-row: 3 / span 3;
    grid-column: 1 / 3;
  }
  &.item-6 {
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
  }
  &.item-7 {
    grid-row: 4 / span 1;
    grid-column: 5 / span 1;
  }
  &.item-8 {
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
  }
  &.item-9 {
    grid-row: 3 / span 3;
    grid-column: 8 / -1;
  }
  &.item-10 {
    grid-row: 6 / -1;
    grid-column: 1 / span 1;
  }
  &.item-11 {
    grid-row: 6 / -1;
    grid-column: 2 / span 2;
  }
  &.item-12 {
    grid-row: 6 / -1;
    grid-column: 4 / span 1;
  }
  &.item-13 {
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
  }
  &.item-14 {
    grid-row: 6 / span 2;
    grid-column: 8 / -1;
  }
`;

const ImgGalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

Gallery.propTypes = {};

export default Gallery;
