import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../breakpoints';

const Footer = styled.footer`
  padding: 15px;
  text-align: center;
  margin-top: auto;

  @media ${device.mobile} {
    display: none;
  }
`;

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
