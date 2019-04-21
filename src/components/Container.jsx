import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: inherit;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  z-index: ${({ relative }) => relative ? '1' : 'auto'};
  position: ${({ relative }) => relative ? 'relative' : 'static'};

  ${({ flex }) => flex && `
    display: flex;
    flex-flow: column nowrap;
  `}

  ${({ fluid }) => fluid && `
    max-width: 100%!important;
    padding: 0;
  `}

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    max-width: 970px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: auto;
  }
`;

Container.propTypes = {
  children: PropTypes.any,
  relative: PropTypes.bool,
  flex: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Container;
