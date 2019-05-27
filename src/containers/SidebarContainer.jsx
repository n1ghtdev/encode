import React from 'react';
import Aside from '../components/Aside';
import HeaderContainer from './HeaderContainer';
import ProfileContainer from './ProfileContainer';
import NavContainer from './NavContainer';
import OptNavContainer from './OptNavContainer';
import FooterContainer from './FooterContainer';

const SidebarContainer = () => (
  <Aside bgColor="#101F32">
    <HeaderContainer />
    {/* <ProfileContainer /> */}
    <NavContainer />
    {/* <OptNavContainer /> */}
    <FooterContainer />
  </Aside>
);

export default SidebarContainer;
