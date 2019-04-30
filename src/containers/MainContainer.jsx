import React, { useState } from 'react';
import Section from '../components/Section';
import EncodeContainer from './EncodeContainer';

// -> mainpage

const MainContainer = () => {
  //const [] = useState();

  return (
    <Section Padding="25px 15px" bgColor="#F1F7FF">
      <EncodeContainer />
    </Section>
  );
}

export default MainContainer;
