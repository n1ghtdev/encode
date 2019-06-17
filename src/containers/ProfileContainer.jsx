import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile';
import A from '../components/A';

const ProfileContainer = () => (
  <A as={Link} to="/dashboard">
    <Profile>
      <Profile.Photo photoSrc="" photoAlt="" />
      <Profile.Username>n1ghtjs</Profile.Username>
    </Profile>
  </A>
);

export default ProfileContainer;
