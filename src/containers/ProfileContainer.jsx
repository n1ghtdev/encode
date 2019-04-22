import React from 'react';
import Profile from '../components/Profile';
import Span from '../components/Span';
import A from '../components/A';

const ProfileContainer = () => {
  return (
    <Profile>
      <Profile.Photo photoSrc="" photoAlt="" />
      <Profile.Menu>
        <Profile.Item>
          Hello, <Span Color="#3C7ECC" FontWeight="700">$username</Span>
        </Profile.Item>
        <Profile.Item hovered>
          <A href="#" style={{ display: 'block', width: '100%' }}>Logout</A>
        </Profile.Item>
      </Profile.Menu>
    </Profile>
  );
}

export default ProfileContainer;
