import React from 'react';
import Aside from '../components/Aside';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
import FooterContainer from './FooterContainer';

const SidebarContainer = () => (
  <Aside bgColor="#101F32">
    <HeaderContainer />
    <NavContainer />
    <FooterContainer />
  </Aside>
);

export default SidebarContainer;
