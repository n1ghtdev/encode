import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EncryptPage from '../pages/EncryptPage';
import DecryptPage from '../pages/DecryptPage';
import SidebarContainer from './SidebarContainer';
import Section from '../components/Section';
import GlobalStore from '../store/GlobalStore';

/* eslint-disable */
const App = () => (
  <GlobalStore>
    <SidebarContainer />
    <Section Padding="25px 15px" bgColor="#F1F7FF">
      <Switch>
        <Route exact path="/encrypt" component={EncryptPage} />
        <Route exact path="/decrypt" component={DecryptPage} />
      </Switch>
    </Section>
  </GlobalStore>
);

export default App;
