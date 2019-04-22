import React, { useState } from 'react';
import Section from '../components/Section';
import EncodeContainer from './EncodeContainer';

const MainContainer = () => {
  //const [] = useState();

  return (
    <Section Padding="54px 15px 25px 15px">
      <EncodeContainer />
    </Section>
  );
}

export default MainContainer;
