/**
 *
 * Homes
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import house1 from '../../images/house-1.jpeg';
import house2 from '../../images/house-2.jpeg';
import house3 from '../../images/house-3.jpeg';
import house4 from '../../images/house-4.jpeg';
import house5 from '../../images/house-5.jpeg';
import house6 from '../../images/house-6.jpeg';
import heartFull from '../../images/favorite-heart-button.svg';
import locationPin from '../../images/placeholder.svg';
import user from '../../images/user.svg';
import area from '../../images/area.svg';
import key from '../../images/house-key.svg';
import { buttonStyle } from '../StoryContent';

function Homes() {
  return (
    <Section>
      <DivHome>
        <ImgHomeImg src={house1} alt="House 1" />
        <ObjectLikeIcon data={heartFull} />
        <H5HomeName>Beautiful Family House</H5HomeName>
        <DivHomeLocation className="location">
          <Object data={locationPin} />
          <Paragraph>USA</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="rooms">
          <Object data={user} />
          <Paragraph>5 rooms</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="area">
          <Object data={area} />
          <Paragraph>
            325 m<sup>2</sup>
          </Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="price">
          <Object data={key} />
          <Paragraph>&#36;1,200,000</Paragraph>
        </DivHomeLocation>
        <Btn>Contact Realtor</Btn>
      </DivHome>
      <DivHome>
        <ImgHomeImg src={house2} alt="House 2" />
        <ObjectLikeIcon data={heartFull} />
        <H5HomeName>Modern Glass Villa</H5HomeName>
        <DivHomeLocation className="location">
          <Object data={locationPin} />
          <Paragraph>Canada</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="rooms">
          <Object data={user} />
          <Paragraph>6 rooms</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="area">
          <Object data={area} />
          <Paragraph>
            450 m<sup>2</sup>
          </Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="price">
          <Object data={key} />
          <Paragraph>&#36;2,750,000</Paragraph>
        </DivHomeLocation>
        <Btn>Contact Realtor</Btn>
      </DivHome>
      <DivHome>
        <ImgHomeImg src={house3} alt="House 3" />
        <ObjectLikeIcon data={heartFull} />
        <H5HomeName>Cozy Country House</H5HomeName>
        <DivHomeLocation className="location">
          <Object data={locationPin} />
          <Paragraph>UK</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="rooms">
          <Object data={user} />
          <Paragraph>4 rooms</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="area">
          <Object data={area} />
          <Paragraph>
            250 m<sup>2</sup>
          </Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="price">
          <Object data={key} />
          <Paragraph>&#36;850,000</Paragraph>
        </DivHomeLocation>
        <Btn>Contact Realtor</Btn>
      </DivHome>
      <DivHome>
        <ImgHomeImg src={house4} alt="House 4" />
        <ObjectLikeIcon data={heartFull} />
        <H5HomeName>Large Rustical Villa</H5HomeName>
        <DivHomeLocation className="location">
          <Object data={locationPin} />
          <Paragraph>Portugal</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="rooms">
          <Object data={user} />
          <Paragraph>6 rooms</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="area">
          <Object data={area} />
          <Paragraph>
            480 m<sup>2</sup>
          </Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="price">
          <Object data={key} />
          <Paragraph>&#36;1,950,000</Paragraph>
        </DivHomeLocation>
        <Btn>Contact Realtor</Btn>
      </DivHome>
      <DivHome>
        <ImgHomeImg src={house5} alt="House 5" />
        <ObjectLikeIcon data={heartFull} />
        <H5HomeName>Majestic Palace House</H5HomeName>
        <DivHomeLocation className="location">
          <Object data={locationPin} />
          <Paragraph>Germany</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="rooms">
          <Object data={user} />
          <Paragraph>18 rooms</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="area">
          <Object data={area} />
          <Paragraph>
            4230 m<sup>2</sup>
          </Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="price">
          <Object data={key} />
          <Paragraph>&#36;9,500,000</Paragraph>
        </DivHomeLocation>
        <Btn>Contact Realtor</Btn>
      </DivHome>
      <DivHome>
        <ImgHomeImg src={house6} alt="House 6" />
        <ObjectLikeIcon data={heartFull} />
        <H5HomeName>Modern Familiy Apartment</H5HomeName>
        <DivHomeLocation className="location">
          <Object data={locationPin} />
          <Paragraph>Italy</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="rooms">
          <Object data={user} />
          <Paragraph>3 rooms</Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="area">
          <Object data={area} />
          <Paragraph>
            180 m<sup>2</sup>
          </Paragraph>
        </DivHomeLocation>
        <DivHomeLocation className="price">
          <Object data={key} />
          <Paragraph>&#36;600,000</Paragraph>
        </DivHomeLocation>
        <Btn>Contact Realtor</Btn>
      </DivHome>
    </Section>
  );
}

const Section = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;
`;

const DivHome = styled.div`
  background-color: var(--color-grey-light-1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3.5rem;
`;

const ImgHomeImg = styled.img`
  width: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 1;
`;

const ObjectLikeIcon = styled.object`
  height: 2.2rem;
  width: auto;
  grid-row: 1 / 2;
  grid-column: 2 / -1;
  justify-self: end;
  z-index: 2;
  margin: 1rem;
`;

const H5HomeName = styled.h5`
  font-family: var(--font-display);
  font-weight: 400;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
  padding: 1.25rem;
  background-color: var(--color-secondary);
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: end;
  transform: translateY(50%);
  width: 80%;
  z-index: 2;
`;

const DivHomeLocation = styled.div`
  display: flex;
  align-items: center;
  &.location,
  &.rooms {
    margin-top: 2.5rem;
  }

  &.location,
  &.rooms,
  &.area,
  &.price {
    font-size: 1.5rem;
    margin-left: 2rem;
  }
`;

const Object = styled.object`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;

const Paragraph = styled.p``;

const Btn = styled.button`
  ${buttonStyle}
  padding: 1.5rem 3rem !important;
  grid-column: 1 / -1;
  align-self: end;
`;

Homes.propTypes = {};

export default Homes;
