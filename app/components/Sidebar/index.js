/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media, bps } from '../../index';

function Sidebar() {
  return (
    <Div>
      <ButtonNavBtn />
    </Div>
  );
}

const Div = styled.div`
  background-color: var(--color-primary);
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
  display: flex;
  justify-content: center;
  ${media(
    css`
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      justify-content: flex-end;
      align-items: center;
    `,
    bps().large,
  )}
`;

const ButtonNavBtn = styled.button`
  border: none;
  border-radius: none;
  background-color: #fff;
  height: 2px;
  width: 4.5rem;
  position: relative;
  display: block;
  margin-top: 4rem;
  ::after,
  ::before {
    content: '';
    background-color: #fff;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
  }
  ::before {
    top: -1.5rem;
  }
  ::after {
    bottom: -1.5rem;
  }
  ${media(
    css`
      margin-top: 0;
      margin-right: 3rem;
      ::before {
        top: -1.2rem;
      }
      ::after {
        bottom: -1.2rem;
      }
    `,
    bps().large,
  )}
`;

Sidebar.propTypes = {};

export default Sidebar;
