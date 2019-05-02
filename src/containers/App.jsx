import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EncodeContainer from './EncodeContainer';
import SidebarContainer from './SidebarContainer';
import Section from '../components/Section';
import GlobalState from '../store/GlobalState';

/* eslint-disable */
const App = () => (
  <GlobalState>
    <SidebarContainer />
    <Section Padding="25px 15px" bgColor="#F1F7FF">
      <Switch>
        <Route path="/" component={EncodeContainer} />
      </Switch>
    </Section>
  </GlobalState>
);

export default App;
