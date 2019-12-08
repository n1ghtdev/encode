import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../breakpoints';

const Footer = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;

  @media ${device.mobile} {
    display: none;
  }
`;

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
