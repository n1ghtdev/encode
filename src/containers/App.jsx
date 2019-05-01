import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EncodeContainer from './EncodeContainer';
import SidebarContainer from './SidebarContainer';
import Section from '../components/Section';

/* eslint-disable */
const App = () => (
  <>
    <SidebarContainer />
    <Section Padding="25px 15px" bgColor="#F1F7FF">
      <Switch>
        <Route path="/" component={EncodeContainer} />
      </Switch>
    </Section>
  </>
);

export default App;
