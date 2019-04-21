import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 50%;
  background-color: #fff;
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
`;

const Row = styled.div`
  color: #fff;
  margin-top: 5px;
  background-color: #121114;
  border: 1px solid #2d2d2d;
  border-radius: 5px;
  width: 180px;
  padding: 2px 0;
`;

const ProfileContainer = ({ photoSrc, photoAlt, children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

ProfileContainer.propTypes = {
  children: PropTypes.any,
};

ProfileContainer.Photo = Photo;
ProfileContainer.Row = Row;

export default ProfileContainer;
