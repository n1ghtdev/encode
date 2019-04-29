import PropTypes from 'prop-types';
import styled from 'styled-components';

const Profile = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background-color: #0B1A2E;
  display: flex;
  align-items: center;
`;

const Photo = styled.img.attrs(({ imgAlt, imgSrc }) => ({
  alt: imgAlt || 'No picture',
  src: imgSrc || 'https://i.imgur.com/04YIjte.png',
}))`
  border-radius: 50%;
  background-color: #101F32;
  width: 50px;
  height: 50px;
`;

const Username = styled.span`
  padding-left: 20px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
`;

Profile.propTypes = {
  children: PropTypes.any,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
};

Profile.Photo = Photo;
Profile.Username = Username;

export default Profile;
