/**
 *
 * Features
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import global from '../../images/global.svg';
import trophy from '../../images/trophy.svg';
import mapPin from '../../images/placeholder.svg';
import key from '../../images/house-key.svg';
import presentation from '../../images/presentation.svg';
import lock from '../../images/locked.svg';
import { headingsGlobalStyle, h4GlobalStyle, media, bps } from '../../index';

function Features() {
  return (
    <Section>
      <DivFeature>
        <ObjectFeatureIcon data={global} />
        <H4Heading4 className="dark">World&apos;s best luxury homes</H4Heading4>
        <ParagraphFeatureText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </ParagraphFeatureText>
      </DivFeature>
      <DivFeature>
        <ObjectFeatureIcon data={trophy} />
        <H4Heading4 className="dark">Only the best properties</H4Heading4>
        <ParagraphFeatureText>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </ParagraphFeatureText>
      </DivFeature>
      <DivFeature>
        <ObjectFeatureIcon data={mapPin} />
        <H4Heading4 className="dark">All homes in top location</H4Heading4>
        <ParagraphFeatureText>
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </ParagraphFeatureText>
      </DivFeature>
      <DivFeature>
        <ObjectFeatureIcon data={key} />
        <H4Heading4 className="dark">New home in one week</H4Heading4>
        <ParagraphFeatureText>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </ParagraphFeatureText>
      </DivFeature>
      <DivFeature>
        <ObjectFeatureIcon data={presentation} />
        <H4Heading4 className="dark">Top 1% realtors</H4Heading4>
        <ParagraphFeatureText>
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </ParagraphFeatureText>
      </DivFeature>
      <DivFeature>
        <ObjectFeatureIcon data={lock} />
        <H4Heading4 className="dark">Secure payment on nexter</H4Heading4>
        <ParagraphFeatureText>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </ParagraphFeatureText>
      </DivFeature>
    </Section>
  );
}

const Section = styled.section`
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
  ${media(
    css`
      margin: 10rem 0;
      margin-bottom: 0;
    `,
    bps().medium,
  )}
`;

const DivFeature = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 0.8rem;
  grid-column-gap: 2.5rem;
`;

const ObjectFeatureIcon = styled.object`
  height: 4.5rem;
  width: 4.5rem;
  grid-row: 1 / -1;
  align-self: center;
`;

const H4Heading4 = styled.h4`
  ${headingsGlobalStyle}
  ${h4GlobalStyle}
  grid-column: 2 / -1;
  align-self: center;
`;

const ParagraphFeatureText = styled.p`
  font-size: 1.7rem;
  grid-column: 2 / -1;
`;

Features.propTypes = {};

export default Features;
