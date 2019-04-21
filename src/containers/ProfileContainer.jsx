import React from 'react';
import Profile from '../components/Profile';
import Span from '../components/Span';
import A from '../components/A';

const ProfileContainer = () => {
  return (
    <Profile>
      <Profile.Photo photoSrc="" photoAlt="" />
      <Profile.Row>
        Hello, <Span Color="#3C7ECC" FontWeight="700">$username</Span>
      </Profile.Row>
      <Profile.Row>
        Logout
      </Profile.Row>
    </Profile>
  );
}

export default ProfileContainer;
