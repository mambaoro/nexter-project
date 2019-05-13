/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterElement>
      <UlNav>
        <ListItemNavItem>
          <AnchorNavLink href="#">find your dream home</AnchorNavLink>
        </ListItemNavItem>
        <ListItemNavItem>
          <AnchorNavLink href="#">request proposal</AnchorNavLink>
        </ListItemNavItem>
        <ListItemNavItem>
          <AnchorNavLink href="#">download home planner</AnchorNavLink>
        </ListItemNavItem>
        <ListItemNavItem>
          <AnchorNavLink href="#">contact us</AnchorNavLink>
        </ListItemNavItem>
        <ListItemNavItem>
          <AnchorNavLink href="#">submit your property</AnchorNavLink>
        </ListItemNavItem>
        <ListItemNavItem>
          <AnchorNavLink href="#">come work with us!</AnchorNavLink>
        </ListItemNavItem>
      </UlNav>
      <ParagraphCopyright>
        &copy; Copyright 2019 by Jonas Schmedtmann.
      </ParagraphCopyright>
    </FooterElement>
  );
}

const FooterElement = styled.footer`
  background-color: var(--color-secondary);
  grid-column: full-start / full-end;
  padding: 8rem;
`;

const UlNav = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const ListItemNavItem = styled.li`
  list-style: none;
  justify-self: stretch;
`;

const AnchorNavLink = styled.a`
  :link,
  :visited {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: var(--font-display);
    color: #fff;
    display: block;
    text-align: center;
    transition: all 0.2s;
    padding: 1.5rem;
    width: 100%;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.06);
    transform: translateY(-0.4rem);
  }
  :active,
  :focus {
    outline: none;
  }
`;

const ParagraphCopyright = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-light-2);
  margin-top: 6rem;
  text-align: center;
`;

Footer.propTypes = {};

export default Footer;
