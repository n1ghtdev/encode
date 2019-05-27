import PropTypes from 'prop-types';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 15px;
  text-align: center;
  margin-top: auto;
`;

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
