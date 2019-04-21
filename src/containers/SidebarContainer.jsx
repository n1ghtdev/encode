import React from 'react';
import Aside from '../components/Aside';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
import ProfileContainer from './ProfileContainer';

const SidebarContainer = () => (
  <Aside bgColor="#19171C">
    <HeaderContainer />
    <ProfileContainer />
    <NavContainer />
  </Aside>
);

export default SidebarContainer;
