import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import { device } from '../../breakpoints';

import Hamburger from './Hamburger';

const Wrapper = styled.div`
  display: none;
  transition: all 0.25s ease-out;
  @media ${device.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    z-index: 1;
    transform: translateX(${({ visible }) => (visible ? '0' : '-100%')});
  }
`;

const HamburgerWrapper = styled.div`
  padding: 15px 20px 10px 20px;
  display: flex;
  justify-content: flex-end;
`;

const Nav = styled.ul`
  list-style-type: none;
  width: 100%;
`;
const Item = styled.li`
  text-align: center;
  &:after {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #fff;
  }
  &:last-child:after {
    display: none;
  }
`;
const ItemLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  padding: 22px 0 15px 0;
`;

const MobileMenu = ({ location }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    /* eslint-disable no-unused-expressions */
    visible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
    /* eslint-enable no-unused-expressions */
  }, [visible]);
  useEffect(() => {
    setVisible(false);
  }, [location]);
  const onToggle = () => setVisible(!visible);
  return (
    <React.Fragment>
      <HamburgerWrapper>
        <Hamburger onClick={onToggle} active={visible} />
      </HamburgerWrapper>
      <Wrapper visible={visible}>
        <Nav>
          <Item>
            <ItemLink
              to="/encrypt"
              active={
                location.pathname === '/encrypt' || location.pathname === '/'
              }
            >
              symmetric encryption
            </ItemLink>
          </Item>
          <Item>
            <ItemLink to="/decrypt" active={location.pathname === '/decrypt'}>
              symmetric decryption
            </ItemLink>
          </Item>
          <Item>
            <ItemLink
              to="/rsa-encrypt"
              active={location.pathname === '/rsa-encrypt'}
            >
              RSA encryption
            </ItemLink>
          </Item>
          <Item>
            <ItemLink
              to="/rsa-decrypt"
              active={location.pathname === '/rsa-decrypt'}
            >
              RSA decryption
            </ItemLink>
          </Item>
          <Item>
            <ItemLink to="/about" active={location.pathname === '/about'}>
              about
            </ItemLink>
          </Item>
        </Nav>
      </Wrapper>
    </React.Fragment>
  );
};

MobileMenu.propTypes = {
  location: PropTypes.any,
};

export default withRouter(MobileMenu);
