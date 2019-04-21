import React from 'react';
import Header from '../components/Header';
import { H1, H2 } from '../components/Headings';


const HeaderContainer = () => (
  <Header bgColor="#1F5493" borderColor="#3A7BC8">
    <H1 lineHeight="1" FontSize="1.5rem" FontFamily="'Comfortaa', cursive" Color="#fff">encode</H1>
    <H2 lineHeight="1" FontSize="0.875rem" FontWeight="400" Color="#93B7E1">secure your information</H2>
  </Header>
);

export default HeaderContainer;
